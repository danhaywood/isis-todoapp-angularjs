(function() {
    'use strict';
    angular.module('login',[
            'http-auth-interceptor'
            ,'BasicAuth'
        ])

        .controller('LoginController', function ($scope, $http, Credentials, authService) {
            $scope.credentials = {username:"sven",password:"pass"}
            $scope.submit = function(credentials) {
                Credentials.setCredentials(credentials)
                authService.loginConfirmed();
//                $http.post('auth/login').success(function() {
//                    authService.loginConfirmed();
//                });
            }
        });
})();
