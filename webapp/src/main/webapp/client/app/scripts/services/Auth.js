'use strict';

angular.module('clientApp')
  .factory('Auth', ['Base64', '$cookieStore', '$http', function (Base64, $cookieStore, $http) {
        // initialize to whatever is in the cookie, if anything
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('authdata');

        var _username;
        return {
            setCredentials: function (credentials) {
                var encoded = Base64.encode(credentials.username + ':' + credentials.password);
                $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
                $cookieStore.put('authdata', encoded);
                _username = credentials.username;
            },
            clearCredentials: function () {
                document.execCommand("ClearAuthenticationCache");
                $cookieStore.remove('authdata');
                $http.defaults.headers.common.Authorization = 'Basic ';
            },
            getUsername: function() {
                return _username;
            }
        };
    }]);
