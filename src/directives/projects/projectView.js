(function () {
    'use strict';

    angular.module('app').directive('projectView', projectView);

    function projectView() {
        return {
            controller: 'ProjectViewCtrl',
            controllerAs: 'proj',
            templateUrl: 'src/directives/projects/projectView.html'
        };
    }
})();