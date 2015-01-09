app.controller('EditAdController',function($scope,$location,MainServices ,UserServices,UserProfileServices, $http,$rootScope,$routeParams){

    if(!$rootScope.accessToken){
        $location.path('/ads');
    }

    console.log($routeParams);

    $scope.currAd = UserServices.getById($routeParams.id,function(resp){
        console.log('success');
        console.log(resp);
    },function(error){
        console.log('error');
        console.log(error);
    });

    console.log($scope.currAd);


});
