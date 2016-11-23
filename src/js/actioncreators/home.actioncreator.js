(function (ng) {
    'use strict';

    ng
        .module('ngFlux')
        .factory('ngFlux.HomeActioncreator', [
            'flux',
            'ngFlux.HomeStore',
            function (
                flux,
                HomeStore
            ) {

                function setUser(user) {
                    flux.dispatch('User.setUser', { user: user });
                }

                function setUsername(username) {
                    console.log('Dispatching username:', username);
                    flux.dispatch('User.setUsername', username);
                }

                function getUser() {
                    return HomeStore.getUser();
                }

                function getUsername() {
                    return HomeStore.getUsername();
                }

                return {
                    setUser: setUser,
                    setUsername: setUsername,
                    getUser: getUser,
                    getUsername: getUsername
                };
            }
        ]);

})(window.angular);
