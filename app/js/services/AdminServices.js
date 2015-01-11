app.factory('AdminServices', function($http, $log){

    // LIVE - http://softuni-ads.azurewebsites.net/api/admin
    // DEBUG - http://localhost:1337/api/admin
    var URL = 'http://localhost:1337/api/admin';

    var pagesize = 1;

    var getAllAds = function(success){
        $http({
            method : 'GET',
            url : URL + '/ads?pagesize=' + pagesize
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var getAdsByPage = function(pageNum,success){
        $http({
            method : 'GET',
            url : URL + '/ads?pagesize=' + pagesize + '&startpage=' + pageNum
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var getAdsByCatId = function(catid,success){

        $http({
            method : 'GET',
            url : URL + '/ads?pagesize=' + pagesize + '&categoryid=' + catid
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var getAdsByTownId = function(townid,success){

        $http({
            method : 'GET',
            url : URL + '/ads?pagesize=' + pagesize + '&townid=' + townid
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var deleteAd = function (id,success) {
        $http({
            method : 'DELETE',
            url : URL + '/ads/' + id
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var approveAd = function (id,success) {
        $http({
            method : 'PUT',
            url : URL + '/Ads/Approve/' + id
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var rejectAd = function (id,success) {
        $http({
            method : 'PUT',
            url : URL + '/Ads/Reject/' + id
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var getAd = function (id, success,error) {
        $http({
            method : 'GET',
            url : URL + '/Ads/' + id
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                error(status);
            })
    };

    var editAd = function (id,ad, success) {
        $http({
            method : 'PUT',
            url : URL + '/Ads/' + id,
            data: ad
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var getAllUsers = function (success) {
        $http({
            method : 'GET',
            url : URL + '/Users?pagesize=3'
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var getUsersByPage = function(pageNum,success){
        $http({
            method : 'GET',
            url : URL + '/users?pagesize=3&startpage=' + pageNum
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    return{
        getAllAds : getAllAds,
        getAdsByPage: getAdsByPage,
        getAdsByCatId : getAdsByCatId,
        getAdsByTownId : getAdsByTownId,
        deleteAd : deleteAd,
        approveAd: approveAd,
        rejectAd : rejectAd,
        getAd : getAd,
        editAd : editAd,
        getAllUsers: getAllUsers,
        getUsersByPage : getUsersByPage
    }

});
