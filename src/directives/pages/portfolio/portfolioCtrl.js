(function () {
    'use strict';

    angular.module('app').controller('PortfolioCtrl', PortfolioCtrl);

    function PortfolioCtrl() {
        var vm = this;
        vm.projectItems = {
            jobScheduler: {
                title: 'Job Scheduler',
                imgsrc: 'files/projects/js.jpg',
                href: '',
                client: 'Siepe LLC',
                description: 'Doashboard of scripts currently in the database. Manage SQL scripts and reccuring exectution times and behaviors from an easy to use web portal.'
            },
            reconciliation: {
                title: 'Reconciliation Tool',
                imgsrc: 'files/projects/rc.jpg',
                href: '',
                client: 'Highland Captial Management',
                description: 'A quick and simple dashboard for fund accountants and portfolio managers. Enables traders to adjust positions and contact brokers from one location.'
            },
            designPortfolio: {
                title: 'Designer Portfolio Site',
                imgsrc: 'files/projects/pt.jpg',
                href: '/bcheng-portfolio',
                client: 'Beverly Cheng',
                description: 'Portfolio site for artist and software/graphic designer Beverly Cheng.'
            }
        };
        vm.projects = [ vm.projectItems.jobScheduler, vm.projectItems.reconciliation, vm.projectItems.designPortfolio ];
    }
})();