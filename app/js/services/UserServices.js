app.factory('UserServices', function ($resource, $http) {



    //var URL = 'http://softuni-ads.azurewebsites.net/api/user/ads/:id';
    var URL = 'http://localhost:1337/api/user/ads/:id?PageSize=1';

    var resource = $resource(
        URL,
        {id: '@id'},
        { update: {
            method: 'PUT'
        }
        });

    function getAllAds() {
        return resource.get();
    }

    function getPage(pageNum){
        return $resource(
            'http://localhost:1337/api/user/ads?PageSize=1&StartPage=' + pageNum
        ).get();
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id) {
        return resource.get({id: id});
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
        delete: deleteAd
    }
});