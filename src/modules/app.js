(function() {

    'use-strict';

    /**
     * @ngdoc overview
     * @name app-event0:Module
     *
     * @description
     * app main module
     *
     */

    angular.module('app', [
		'ionic',
        'ionicLazyLoad',
        'pascalprecht.translate'])

        .config(appConfig)
        .controller('appController', appController);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider', '$ionicConfigProvider'];

    /**
     *
     * @param $stateProvider
     * @param $urlRouterProvider
     * @param $translateProvider
     */
    function appConfig($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider) {


		$ionicConfigProvider.scrolling.jsScrolling(false);

        $translateProvider.preferredLanguage('de');

        $stateProvider
            .state('app', {
                url:'/app',
                abstract : true,
                templateUrl:'modules/menu/index.html',
                controller:'menuController'
            })

            .state('app.start', {
                url:'/start',
                views:{
                    'menuContent': {
                        templateUrl:'modules/start/index.html',
                        controller:'startController'
                    }
                }
            })

            .state('app.megalist', {
                url:'/megalist',
                views:{
                    'menuContent': {
                        templateUrl:'modules/megalist/index.html',
                        controller:'megalistController'
                    }
                }
            })

            .state('app.register', {
                url:'/register',
                views:{
                    'menuContent': {
                        templateUrl:'modules/register/index.html',
                        controller:'registerController'
                    }
                }
            })

            .state('app.settings', {
                url:'/settings',
                views:{
                    'menuContent': {
                        templateUrl:'modules/settings/index.html',
                        controller:'settingsController'
                    }
                }
            })






        $urlRouterProvider.otherwise('/app/start');
    }


    appController.$inject = ['$scope'];

    /**
     *
     */
    function appController($scope) {

    }

})();