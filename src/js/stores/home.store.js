(function (ng) {
    'use strict';

    ng
        .module('ngFlux')
        .store('ngFlux.HomeStore', [

            function () {
                return {
                    initialize: function () {
                        this.state = this.immutable({
                            user: {
                                firstName: 'Mike',
                                lastName: '',
                                age: 0
                            },
                            username: ''
                        });
                    },
                    handlers: {
                        'User.setUsername': 'setUsername',
                        'User.setUser': 'setUser'
                    },
                    setUser: function (payload) {
                        this.state.set('user', payload.user);
                    },
                    setUsername: function (payload) {
                        this.state.set(['username'], payload);
                    },
                    exports: {
                        getUser: function () {
                            return this.state.get('user');
                        },
                        getUsername: function () {
                            return this.state.get('username');
                        }
                    }
                };
            }
        ]);

})(window.angular);


