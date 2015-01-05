app.controller('PublishAdController',function($scope,$location,MainServices ,UserServices, $http,$rootScope){

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

    MainServices.getAllCategories(function(resp){
        $scope.categories = resp;
    });

    $scope.fileChanged = function (el){
        console.log(el.files);
        $scope.fileName = el.files;
        $scope.$apply();
    }


    $scope.PublishAd = function(ad){
        console.log(ad);
        UserServices.create(ad);
        $location.path('/user/ads');
    };

});
