(function () {
    'use strict';

    angular
        .module('ImageGalleryApp', ['ImageGalleryUtils'])
        .controller('ImageGalleryController', ImageGalleryController)
        .constant('currListName', 'ImageGalleryPicLib');

    ImageGalleryController.$inject = ['ImageGalleryService', 'currListName'];
    function ImageGalleryController(ImageGalleryService, currListName) {
        var imageGallery = this;

        var folders_promise = ImageGalleryService.get_folder_names();

        folders_promise
            .then(function (data) {
                imageGallery.folder_names = data.data.d;
                console.log(currListName);

                angular.forEach(imageGallery.folder_names, function (v, k) {
                    var folder_nm = v.parent.substring(1);
                    if (folder_nm == currListName) {
                        console.log(v);
                    }
                });
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
})();