app.controller('RegisterController',function($scope, MainServices, $http){


   $scope.addUser = function(regInfo){
        console.log(regInfo);
    };


    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

});
