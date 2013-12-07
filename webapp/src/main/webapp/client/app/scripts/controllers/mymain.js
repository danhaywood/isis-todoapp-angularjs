'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Auth) {

        $scope.username = Auth.getUsername();

//        $scope.awesomeThings = [
//          'HTML5 Boilerplate',
//          'AngularJS',
//          'Karma'
//        ];
      });
