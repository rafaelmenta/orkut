'use strict';

var app = app || angular.module('Orkut');

app.config(function($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.tokenGetter = function($cookies) {
    return $cookies.get('socialAPI');
  };

  // $httpProvider.interceptors.push('jwtInterceptor');
  // $httpProvider.interceptors.push('HttpResponseInterceptor');
});
