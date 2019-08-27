(function () {
    'use strict';

    angular.module('app').controller('PageCtrl', PageCtrl);

    function PageCtrl() {
        var vm = this;
        vm.navChanged = navChanged;
        vm.reset = reset;
        vm.pages = {
            landing: { name: 'landing', active: true, navable: false },
            about: { name: 'about', active: false, navable: true },
            portfolio: { name: 'portfolio', active: false, navable: true },
            links: { name: 'links', active: false, navable: true },
        };
        vm.navitems = [ vm.pages.landing, vm.pages.about, vm.pages.portfolio, vm.pages.links ];
        vm.viewPage = true;

        function navChanged(navitem) {
            vm.navitems.forEach(function (nav) {
                nav.active = navitem.name === nav.name;
            });
        }
        
        function reset() {
            vm.navitems.forEach(function (nav) {
                nav.active = false
            });
            vm.pages.landing.active = true;
            vm.navitems = [ vm.pages.landing, vm.pages.about, vm.pages.portfolio, vm.pages.links ];
        }
    }
})();