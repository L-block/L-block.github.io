(function () {
    'use strict';

    angular.module('app').directive('aboutPage', aboutPage);

    function aboutPage() {
        return {
            templateUrl: 'src/pages/about/about.html'
        };
    }
})();