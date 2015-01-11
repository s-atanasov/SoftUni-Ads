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
		$routeProvider.when('/user/ads/publish', {
			templateUrl: 'templates/publishAd.html',
			controller: 'PublishAdController'
		});
		$routeProvider.when('/user/profile', {
			templateUrl: 'templates/userProfile.html',
			controller: 'UserProfileController'
		});
		$routeProvider.when('/user/ads/edit/:id', {
			templateUrl: 'templates/editAd.html',
			controller: 'EditAdController'
		});
		$routeProvider.when('/admin/home', {
			templateUrl: 'templates/adminAds.html',
			controller: 'AdminAdsController'
		});
		$routeProvider.when('/admin/ads/edit/:id', {
			templateUrl: 'templates/adminEditAd.html',
			controller: 'AdminEditAdController'
		});
		$routeProvider.when('/admin/users', {
			templateUrl: 'templates/allUsers.html',
			controller: 'AdminAllUsersController'
		});

		$routeProvider.otherwise({
			redirectTo : '/ads'
		});
	});



