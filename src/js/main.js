(function (ng) {
    'use strict';

    ng
        .module('ngFlux')

        .config(function (
            $stateProvider,
            $urlRouterProvider,
            fluxProvider
        ) {

            fluxProvider.setImmutableDefaults({ immutable: false });
            fluxProvider.useEvalAsync(false);
            fluxProvider.autoInjectStores(true);

            $stateProvider

                .state('ngFlux', {
                    url: '/',
                    templateUrl: '/views/home.htm',
                    controller: 'ngFlux.HomeController',
                    controllerAs: 'home'
                });

            $urlRouterProvider.otherwise('/');

        })

        .run(function() {
            console.log('let us run');
            console.info('yoyo');
            console.log('Snap je dat?');
        });

})(window.angular);
