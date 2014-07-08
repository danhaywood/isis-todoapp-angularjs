(function() {
    'use strict';
    angular.module('login',[
            'http-auth-interceptor'
            ,'basic-auth'
        ])

        .controller('LoginController', function ($scope, $http, Credentials, authService) {
            $scope.submit = function(credentials) {
                Credentials.setCredentials(credentials)
                authService.loginConfirmed(null, function(config) {
                    config.headers.Authorization = Credentials.getHttpHeader();
                    return config;
                });
            }
        });
})();
