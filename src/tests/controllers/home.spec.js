(function (describe, it, expect, ng) {
    'use strict';

    describe('ngFlux.HomeController', function () {

        var $controller,
            $injector,
            $scope;

        var HomeStore,
            HomeActioncreator;

        var src;

        function $getController() {
            $scope = $rootScope.$new();
            src = $controller('apps.eidlogin.LoginController', {
                '$scope': $scope,
                'ngFlux.HomeActioncreator': $injector.get('ngFlux.HomeActioncreator'),
                'ngFlux.HomeStore': $injector.get('ngFlux.HomeStore')
            });
            return src;
        }

        beforeEach(module('ngFlux'));

        beforeEach(
            inject(function (_$injector_) {
                $injector = _$injector_;
            })
        );

        beforeEach(
            module(function ($provide) {
                $provide.store('ngFlux.HomeStore', function () {
                    return HomeStore;
                });
                $provide.factory('nngFlux.HomeActioncreator', function () {
                    return HomeActioncreator;
                });
            })
        );


        it('should be registered', function () {
            expect(function () {
                // $injector.get('ngFlux.HomeController');
                $getController();
            }).to.not.throw(Error);
        });


    });

})(describe, it, chai.expect, window.angular);
