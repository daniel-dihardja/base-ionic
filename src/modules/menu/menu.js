/**
 * Created by danieldihardja on 23/04/15.
 */

(function() {

    'use-strict';

    angular.module('app')
        .controller('menuController', menuController);

    menuController.$inject = ['$scope'];


    function menuController($scope) {
        var wid = window.innerWidth;
        $scope.menuWidth = wid - 80;
    }

})();
