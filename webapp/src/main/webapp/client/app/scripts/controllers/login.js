(function() {
    'use strict';
    angular.module('login',[
            'http-auth-interceptor'
            //,'Auth'
        ])

        .controller('LoginController', function ($scope,$http, authService) {
            $scope.credentials = {username:"sven",password:"pass"}
            $scope.submit = function(credentials) {
                //Auth.setCredentials()
                //authService.loginConfirmed();
                $http.post('auth/login').success(function() {
                    authService.loginConfirmed();
                });
            }
        });
})();
