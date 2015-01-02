var app = angular.module('softUniAds', ['ngRoute','ui.bootstrap','match'])
	.config(function ($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'RegisterController'
		});
		$routeProvider.when('/ads', {
			templateUrl: 'templates/allAds.html'
		});
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		});
		$routeProvider.when('/logout', {
			templateUrl: 'templates/logout.html',
			controller: 'LogoutController'
		});
		$routeProvider.otherwise({
			redirectTo : '/ads'
		});
	});



