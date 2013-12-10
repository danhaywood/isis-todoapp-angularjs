(function() {

    'use strict';
    angular.module('content', [])

        .controller('ContentController', function ($scope, $http, Credentials) {

            $scope.publicContent = [];
            $scope.restrictedContent = [];



            $scope.publicAction = function() {
                $http.get('http://localhost:8080/restful/').success(function(response) {
                    $scope.publicContent.push(response);
                    $scope.username = Credentials.getUsername();
                });
            }

            $scope.logout = function() {
                Credentials.clearCredentials();
            }
        });
})();