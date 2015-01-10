app.controller('LogoutController',function($scope,$location,$rootScope){
    sessionStorage.clear();
    $rootScope.accessToken = '';
    $rootScope.username = '';
    $rootScope.admin = '';
    console.log('logout');
    $location.path('/ads');
});
