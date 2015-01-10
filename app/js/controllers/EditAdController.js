app.controller('EditAdController',function($scope,$location,FileReaderServices,MainServices ,UserServices,UserProfileServices, $http,$rootScope,$routeParams){

    if(!$rootScope.accessToken){
        $location.path('/ads');
    }

    //console.log($routeParams);

    UserServices.getById($routeParams.id,function(resp){
        $scope.editAd = {
            Title : resp.title,
            Text : resp.text,
            imageSrc : resp.imageDataUrl,
            categoryid : resp.categoryId,
            townid : resp.townId
        };
    },function(status){

        if(status == 401){
            showError('You are not authorized');
        }else if(status == 400){
            showError('There is not ad with this id');
        }else{
            showError('Something went wrong');
        }
    });

    $scope.getFile = function () {

        FileReaderServices.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.imageSrc = result;
                $scope.editAd.imageSrc = result;
            });
    };
    $scope.changeImage = 0;

    $scope.ChangeImage = function(){

        if($scope.changeImage == 0){
            $scope.changeImage = 1;
        }else{
            $scope.changeImage = 0;
        }
    };

    $scope.deleteImage = 0;

    $scope.DeleteImage = function(){

        if($scope.deleteImage == 0){
            $scope.deleteImage = 1;
        }else{
            $scope.deleteImage = 0;
        }
    };

    $scope.EditAd = function (editAd) {

        var imageChange = false;

        if ($scope.changeImage == 1){
            imageChange = true;
        }

        if($scope.deleteImage == 1){
            imageChange = true;
            editAd.imageSrc = null;
        }

        var ad = {
            Title : editAd.Title,
            Text : editAd.Text,
            ChangeImage : imageChange,
            ImageDataURL : editAd.imageSrc,
            CategoryId : editAd.categoryid,
            TownId : editAd.townid
        };

        UserServices.edit($routeParams.id,ad);
        showSuccess("Advertisement edited. Don't forget to submit it for publishing.");

    };


});
