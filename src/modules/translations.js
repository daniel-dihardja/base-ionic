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
            'TXT_REGISTER'          : 'Registrieren',
            'TXT_REG_FIRST_NAME'    : 'Vorname',
            'TXT_REG_LAST_NAME'     : 'Nachname',
            'TXT_REG_EMAIL'         : 'E-Mail',
            'TXT_REG_SUBMIT'        : 'Registrieren',

            'TXT_MENU_BOOTHPLAN'    : 'Karte',
            'TXT_MENU_REGISTER'     : 'Registrieren',
            'TXT_MENU_SETTINGS'     : 'Einstellungen'
        });

        $translateProvider.use('de');
    }
})();