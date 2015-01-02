app.controller('RegisterController',function($scope,$location, MainServices, $http,$rootScope){


   $scope.addUser = function(regInfo){
        console.log(regInfo);
       $scope.passwordsError = '';
       if(regInfo.password == regInfo.confirmPassword){
            MainServices.Register(regInfo.username,regInfo.password,regInfo.name,regInfo.email,regInfo.phone,regInfo.townId,function(resp){


                sessionStorage.accessToken = resp.access_token;
                sessionStorage.username = resp.username;
                $rootScope.accessToken = resp.access_token;
                $rootScope.username = resp.username;

                $location.path('/ads');

            });
       }else{
           $scope.passwordsError = 'PasswordsError';
       }
    };


    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

});
