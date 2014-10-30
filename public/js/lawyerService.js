var app = angular.module('demShadyLawyers');

app.service('lawyerService', function($http) {
	this.getLawyers = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3500/lawyers'
		})
	}
});