'use strict';
var app = app || angular.module('Orkut');

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
});
