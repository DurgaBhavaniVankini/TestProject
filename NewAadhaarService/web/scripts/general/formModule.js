var formModule = angular.module('formModule', [])
.controller('formController',['$scope','$http',function($scope,$http)
{
	$scope.getStudentData = function(details)    
	{		
		$http.post('/studentservice/student/getStudentDetails',details.pin).then(function(response)
		{
			$scope.data = response.data;     
			if($scope.data.successful)     
			{  
				console.log("Student data retrieved successfully.");
			}
			else
			{
				
				console.log("Error while validating user");
			}
		},
		function(response)
		{
			console.log("Server error while validating user");
		});
	};    
	
	
	 
}]);