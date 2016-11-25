(function (ng) {
    'use strict';

    ng
        .module('ngFlux')
        .controller('ngFlux.HomeController', [

            '$scope',
            'ngFlux.HomeActioncreator',
            'ngFlux.HomeStore',

            function (
                $scope,
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
                    $scope.$listenTo(HomeStore, ['username'], updateUsername);
                    $scope.$listenTo(HomeStore, ['user'], updateUser);
                }


                // --- Listen to Store Events ---

                function updateUsername(payload) {
                    if (payload.data) {
                        vm.username = payload.data.currentData;
                    }
                }

                function updateUser(payload) {
                    if (payload.data) {
                        vm.user = payload.data.currentData;
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
                    vm.username = HomeActioncreator.getUsername();
                }


                // --- Define Controller Methods ---

                vm.setUsername = setUsername;
                vm.setUser = setUser;
                vm.getUsername = getUsername;

                // For testing purposes
                vm.updateUsername = updateUsername;
                vm.updateUser = updateUser;


                // --- Initialize ---

                initialize();
            }
        ]);


})(window.angular);
