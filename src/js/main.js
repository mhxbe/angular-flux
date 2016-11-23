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

        });

})(window.angular);
