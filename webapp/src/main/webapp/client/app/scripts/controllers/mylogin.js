'use strict';

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $location, Credentials, $q) {
        $scope.credentials = {username: "sven", password: "pass"}

/*
        var defer = $q.defer();
        defer.promise
            .then(function() {
                alert("I promised I would show up");
            })
            .then(function() {
                alert("and me");
            })
            .then(function() {
                alert("and me too");
            })
        defer.resolve();
*/

        $scope.login = function(){
            Credentials.setCredentials($scope.credentials)
            $location.path("main")
        }
  });
