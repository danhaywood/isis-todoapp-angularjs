(function() {

    'use strict';

    angular.module('clientApp')
        .controller('HomePageCtrl', function ($scope, $http) {

            $scope.publicContent = [];

            $http.get('http://localhost:8080/restful/').success(function(responseData, responseStatus, responseHeaders, httpConfig) {
                $scope.publicContent.push(responseData);
            });


        });

})();
