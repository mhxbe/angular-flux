(function (describe, it, expect, ng) {
    'use strict';

    describe('ngFlux.HomeController', function () {

        var $injector,
            $controller,
            $scope,
            $rootScope,
            $state,
            $timeout;

        beforeEach(module('ngFlux'));

        beforeEach(
            inject(function (_$injector_) {
                $injector = _$injector_;
            })
        );

        beforeEach(function suitArrange() {
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $state = $injector.get('$state');
            $timeout = $injector.get('$timeout');
        });

        var src;

        function $getController() {
            $scope = $rootScope.$new();

            src = $controller('ngFlux.HomeController', {
                '$scope': $scope,
                'ngFlux.HomeActioncreator': $injector.get('ngFlux.HomeActioncreator'),
                'ngFlux.HomeStore': $injector.get('ngFlux.HomeStore')
            });
            return src;
        }

        it('should be registered', function () {
            expect(function () {
                $getController();
            }).to.not.throw(Error);
        });

        describe('$scope.$listenTo', function () {

            it('should listen to the HomeStore \'setUsername\' event on initialize()', function () {
                var store = $injector.get('ngFlux.HomeStore');

                sinon.spy($rootScope, '$listenTo');

                $getController();
                expect($rootScope.$listenTo.calledWith(store, ['username'])).to.eql(true);

                $rootScope.$listenTo.restore();
            });

            it('should listen to the HomeStore \'setUser\' event on initialize()', function () {
                var store = $injector.get('ngFlux.HomeStore');

                sinon.spy($rootScope, '$listenTo');

                $getController();
                expect($rootScope.$listenTo.calledWith(store, ['user'])).to.eql(true);

                $rootScope.$listenTo.restore();
            });

        });

        describe('Trigger actions', function () {

            it('should run setUsername() action', function () {
                var actioncreator = $injector.get('ngFlux.HomeActioncreator');
                sinon.spy(actioncreator, 'setUsername');

                $getController().setUsername('Mikey');

                expect(actioncreator.setUsername.calledWith('Mikey')).to.equal(true);
            });

            it('should run setUser() action', function () {
                var userObj = {
                    firstName: 'Mike',
                    lastName: 'Henderyckx',
                    age: 0
                };
                var actioncreator = $injector.get('ngFlux.HomeActioncreator');
                sinon.spy(actioncreator, 'setUser');

                $getController().setUser(userObj);

                expect(actioncreator.setUser.calledWith(userObj)).to.equal(true);
            });

            it('should run getUsername() action', function () {
                var actioncreator = $injector.get('ngFlux.HomeActioncreator');
                sinon.spy(actioncreator, 'getUsername');

                $getController().getUsername();

                expect(actioncreator.getUsername.called).to.equal(true);
            });

        });

    });

})(describe, it, chai.expect, window.angular);
