'use strict'

var app = app || angular.module('Orkut');

app.factory('HttpResponseInterceptor', function($q, $rootScope) {
  return {
    response: function(response) {
      return response || $q.when(response)
    },
    responseError: function(rejection) {
      if (rejection.status === 0 || rejection.status === 401) {
        $rootScope.$broadcast('unauthorized');
      }
      $q.reject(rejection);
    }
  }
});
