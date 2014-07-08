(function() {
    'use strict';
    angular.module('main', [])
        .controller('MainCtrl', function ($scope, Credentials) {


            // TODO: should subscribe to the event emitted by http-auth-interceptor
            // so can setup scope
            //$rootScope.$broadcast('event:auth-loginConfirmed', data);

            // for testing only
            // Credentials.setCredentials({username: "sven", password: "pass"});

            $scope.username = Credentials.getUsername();

            $scope.logout = function() {
                // TODO: more required here...
                Credentials.clearCredentials();
            }
        });

})();