app.controller('AdminAllUsersController',function($scope,$location,AdminServices, MainServices, $http,$rootScope) {

    if (!$rootScope.admin) {
        $location.path('/ads');
    }

    AdminServices.getAllUsers(function (resp) {
        $scope.users = resp;
        $scope.activePage = 1;
        $scope.pageNums = resp.numPages;
    });

    $scope.getPage = function(pageNum){
        $scope.activePage = pageNum;

        AdminServices.getUsersByPage(pageNum,function(resp){
            $scope.users = resp;
        });
    };

    $scope.getNumber = function(num) {
        return new Array(num);
    };

});
