(function () {
    'use strict';

    angular.module('app').directive('portfolioPage', portfolioPage);

    function portfolioPage() {
        return {
            controller: 'PortfolioCtrl',
            controllerAs: 'proj',
            templateUrl: 'src/directives/pages/portfolio/portfolio.html'
        };
    }
})();