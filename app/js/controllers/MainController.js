app.controller('MainController',function($scope, MainServices){

    MainServices.getAllAds(function(resp){
        $scope.data = resp;
    });


});
