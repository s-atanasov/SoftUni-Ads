app.controller('AdminAdsController',function($scope,$location,AdminServices, MainServices, $http,$rootScope){

    if(!$rootScope.admin){
        $location.path('/ads');
    }

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;



    AdminServices.getAllAds(function(resp){
        console.log(resp);
        $scope.adminData = resp;
        $scope.activePage = 1;
        $scope.activeCatId = 0;
        $scope.catid = 0;
        $scope.townid = 0;
        $scope.statusId = -1;
        $scope.pageNums = resp.numPages;
    });

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

    $scope.getPage = function(pageNum,catid,townid,statusid){
        $scope.activePage = pageNum;
        if(catid != 0){
            pageNum = pageNum + '&CategoryId=' + catid;
        }
        if(townid != 0){
            pageNum = pageNum + '&townid=' + townid;
        }
        if(statusid != -1){
            pageNum = pageNum + getStatusName(statusid);
        }
        AdminServices.getAdsByPage(pageNum,function(resp){
            $scope.adminData = resp;
        });
    };

    $scope.getNumber = function(num) {
        return new Array(num);
    };

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

    MainServices.getAllCategories(function(resp){
        $scope.categories = resp;
    });

    $scope.CategoryFilter = function(id){
        $scope.townid = 0;
        $scope.statusId = -1;
        $scope.activePage = 1;
        if(id == 0){
            $scope.catid = 0;
            AdminServices.getAllAds(function(resp){
                $scope.adminData = resp;
                $scope.pageNums = resp.numPages;
            });
        }else{
            $scope.catid = id;
            AdminServices.getAdsByCatId(id,function(resp){
                $scope.adminData = resp;
                $scope.pageNums = resp.numPages;
            });
        }

    };

    $scope.TownFilter = function(id){
        $scope.catid = 0;
        $scope.statusId = -1;
        if(id == 0) {
            $scope.activePage = 1;
            $scope.townid = 0;
            AdminServices.getAllAds(function (resp) {
                $scope.adminData = resp;
                $scope.pageNums = resp.numPages;
            });
        }else{
            $scope.activePage = 1;
            $scope.townid = id;
            AdminServices.getAdsByTownId(id,function(resp){
                $scope.adminData = resp;
                $scope.pageNums = resp.numPages;
            });
        }

    };

    $scope.StatusFilter = function(statusId){
        $scope.statusId = statusId;
        $scope.catid = 0;
        $scope.townid = 0;
        $scope.activePage = 1;
        if(statusId == -1){
            AdminServices.getAllAds(function (resp) {
                $scope.adminData = resp;
                $scope.pageNums = resp.numPages;
            });
        }else{
            var statusName = '1' + getStatusName(statusId);
            AdminServices.getAdsByPage(statusName,function (resp) {
                $scope.adminData = resp;
            });

        }

    };

    $scope.DeleteAd = function (id){
        var confirmDelete = confirm('Are you sure?');
        if(confirmDelete){
            AdminServices.deleteAd(id, function (resp) {
                showSuccess('The ad is deleted successfully');
                AdminServices.getAllAds(function(resp){
                    $scope.adminData = resp;
                    $scope.activePage = 1;
                });
            });
        }
    };

    $scope.ApproveAd = function (id) {

        AdminServices.approveAd(id, function (resp) {
            showSuccess('The ad is approved successfully');
            AdminServices.getAllAds(function(resp){
                $scope.adminData = resp;
                $scope.activePage = 1;
            });
        });

    };





});
