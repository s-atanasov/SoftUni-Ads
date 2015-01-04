app.controller('MainController',function($scope, MainServices, $http){

    MainServices.getAllAds(function(resp){
        $scope.data = resp;
        $scope.activePage = 1;
        $scope.activeCatId = 0;
        $scope.catid = 0;
        $scope.townid = 0;
        $scope.pageNums = resp.numPages;
    });

    $scope.getPage = function(pageNum,catid,townid){
        $scope.activePage = pageNum;
        if(catid != 0){
            pageNum = pageNum + '&CategoryId=' + catid;
        }
        if(townid != 0){
            pageNum = pageNum + '&townid=' + townid;
        }
        MainServices.getAdsByPage(pageNum,function(resp){
            $scope.data = resp;
        });
    };

    $scope.getNumber = function(num) {
        return new Array(num);
    }

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

    MainServices.getAllCategories(function(resp){
        $scope.categories = resp;
    });

    $scope.CategoryFilter = function(id){
        $scope.townid = 0;
        $scope.activePage = 1;
        if(id == 0){
            $scope.catid = 0;
            MainServices.getAllAds(function(resp){
                $scope.data = resp;
                $scope.pageNums = resp.numPages;
            });
        }else{
            $scope.catid = id;
            MainServices.getAdsByCatId(id,function(resp){
                $scope.data = resp;
                $scope.pageNums = resp.numPages;
            });
        }


    };

    $scope.TownFilter = function(id){
        $scope.catid = 0;
        if(id == 0) {
            $scope.activePage = 1;
            $scope.townid = 0;
            MainServices.getAllAds(function (resp) {
                $scope.data = resp;
                $scope.pageNums = resp.numPages;
            });
        }else{
            $scope.activePage = 1;
            $scope.townid = id;
            MainServices.getAdsByTownId(id,function(resp){
                $scope.data = resp;
                $scope.pageNums = resp.numPages;
            });
        }

    };




});
