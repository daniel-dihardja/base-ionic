/**
 * Created by danieldihardja on 27/03/15.
 */

(function() {

    'use-strict';

    angular.module('app')
        .controller('megalistController', megalistController);

    megalistController.$inject = ['$scope',  '$state'];

    function megalistController($scope, $state) {

		var pics = [
			'assets/images/pic-01.jpg',
			'assets/images/pic-02.jpg',
			'assets/images/pic-03.jpg',
			'assets/images/pic-04.jpg',
			'assets/images/pic-05.jpg',
			'assets/images/pic-06.jpg',
			'assets/images/pic-07.jpg',
			'assets/images/pic-08.jpg'
		];

		var items = [];
        for(var i=0; i<100; i++) {
			var index = Math.floor(Math.random() * 8);
			var pic = pics[index];
            var item = {
				count: i+1,
				pic: pic
			};
			items.push(item);
        }
        $scope.items = items;
    }
})();