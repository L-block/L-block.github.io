(function () {
    'use strict';

    angular.module('app').directive('portfolioPage', portfolioPage);

    function portfolioPage() {
        return {
            templateUrl: 'src/directives/pages/portfolio/portfolio.html'
        };
    }
})();