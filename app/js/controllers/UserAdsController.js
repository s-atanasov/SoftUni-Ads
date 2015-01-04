app.controller('UserAdsController',function($scope,$location, UserServices, $http,$rootScope){

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;

    $scope.userData = UserServices.getAll();

    console.log($scope.userData);
    $scope.pageNums = $scope.userData.numPages;

    $scope.getPage = function(pageNum,statusId){
        $scope.activePage = pageNum;
        if(statusId != 0){
            //pageNum = pageNum + '&townid=' + townid;
        }
        //MainServices.getAdsByPage(pageNum,function(resp){
        //    $scope.data = resp;
        //});
    };

});
