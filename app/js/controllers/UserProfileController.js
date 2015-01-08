app.controller('UserProfileController',function($scope,$location,MainServices ,UserServices,UserProfileServices, $http,$rootScope){

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

    UserProfileServices.getUser(function(resp){
        $scope.currUser = resp;
        //console.log(resp);
        $scope.userProfile = {
            name: resp.name,
            email: resp.email,
            phone: resp.phoneNumber,
            townid: resp.townId
        };
    });

    $scope.UpdateUser = function (user) {
        //console.log(user);
        UserProfileServices.updateUser(user.name,user.email,user.phone,user.townid,function(resp){
           alert('Successfully update your profile.');
        });
    };

    $scope.UpdateUserPassword = function (userPassword) {
        console.log(userPassword);
        $scope.passwordsError = false;
        if(userPassword.newPassword == userPassword.newPasswordConfirm){

            alert('Success');
        }else{
            $scope.passwordsError = true;
        }
    };

});
