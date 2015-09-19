'use strict';

var app = app || angular.module('Orkut');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url : '/',
      templateUrl : 'assets/js/view/home.html'
    })
    .state('search', {
      url : '/search/:query',
      templateUrl : 'assets/js/view/search.html',
      controller : 'SearchCtrl'
    }).
    state('chat', {
      url : '/chat',
      templateUrl : 'assets/js/view/chat.html',
      controller : 'ChatCtrl'
    });

});
