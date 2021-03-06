app.controller('LoginController',function($scope,$location, MainServices, $http,$rootScope){

    if($rootScope.accessToken){
        $location.path('/user/home');
    }

    $scope.loginUser = function(user){

        MainServices.Login(user.username,user.password,function(resp){

            sessionStorage.accessToken = resp.access_token;
            sessionStorage.username = resp.username;
            sessionStorage.user = JSON.stringify(resp);
            $rootScope.accessToken = resp.access_token;
            $rootScope.username = resp.username;
            console.log(resp);
            if(resp.isAdmin){
                console.log('Admin');
                $rootScope.admin = true;
                sessionStorage.admin = true;
                $location.path('/admin/home');
            }else{
                $rootScope.admin = false;
                sessionStorage.admin = false;
                $location.path('/user/home');
            }


        });

    };

});
