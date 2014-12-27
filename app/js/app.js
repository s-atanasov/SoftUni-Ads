var app = angular.module('softUniAds', ['ngRoute','ui.bootstrap'])
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
		$routeProvider.otherwise({
			redirectTo : '/ads'
		});
	});



