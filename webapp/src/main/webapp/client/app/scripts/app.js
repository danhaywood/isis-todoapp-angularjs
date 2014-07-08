(function() {
    'use strict';

    angular.module('clientApp', [
            ,'ngCookies'
            ,'ngSanitize'
            ,'ngRoute'

            ,'http-auth-interceptor'
            ,'login'
            ,'main'
            ,'basic-auth',

            ,'ui.bootstrap'
        ])
        .config(function ($routeProvider,$httpProvider) {

            $httpProvider.defaults.cache = false;
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $routeProvider
                .when('/', {
                    templateUrl: 'views/home-page.html'
                    ,controller: 'HomePageCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

////            $routeProvider
//                .when('/', {
//                    templateUrl: 'views/home-page.html'
//                    ,controller: 'HomePageCtrl'
////                ,resolve: {
////                    app: function($q) {
////                         var defer = $q.defer();
////                         defer.promise
////                         .then(function() {
////                         alert("I promised I would show up");
////                         })
////                         .then(function() {
////                         alert("and me");
////                         })
////                         .then(function() {
////                         alert("and me too");
////                         })
////                         //defer.resolve();
////                    }
//                })
////                .otherwise({
////                    redirectTo: '/login'
////                })
//            ;

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



