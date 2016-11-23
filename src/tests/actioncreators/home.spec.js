(function (describe, it, expect, ng) {
    'use strict';

    describe('ngFlux.HomeActioncreator', function () {

        var $injector,
            $q,
            $timeout;

        beforeEach(module('ngFlux'));

        beforeEach(
            inject(function (_$injector_, _$q_, _$timeout_) {
                $injector = _$injector_;
                $q = _$q_;
                $timeout = _$timeout_;
            })
        );

        it('should be registered', function () {
            expect(function () {
                $injector.get('ngFlux.HomeActioncreator');
            }).to.not.throw(Error);
        });


        describe('Actions', function () {

            it('should have a setUsername() action',
                inject(['ngFlux.HomeActioncreator', function (HomeActioncreator) {
                    expect(HomeActioncreator.setUsername).to.exist;
                }]
            ));

            it('setUsername() should dispatch with \'User.setUsername\' & \'Mikey Spikey\'',
                inject(['ngFlux.HomeActioncreator', 'flux', function (HomeActioncreator, flux) {
                    var username = 'Mikey Spikey';
                    sinon.spy(flux, 'dispatch');
                    HomeActioncreator.setUsername(username);
                    expect(flux.dispatch.calledWith('User.setUsername', username)).to.equal(true);
                }]
            ));

            it('should have a setUser() action',
                inject(['ngFlux.HomeActioncreator', function (HomeActioncreator) {
                    expect(HomeActioncreator.setUser).to.exist;
                }]
            ));

            it('setUser() should dispatch with \'User.setUser\' & \'User Object {}\'',
                inject(['ngFlux.HomeActioncreator', 'flux', function (HomeActioncreator, flux) {
                    var userObj = {
                        firstName: 'Mike',
                        lastName: 'Henderyckx',
                        age: 0
                    };
                    sinon.spy(flux, 'dispatch');
                    HomeActioncreator.setUser(userObj);
                    expect(flux.dispatch.calledWith('User.setUser', { user: userObj })).to.equal(true);
                }]
            ));

            it('should have a getUser() action',
                inject(['ngFlux.HomeActioncreator', function (HomeActioncreator) {
                    expect(HomeActioncreator.getUser).to.exist;
                }]
            ));

            it('getUser() should get a User Object from \'ngFlux.HomeStore\'',
                inject(['ngFlux.HomeStore', 'ngFlux.HomeActioncreator', function (HomeStore, HomeActioncreator) {

                    sinon.spy(HomeStore, 'getUser');
                    HomeActioncreator.getUser();

                    expect(HomeStore.getUser.called).to.equal(true);
                    expect(HomeActioncreator.getUser()).to.be.an('object');
                    expect(HomeActioncreator.getUser()).to.have.property('firstName');
                    expect(HomeActioncreator.getUser()).to.have.property('lastName');
                    expect(HomeActioncreator.getUser()).to.have.property('age');
                }]
            ));

            it('should have a getUsername() action',
                inject(['ngFlux.HomeActioncreator', function (HomeActioncreator) {
                    expect(HomeActioncreator.getUsername).to.exist;
                }]
            ));

            it('getUsername() should get a username from \'ngFlux.HomeStore\'',
                inject(['ngFlux.HomeStore', 'ngFlux.HomeActioncreator', function (HomeStore, HomeActioncreator) {

                    sinon.spy(HomeStore, 'getUsername');
                    HomeActioncreator.getUsername();

                    expect(HomeStore.getUsername.called).to.equal(true);
                    expect(HomeActioncreator.getUsername()).to.be.a('string');
                    expect(HomeActioncreator.getUsername()).to.equal('');
                }]
            ));

        });

    });

})(describe, it, chai.expect, window.angular);
