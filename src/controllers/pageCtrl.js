(function () {
    'use strict';

    angular.module('app').controller('PageCtrl', PageCtrl);

    function PageCtrl() {
        var vm = this;
        vm.navChanged = navChanged;
        vm.pages = {
            landing: { name: 'landing', active: true, navable: false },
            about: { name: 'about', active: false, navable: true },
            portfolio: { name: 'portfolio', active: false, navable: true },
            links: { name: 'links', active: false, navable: true },
        };
        vm.navitems = [ vm.pages.landing, vm.pages.about, vm.pages.portfolio, vm.pages.links ];

        function navChanged(navitem) {
            vm.navitems.forEach(function (nav) {
                nav.active = navitem.name === nav.name;
            });
        }
    }
})();