app.factory('UserProfileServices', function($http, $log){

    // LIVE - http://softuni-ads.azurewebsites.net
    // DEBUG - http://localhost:1337
    var URL = 'http://localhost:1337/api/user';

    var getUser = function(success){
        $http({
            method : 'GET',
            url : URL + '/profile'
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    };

    var updateUser = function(name,email,phone,townid,success){

        var userData = {
            name: name,
            email: email,
            PhoneNumber: phone,
            townid: townid
        };

        $http({
            method : 'PUT',
            url : URL + '/profile',
            data: userData
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                $log.warn(data);
            })
    }


    return{
        getUser: getUser,
        updateUser: updateUser
    }

});
