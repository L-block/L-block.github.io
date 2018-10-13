(function () {
    'use strict';

    angular.module('app').directive('nav', nav);

    function nav() {
        return {
            controller: 'NavCtrl',
            controllerAs: 'ctrl',
            bindToController: {
                navChanged: '&',
                navItems: '<'
            },
            templateUrl: 'src/components/nav/nav.html'
        };
    }
})();