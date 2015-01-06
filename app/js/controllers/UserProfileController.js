app.controller('UserProfileController',function($scope,$location,MainServices ,UserServices, $http,$rootScope){

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    var userProfile = UserServices.getUser();

    $scope.userProfile = {name: userProfile.name};

    $scope.currUserName = userProfile.name;

    $scope.currUser = UserServices.getUser();

    console.log($scope.currUser);

    $scope.UpdateUser = function (user) {
       console.log(user);
    }
});
