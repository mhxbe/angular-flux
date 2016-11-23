(function (describe, it, expect, ng) {
    'use strict';

    describe('ngFlux.HomeStore', function () {

        var $injector;

        beforeEach(module('ngFlux'));

        beforeEach(
            inject(function (_$injector_) {
                $injector = _$injector_;
            })
        );

        it('should be registered', function () {
            expect(function () {
                $injector.get('ngFlux.HomeStore');
            }).to.not.throw(Error);
        });


        describe('API', function () {

            it('should have a getUsername() function',
                inject(['ngFlux.HomeStore', 'flux', function (HomeStore) {
                    expect(HomeStore.getUsername()).to.exist;
                }]
            ));

            it('getUsername() should equals \'Mikey Spikey\'',
                inject(['ngFlux.HomeStore', 'flux', function (HomeStore, flux) {
                    flux.dispatch('User.setUsername', 'Mikey Spikey');
                    expect(HomeStore.getUsername()).to.equal('Mikey Spikey');
                }]
            ));

            it('should have a getUser() function',
                inject(['ngFlux.HomeStore', 'flux', function (HomeStore) {
                    expect(HomeStore.getUser()).to.exist;
                }]
            ));

            it('getUser() should equals \'User Object {}\'',
                inject(['ngFlux.HomeStore', 'flux', function (HomeStore, flux) {
                    var userObj = {
                        firstName: 'Mike',
                        lastName: 'Henderyckx',
                        age: 0
                    };
                    flux.dispatch('User.setUser', { user: userObj });
                    expect(HomeStore.getUser().firstName).to.equal(userObj.firstName);
                    expect(HomeStore.getUser().lastName).to.equal(userObj.lastName);
                    expect(HomeStore.getUser().age).to.equal(userObj.age);
                }]
            ));

        });

    });

})(describe, it, chai.expect, window.angular);
