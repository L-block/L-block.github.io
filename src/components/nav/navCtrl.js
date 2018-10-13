(function () {
    'use strict';

    angular.module('app').controller('NavCtrl', NavCtrl);

    function NavCtrl() {
        var vm = this;
        vm.navSelected = navSelected;
        
        function navSelected(navitem) {
            vm.navChanged({navitem: navitem});
        }
    }
})();