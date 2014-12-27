app.factory('MainServices', function($http, $log){

    // LIVE - http://softuni-ads.azurewebsites.net
    // DEBUG - http://localhost:1337
    var URL = 'http://localhost:1337/api';

    var getAllAds = function(success){
        $http({
            method : 'GET',
            url : URL + '/ads'
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    }

    var getAllTowns = function(success){
        $http({
            method : 'GET',
            url : URL + '/towns'
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    }

    var getAllCategories = function(success){
        $http({
            method : 'GET',
            url : URL + '/categories'
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    }

    var getAdsByCatId = function(catid,success){

        $http({
            method : 'GET',
            url : URL + '/ads?categoryid=' + catid
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
            url : URL + '/ads?townid=' + townid
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
        getAllTowns : getAllTowns,
        getAllCategories : getAllCategories,
        getAdsByCatId : getAdsByCatId,
        getAdsByTownId : getAdsByTownId
    }

});
