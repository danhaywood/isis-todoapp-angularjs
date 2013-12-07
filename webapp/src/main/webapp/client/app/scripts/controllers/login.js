'use strict';

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $location, Auth, $q) {
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
            Auth.setCredentials($scope.credentials)
            $location.path("main")
        }
  });
