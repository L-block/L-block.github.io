(function () {
    'use strict';

    angular.module('app').directive('linksPage', linksPage);

    function linksPage() {
        return {
            templateUrl: 'src/pages/links/links.html'
        };
    }
})();