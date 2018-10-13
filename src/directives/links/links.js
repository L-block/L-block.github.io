(function () {
    'use strict';

    angular.module('app').directive('linksPage', linksPage);

    function linksPage() {
        return {
            templateUrl: 'src/directives/links/links.html'
        };
    }
})();