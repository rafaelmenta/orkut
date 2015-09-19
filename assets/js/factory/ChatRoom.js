'use strict'

var app = app || angular.module('Orkut');

app.factory('ChatRoom', function($firebaseArray) {
  var ref = new Firebase('https://radiant-fire-3068.firebaseio.com/');
  return $firebaseArray(ref);
});



