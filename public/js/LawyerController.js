var app = angular.module('demShadyLawyers');

app.controller('LawyerController', function($scope, lawyerService) {
	$scope.test = 'I am working'
	$scope.getLawyers = function() {
		lawyerService.getLawyers().then(function(data) {
			$scope.lawyers = data.data;
			console.log(data.data);
		})
	}
	$scope.getLawyers();
});