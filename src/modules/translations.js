/**
 * Created by danieldihardja on 23/04/15.
 */


(function() {
    'use-strict';

    angular.module('app')
        .config(translationsConfig);

    translationsConfig.$inject = ['$translateProvider'];

    function translationsConfig($translateProvider) {
        $translateProvider.translations('de', {
            'TXT_EVENTS'                : 'EVENTS'
        });
    }
})();