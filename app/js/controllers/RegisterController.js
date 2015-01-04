app.controller('RegisterController',function($scope,$location, MainServices, $http,$rootScope){

    if($rootScope.accessToken){
        $location.path('/user/home');
    }

   $scope.addUser = function(regInfo){

       $scope.passwordsError = '';
       if(regInfo.password == regInfo.confirmPassword){
            MainServices.Register(regInfo.username,regInfo.password,regInfo.name,regInfo.email,regInfo.phone,regInfo.townId,function(resp){


                sessionStorage.accessToken = resp.access_token;
                sessionStorage.username = resp.username;
                $rootScope.accessToken = resp.access_token;
                $rootScope.username = resp.username;

                $location.path('/user/home');

            });
       }else{
           $scope.passwordsError = 'PasswordsError';
       }
    };


    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

});
