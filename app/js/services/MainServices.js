app.factory('MainServices', function($http, $log){

    return{
        getAllAds : function(success){
            $http({
                method : 'GET',
                url : 'http://softuni-ads.azurewebsites.net/api/ads?PageSize=5&StartPage=1'
            })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                 $log.warn(data);
            })
        }
    }

});
