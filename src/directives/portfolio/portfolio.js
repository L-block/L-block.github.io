(function () {
    'use strict';

    angular.module('app').directive('portfolioPage', portfolioPage);

    function portfolioPage() {
        return {
            controller: 'PortfolioCtrl',
            controllerAs: 'ctrl',
            templateUrl: 'src/directives/portfolio/portfolio.html'
        };
    }
})();