(function () {
    'use strict';

    angular.module('app').directive('landingPage', landingPage);

    function landingPage() {
        return {
            templateUrl: 'src/directives/pages/landing/landing.html'
        };
    }
})();