(function() {
    'use strict';

    angular.module('clientApp', [
            ,'ngCookies'
            ,'ngSanitize'
            ,'ngRoute'

            ,'http-auth-interceptor'
            ,'login'
            ,'content'
            ,'BasicAuth'

            ,'content-mocks'
        ])
        .config(function ($routeProvider,$httpProvider) {

            $httpProvider.defaults.cache = false;
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $routeProvider
                .when('/login', {
                    templateUrl: 'views/login.html'
                    ,controller: 'LoginCtrl'
                })
                .when('/logout', {
                    templateUrl: 'views/login.html'
                    ,controller: 'LoginCtrl'
                    ,resolve: {
                        app: function(Auth) {
                            Auth.clearCredentials();
                        }
                    }
                })
                .when('/', {
                    templateUrl: 'views/main.html'
                    ,controller: 'MainCtrl'
//                ,resolve: {
//                    app: function($q) {
//                         var defer = $q.defer();
//                         defer.promise
//                         .then(function() {
//                         alert("I promised I would show up");
//                         })
//                         .then(function() {
//                         alert("and me");
//                         })
//                         .then(function() {
//                         alert("and me too");
//                         })
//                         //defer.resolve();
//                    }
//                }

                })
                .otherwise({
                    redirectTo: '/login'
                })
            ;

            /*
             function exampleInterceptor($q,$log) {
             function success(response) {
             $log.info("Successful response: " + response);
             return response;
             }
             function error(response) {
             var status = response.status;
             $log.error("Response status: " + status + ". " + response);
             return $q.reject(response); //similar to throw response;
             }
             return function(promise) {
             return promise.then(success, error);
             }
             }
             $httpProvider.responseInterceptors.push(exampleInterceptor);
             */


        })
        .run( function($rootScope, $location, Credentials) {

            Credentials.clearCredentials();

        })
        .directive('authDemoApplication', function() {
            return {
                restrict: 'C',
                link: function(scope, elem, attrs) {
                    //once Angular is started, remove class:
                    elem.removeClass('waiting-for-angular');

                    var login = elem.find('#login-holder');
                    var main = elem.find('#content');

                    login.hide();

                    scope.$on('event:auth-loginRequired', function() {
                        login.slideDown('slow', function() {
                            main.hide();
                        });
                    });
                    scope.$on('event:auth-loginConfirmed', function() {
                        main.show();
                        login.slideUp();
                    });
                }
            }
        })
    ;

})();



