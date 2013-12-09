(function() {
  'use strict';
  angular.module('content', [])
  
  .controller('ContentController', function ($scope, $http, Credentials) {

    $scope.publicContent = [];
    $scope.restrictedContent = [];

    $scope.publicAction = function() {
      $http.get('http://localhost:8080/restful/').success(function(response) {
        $scope.publicContent.push(response);
      }).error(function(response) {
              alert(response);
      });
//      $http.get('../../restful/').success(function(response) {
//        $scope.publicContent.push(response);
//      });
//      $http.post('data/public', $scope.publicData).success(function(response) {
//        $scope.publicContent.push(response);
//      });
    }

    $scope.restrictedAction = function() {
      $http.post('data/protected', $scope.restrictedData).success(function(response) {
        // this piece of code will not be executed until user is authenticated
        $scope.restrictedContent.push(response);
      });
    }

    $scope.logout = function() {
        Credentials.clearCredentials();
//      $http.post('auth/logout').success(function() {
//        $scope.restrictedContent = [];
//      });
    }
  });
})();