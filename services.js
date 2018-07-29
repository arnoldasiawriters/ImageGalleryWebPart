(function () {
    'use strict';

    angular
        .module('ImageGalleryUtils', [])
        .service('ImageGalleryService', ImageGalleryService)
        .directive('listItems', ListItems);

    ImageGalleryService.$inject = ['$http'];
    function ImageGalleryService($http) {
        var service = this;

        service.get_folder_names = function () {
            var response = $http({
                method: 'GET',
                url: 'folder_names.json'
            });
            return response;
        };
    }

    function ListItems() {
        var ddo = {
            restrict:'E',
            templateUrl: "list_items.tpl.html",
            scope: {
                folders: "=folders"
            },
            
        };
        return ddo;
    }
})();