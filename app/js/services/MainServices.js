app.factory('MainServices', function($http, $log){

    // LIVE - http://softuni-ads.azurewebsites.net
    // DEBUG - http://localhost:1337
    var URL = 'http://localhost:1337/api';

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
    }

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
    }

    var getAllTowns = function(success){
        $http({
            method : 'GET',
            url : URL + '/towns?pagesize=' + pagesize
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
            url : URL + '/categories?pagesize=' + pagesize
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

    var Register = function(username,password,name,email,phone,townid,success){

        var userData = {
            Username: username,
            Password: password,
            ConfirmPassword: password,
            Name: name,
            Email: email,
            Phone: phone,
            TownId: townid
        };

        $http({
            method : 'POST',
            url : URL + '/user/Register',
            data: userData
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var Login = function(username,password,success){

        var userData = {
            Username: username,
            Password: password
        };

        $http({
            method : 'POST',
            url : URL + '/user/Login',
            data: userData
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    return{
        getAdsByPage : getAdsByPage,
        getAllAds : getAllAds,
        getAllTowns : getAllTowns,
        getAllCategories : getAllCategories,
        getAdsByCatId : getAdsByCatId,
        getAdsByTownId : getAdsByTownId,
        Register: Register,
        Login: Login
    }

});
