(function () {
    'use strict';

    angular.module('app').controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['$timeout'];
    function AppCtrl($timeout) {
        var vm = this;
        vm.show = show;
        vm.nav = {
            about: { name: 'about', selected: false, hidden: false },
            links: { name: 'links', selected: false, hidden: false },
            landing: { name: 'landing', selected: false, hidden: true }
        };
        vm.navItems = [ vm.nav.about, vm.nav.links, vm.nav.landing ];
        vm.links = [
            { name: 'github', href: 'https://github.com/L-block', click: function(){} },
            { name: 'linkedin', href: 'https://www.linkedin.com/in/stephanie-cheng-541130152/', click: function(){} },
            { name: 'resume', href: '', click: downloadFile }
        ];

        activate();
        function activate() {
            show(vm.nav.landing);
        }
        
        function show(nav) {
            vm.navItems.forEach(function (item) {
                item.selected = false;
            });
            $timeout(function () {
                nav.selected = true;
            }, 500);
        }

        function downloadFile() {
            window.open('src/files/Resume.pdf', '_blank');
        }
    }
})();