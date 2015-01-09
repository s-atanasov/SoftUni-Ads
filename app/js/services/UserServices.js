app.factory('UserServices', function ($resource, $http) {


    //var URL = 'http://softuni-ads.azurewebsites.net/api/user/ads/:id';
    var userURL = 'http://localhost:1337/api/user/';
    var rootURL = userURL + 'ads';
    var URL = rootURL + '/:id?PageSize=1';

    var resource = $resource(
        URL,
        {id: '@id'},
        { update: {
            method: 'PUT'
        }
        });

    var deactivateResource = $resource(
        rootURL + '/deactivate/:id',
        {id: '@id'},
        { update: {
            method: 'PUT'
        }
        });

    var publishAgainResource = $resource(
        rootURL + '/publishagain/:id',
        {id: '@id'},
        { update: {
            method: 'PUT'
        }
        });

    function getUser(){
        return $resource(
            userURL + 'profile'
        ).get();
    }

    function getAllAds() {
        return resource.get();
    }

    function getPage(pageNum){
        return $resource(
            rootURL + '?PageSize=1&StartPage=' + pageNum
        ).get();
    }

    function deactivateAd(id){
        return deactivateResource.update({id: id});
    }

    function publishAgain(id){
        return publishAgainResource.update({id: id});
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id,success,error) {
        //return resource.get({id: id});
        $http({
            method : 'GET',
            url : rootURL + '/' + id
        })
            .success(function(data,status,headers,config){
                success(data);
            })
            .error(function(data,status,headers,config){
                error(data);
            })
    }

    function editAd(id, ad) {
        return resource.update({id: id}, ad);
    }

    function deleteAd(id) {
        return resource.delete({id: id});
    }

    return {
        getAll: getAllAds,
        getPage: getPage,
        create: createNewAd,
        getById: getAdById,
        edit: editAd,
        delete: deleteAd,
        deactivateAd: deactivateAd,
        publishAgain: publishAgain,
        getUser: getUser
    }
});