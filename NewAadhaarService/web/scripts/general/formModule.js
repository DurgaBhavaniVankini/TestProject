var formModule = angular.module('formModule', [])
.controller('formController',['$scope','$http',function($scope,$http)
{
	$scope.save = function(details)
	{
		console.log("aadhaar:"+details.aadhaar);
		$http.post('/aadhaarservices/aadhaar/getAadhaarDetails',details.aadhaar).then(function(response)
		{
			$scope.data = response.data;   
			if($scope.data.successful)   
			{
				Andromeda.setSessionValue("username", $scope.data.responseObject.loginData.username);
				Andromeda.setSessionValue("context", $scope.data.responseObject.loginData.context);
				Andromeda.showLoginHome();
			}
			else
			{
				$("#errorDiv").show();
				$("#errorDiv").html("<b style='margin-left: 28%;font-size: medium;'>Note:</b> Invalid login credentials");
				console.log("Error while validating user");
			}
		},
		function(response)
		{
			console.log("Server error while validating user");
		});
	};  
	
	$scope.uploadFiles = function(e,targetFile)
	{  
		 var fileName = null;
		if(targetFile=="File"){
			 fileName = "File"
		}
		var k =0;
		for(var i =	0;	i < e.files.length; i++)
		{
			var singleFileInfo = e.files[i];
			(function(singleFileInfo)
			{
				var fileReader;
		        fileReader = new FileReader();
				 fileReader.onload = function(e)
				 {
					 var fileName1 = singleFileInfo.name;
					 var fileExtension = fileName1.replace(/^.*\./, '');
					 fileName=fileName+"."+fileExtension;
					 var binaryString =  e.target.result;
					 var base64 = btoa(binaryString);  
					 var fileModel = 
					 {
							 fileName			:		fileName,
							 base64String		:		base64.toString(),
							 name				:		fileName,
							 folderName			:		'Files'
					 };
					 circularsArr[k] = fileModel;
					 completePaths.push(fileModel) ;
					 k++;
				 }
			 fileReader.readAsBinaryString(e.files[i]);  
			})(singleFileInfo);
		}
		//console.log(circularsArr);
		//console.log(completePaths);
		k=0;
	 };
	 
}]);