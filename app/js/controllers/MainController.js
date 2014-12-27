app.controller('MainController',function($scope, MainServices, $http){

    MainServices.getAllAds(function(resp){
        $scope.data = resp;
    });

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

    MainServices.getAllCategories(function(resp){
        $scope.categories = resp;
    });

    $scope.CategoryFilter = function(id){
        if(id == 0){
            MainServices.getAllAds(function(resp){
                $scope.data = resp;
            });
        }else{
            MainServices.getAdsByCatId(id,function(resp){
                $scope.data = resp;
            });
        }


    };

    $scope.TownFilter = function(id){
        if(id == 0) {
            MainServices.getAllAds(function (resp) {
                $scope.data = resp;
            });
        }else{
            MainServices.getAdsByTownId(id,function(resp){
                $scope.data = resp;
            });
        }

    };


});
