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
        'ngCordova',
        'ngStorage',
        'ionic',
        'pascalprecht.translate'])

        .config(appConfig)
        .controller('appController', appController);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];



    /**
     *
     * @param $stateProvider
     * @param $urlRouterProvider
     * @param $translateProvider
     */
    function appConfig($stateProvider, $urlRouterProvider, $translateProvider) {

        $translateProvider.preferredLanguage('de');

        $stateProvider
            .state('app', {
                url:'/app',
                abstract : true,
                templateUrl:'modules/menu/menu.html',
                controller:'menuController'
            })

            .state('app.start', {
                url:'/start',
                views:{
                    'menuContent': {
                        templateUrl:'modules/start/start.html',
                        controller:'startController'
                    }
                }
            })

            .state('app.boothplan', {
                url:'/intro',
                views:{
                    'menuContent': {
                        templateUrl:'modules/boothplan/index.html',
                        controller:'boothplanController'
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
                        templateUrl:'modules/settings/settings.html',
                        controller:'introController'
                    }
                }
            });


        $urlRouterProvider.otherwise('/app/start');
    }


    appController.$inject = ['$scope'];

    /**
     *
     */
    function appController($scope) {

    }

})();