(function () {
    'use strict';

    angular.module('app').component('nav', nav);

    function nav() {
        return {
            controller: 'NavCtrl',
            controllerAs: 'ctrl',
            bindings: {
                navChanged: '&',
                navItems: '<'
            },
            templateUrl: 'src/components/nav/nav.html'
        };
    }
})();