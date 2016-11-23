(function (ng) {
    'use strict';

    ng
        .module('ngFlux')
        .controller('ngFlux.HomeController', [

            '$scope',
            '$state',
            '$timeout',
            'ngFlux.HomeActioncreator',
            'ngFlux.HomeStore',

            function (
                $scope,
                $state,
                $timeout,
                HomeActioncreator,
                HomeStore
            ) {

                // --- Controller Variables

                var vm = this;
                vm.user = {
                    firstName: '',
                    lastName: ''
                };
                vm.username = '';


                // --- Initialize ---

                function initialize() {
                    debugger;
                    $scope.$listenTo(HomeStore, ['username'], updateUsername);
                    $scope.$listenTo(HomeStore, ['user'], updateUser);
                }


                // --- Listen to Store Events ---

                function updateUsername(payload) {
                    if (payload.data) {
                        $timeout(function () {
                            vm.username = payload.data.currentData;
                        });
                    }
                }

                function updateUser(payload) {
                    if (payload.data) {
                        $timeout(function () {
                            vm.user = payload.data.currentData;
                        });
                    }
                }


                // --- Controller Methods ---

                function setUsername(username) {
                    HomeActioncreator.setUsername(username);
                }

                function setUser(user) {
                    HomeActioncreator.setUser(user);
                }

                function getUsername() {
                    HomeActioncreator.getUsername()
                        .then(function onGotUsername(username) {
                            vm.username = username;
                        });
                }


                // --- Define Controller Methods ---

                vm.setUsername = setUsername;
                vm.setUser = setUser;
                vm.getUsername = getUsername;


                // --- Initialize ---

                initialize();
            }
        ]);


})(window.angular);
