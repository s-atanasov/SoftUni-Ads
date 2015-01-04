var app = angular.module('softUniAds', ['ngRoute','ui.bootstrap','match','ngResource'])
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
		$routeProvider.when('/user/home', {
			templateUrl: 'templates/allAds.html'
		});
		$routeProvider.when('/user/ads', {
			templateUrl: 'templates/userAds.html',
			controller: 'UserAdsController'
		});
		$routeProvider.otherwise({
			redirectTo : '/ads'
		});
	});



