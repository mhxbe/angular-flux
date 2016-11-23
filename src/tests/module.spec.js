(function (describe, it, expect, ng) {

    'use strict';

    describe('ngFlux module', function () {

        it('should be registered', function () {
            expect(function () {
                ng.module('ngFlux');
            }).to.not.throw(Error);
        });

    });

})(describe, it, chai.expect, window.angular);
