app.controller('PublishAdController',function($scope,$location,FileReaderServices, MainServices ,UserServices, $http,$rootScope){

    if(!$rootScope.accessToken){
        $location.path('/ads');
    }

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.accessToken;

    MainServices.getAllTowns(function(resp){
        $scope.towns = resp;
    });

    MainServices.getAllCategories(function(resp){
        $scope.categories = resp;
    });

    $scope.newAd = {
        title : '',
        text : '',
        ImageDataURL : '',
        categoryid : '',
        townid : ''
    };

    $scope.getFile = function () {

        FileReaderServices.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.newAd.ImageDataURL = result;
            });
    };


    $scope.PublishAd = function(ad){
        UserServices.create(ad);
        showSuccess('The ad is published successfully');
        setTimeout(function(){
            $location.path('/user/ads');
        }, 500);

    };

});
