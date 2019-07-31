var visitModule = angular.module('visitModule',[])
.filter('numberFormat', function () {
	return function(input) {
	     input = input || 0;
	     var out = new Intl.NumberFormat('en-IN').format(parseInt(input));
	     return out;
	};
});

visitModule.controller('visitsController',['$scope','$http',function($scope,$http){
	$http.get('/andromeda/visits/getVisits').then(function(response){
		$scope.data = response.data;
		if($scope.data.successful)
		{
			$scope.visitCount = $scope.data.responseObject;
		}
		else
		{
			console.log("Client error while getting visit count");
		}
	},
	function(response)
	{
		console.log("Server error while getting visit count");
	});
}]);