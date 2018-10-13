(function () {
    'use strict';

    angular.module('app').directive('landingPage', landingPage);

    function landingPage() {
        return {
            restrict: 'E',
            templateUrl: 'src/pages/landing/landing.html'
        };
    }
})();