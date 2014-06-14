(function() {

    'use strict';

    angular.module('clientApp')
        .controller('BootstrapCtrl', function ($scope, $http) {

            $scope.messages = [];

            $http.get('http://localhost:8080/restful/').success(function(responseData, responseStatus, responseHeaders, httpConfig) {

                // eg application/json;profile="urn:org.restfulobjects:repr-types/homepage"
                var contentType = responseHeaders("content-type");
                var contentTypeParsed = contentType.match(/.*;profile="(.*)";?(.*)?/);
                var contentTypeProfile = contentTypeParsed[1];

                $scope.messages.push(contentTypeProfile);

                if(contentTypeProfile === "urn:org.restfulobjects:repr-types/homepage") {
                    $location.path("/home-page")
//                    $scope.messages.push(contentTypeProfile);
//                    //$scope.messages.push("match");
//                //} else {
//                    //$scope.messages.push("no match");
                }

                $scope.messages.push(responseData);

            });


        });

})();
