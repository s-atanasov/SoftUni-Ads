app.controller('UserAdsController',function($scope,$location, UserServices, $http,$rootScope){

    if(!$rootScope.accessToken){
        $location.path('/ads');
    }

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;

    $scope.userData = UserServices.getAll();

    $scope.getNumber = function(num) {
        return new Array(num);
    }

    $scope.activePage = 1;
    $scope.statusId = -1;

    $scope.StatusFilter = function(statusId){
        $scope.statusId = statusId;
        $scope.activePage = 1;
        if(statusId == -1){
            $scope.userData = UserServices.getAll();
        }else{
            var statusName = '1' + getStatusName(statusId);
            $scope.userData = UserServices.getPage(statusName);
        }

    };

    function getStatusName(statusId){
        var statusName = '&Status=';
        switch (statusId){
            case 1:
                statusName += 'WaitingApproval';
                break;
            case 2:
                statusName += 'Published';
                break;
            case 3:
                statusName += 'Rejected';
                break;
            case 0:
                statusName += 'Inactive';
                break;
        }
        return statusName;
    }

    $scope.getPage = function(pageNum,statusId){
        $scope.activePage = pageNum;
        if(statusId != -1){
            pageNum = pageNum + getStatusName(statusId);
        }
        $scope.userData = UserServices.getPage(pageNum);

    };

    $scope.Deactivate = function (pageNum,statusId,id) {
        UserServices.deactivateAd(id);
        showSuccess('The ad is deactivated successfully');
        setTimeout(function(){

                $scope.activePage = pageNum;
                if(statusId != -1){
                    pageNum = pageNum + getStatusName(statusId);
                }
                $scope.userData = UserServices.getPage(pageNum);


        }, 1000);
    };

    $scope.PublishAgain = function (pageNum,statusId,id) {
        UserServices.publishAgain(id);
        showSuccess('The ad is published again');
        setTimeout(function(){
            $scope.activePage = pageNum;
            if(statusId != -1){
                pageNum = pageNum + getStatusName(statusId);
            }
            $scope.userData = UserServices.getPage(pageNum);
        }, 1000);


    };

    $scope.DeleteAd = function (id){
        var confirmDelete = confirm('Are you sure?');
        if(confirmDelete){
            UserServices.delete(id);
            showSuccess('The ad is deleted successfully');
            setTimeout(function(){
                $scope.userData = UserServices.getAll();
                $scope.activePage = 1;
            }, 1000);
        }
    }

});
