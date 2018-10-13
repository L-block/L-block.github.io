(function () {
    'use strict';

    angular.module('app').controller('NavCtrl', NavCtrl);

    function NavCtrl() {
        var vm = this;
        vm.navSelected = navSelected;

        activate();
        function activate() {
            console.log(vm);
        }
        
        function navSelected(navitem) {
            vm.navChanged({navitem: navitem});
        }
    }
})();