'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Credentials) {

        $scope.username = Credentials.getUsername();

//        $scope.awesomeThings = [
//          'HTML5 Boilerplate',
//          'AngularJS',
//          'Karma'
//        ];
      });
