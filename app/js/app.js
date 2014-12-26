var app = angular.module('softUniAds', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'MainController'
		});
		$routeProvider.when('/ads', {
			templateUrl: 'templates/allAds.html'
		});
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html'
		});
	});



