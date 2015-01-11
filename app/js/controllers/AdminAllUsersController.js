app.controller('AdminAllUsersController',function($scope,$location,AdminServices, MainServices, $http,$rootScope) {

    if (!$rootScope.admin) {
        $location.path('/ads');
    }

    console.log('All users');

    AdminServices.getAllUsers(function (resp) {
        console.log(resp);
        $scope.users = resp;
    });

});
