/**
 * @author Ravi
 */

var slotApproval = angular.module('slotApproval', ['ui.filters']);

slotApproval.filter('dateFormat', function () {
    return function(input) {
         if(input == 0 || input == null || input == undefined) {
             return '-';
         } else {
             var out = input.split("-").reverse().join("-");
             return out;
         }
    };   
});

slotApproval.controller('formController', [ '$http', '$scope', function($http, $scope)
{
		var self = this;       
		
		$http.post('/siemens/sdcSlots/getBookedSlots').then(function(response) {
			$scope.programSlotsResponse = response.data;
			if($scope.programSlotsResponse.successful) {
				$scope.programSlots = $scope.programSlotsResponse.responseObject;
				console.log($scope.programSlots);   
			} else {
				showError($scope.programSlotsResponse.errorMessage);
				var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"+ $scope.programSlotsResponse.errorMessage + "</div>";
				jQuery("#errorDiv").html(message);
			}
		}, function(errResponse) {
			console.error('Error while fetching notes');
		});
		
		$scope.checkSlotforApprove = function(slot, status) {  
			slot.slotStatus = status;
			$scope.program = slot;
			// console.log(slot);
			$http.post('/siemens/sdcSlots/getPrgmSlotCourses', slot).then(function(response) {
				$scope.data1 = response.data;
				if($scope.data1.successful) {
					$scope.courses = $scope.data1.responseObject;
					$("#myModal").modal('show');
				} else {
					showError($scope.data1.errorMessage);
					var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"+ $scope.programSlotsResponse.errorMessage + "</div>";
					jQuery("#errorDiv").html(message);
				}
			}, function(errResponse) {
				console.error('Error while fetching notes');
			});
		};
		
		$scope.obj = {};
		$scope.showTransferModal = function(slotObj)
		{
			$scope.mentors = [];
			$scope.obj =
				{
					collegeid : slotObj.collegeid,
					programId : slotObj.programId,
					programName : slotObj.program,
					slotId : slotObj.id,
					lattitude : slotObj.lattitude,
					longitude : slotObj.longitude
				};
			$http.post('/siemens/sdcSlots/getTransferColleges', $scope.obj).then(function(response)
			{
				$scope.data1 = response.data;
				if($scope.data1.successful)
				{
					$scope.courses = $scope.data1.responseObject.courses;
					$scope.colleges = $scope.data1.responseObject.colleges;
					$("#transferModal").modal('show');
					Andromeda.setSessionValue("oldCollegeid", $scope.obj.collegeid);
					Andromeda.setSessionValue("oldCollegeName", slotObj.college);
					Andromeda.setSessionValue("programId", $scope.obj.programId);
					Andromeda.setSessionValue("programName", slotObj.program);
				}
				else
				{
					showError($scope.data1.errorMessage);
					var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"+ $scope.programSlotsResponse.errorMessage + "</div>";
					jQuery("#errorDiv").html(message);
				}
			},
			function(errResponse) {
				console.error('Error while fetching notes');
			});
		};

		
		$scope.approveSlot = function(sdcSlots)
		{
			console.log("befour");  
			 console.log(sdcSlots);
			
			if(sdcSlots.program == null || sdcSlots.program == undefined || sdcSlots.program == "")
				swal("", "Select program", "info");
			else
			{
				sdcSlots.startDate = new Date(sdcSlots.fromDate.split("-").reverse().join("-"));
				sdcSlots.endDate = new Date(sdcSlots.toDate.split("-").reverse().join("-"));
				// console.log(sdcSlots);
				if(sdcSlots.slotStatus == "Approve")
				{
					var status = window.confirm("Are you sure you want to approve?");
					
				
					if(status)
					{
						$("#spinner").show();
						
				        $http.post('/siemens/sdcSlots/approveSlot', sdcSlots).then(function(response) {
				        	
							$scope.data = response.data;
							if($scope.data.successful) {
								$("#spinner").hide();
								swal("Success","Slot Approved!","info");
								$('#myModal').modal('hide');
								$('body').removeClass('modal-open');
								$('.modal-backdrop').remove();
								approveSdcSlot();
							/*	document.getElementById("Reject").style.visibility = "hidden";
								document.getElementById("Approve").disabled=true;*/
							
							} else {
								$("#spinner").hide();   
								swal("Oops!","Server down","info");  
							}
							
						},
						
					
						
						function(errResponse) {  
							console.error('Error while fetching notes');
						});
					}
					
					/*document.getElementById("statuschange").innerHTML="slot Approved";	*/
				}  
				else if(sdcSlots.slotStatus == "Reject")   
				{
					if(sdcSlots.reason == null || sdcSlots.reason == undefined || sdcSlots.reason == "")
					{
						alert("Enter reject reason");
					}
					else
					{
							   
						$("#spinner").show();
				        $http.post('/siemens/sdcSlots/rejectSlot', sdcSlots).then(function(response) {
							$scope.data = response.data;
							if($scope.data.successful) {
								$("#spinner").hide();
								swal("Success","Slot Rejected!","info");
								$('#myModal').modal('hide');
								$('body').removeClass('modal-open');
								$('.modal-backdrop').remove(); 
							/*	$( "#Reject" ).attr("disabled", "disabled");*/

								approveSdcSlot();
								
							/*	document.getElementById("Approve").style.visibility ="hidden";
								document.getElementById("Reject").disabled=true;*/
								
							} else {
								$("#spinner").hide();
								swal("Oops!","Server down","info");
							}
							     
						
							
						}, function(errResponse) {
							console.error('Error while fetching notes');
						});
				        
				  
				        
					}
					
					/*document.getElementById("statuschange").innerHTML="slot Rejected";*/
				}
				
			}
	    };
	    
	    
	    
		$scope.toggleCenters = function()   
		{
			$("#centersSearchRow").toggle();
		};    
	    
	    
	
	
		
		$http.post('/siemens/sdcSlots/getCOECenters').then(function(response)
		{
	        $scope.data = response.data;
	        if($scope.data.successful)
	        {
	        	$("#glyphiconid").hide();
		        $scope.COECenters = $scope.data.responseObject;
	        }
	        else
	        {
	        	$("#glyphiconid").hide();
	            showError($scope.data.errorMessage);
	            var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"+ $scope.data.errorMessage +"</div>";
	            jQuery("#errorDiv").html(message);
	        }
	    },
	    function(errResponse) {
	        console.error('Error ...');
	    });
			  

	/*	$http.get('/siemens/sdcSlots/getColleges').then(function(response)
				{
			        $scope.data = response.data;
			        if($scope.data.successful)
			        {
			        	$("#glyphiconid").hide();
				        $scope.Colleges = $scope.data.responseObject;
			        }
			        else
			        {
			        	$("#glyphiconid").hide();
			            showError($scope.data.errorMessage);
			            var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"+ $scope.data.errorMessage +"</div>";
			            jQuery("#errorDiv").html(message);
			        }
			    },
			    function(errResponse) {
			        console.error('Error ...');
			    });
		*/  
		
		$scope.exportToExcel = function()
		{
			var blob = new Blob([document.getElementById('reportTableDiv').innerHTML], { 
		        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8" 
		    }); 
		    var fileName = "Report.xls"; 
		    saveAs(blob, fileName);
		};
		
		
	    
	    
}]);

function formatDate() {       
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};