app.controller('LogoutController',function($scope,$location,$rootScope){
    sessionStorage.clear();
    $rootScope.accessToken = '';
    $rootScope.username = '';
    console.log('logout');
    $location.path('/ads');
});
