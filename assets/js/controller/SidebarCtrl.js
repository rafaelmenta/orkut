'use strict';

var app = app || angular.module('Orkut');

app.controller('SidebarCtrl', function($scope, Friendship) {

  Friendship.me({}, function(data) {
    $scope.friends = data;
  })

  var received = function() {
    Friendship.requests({}, function(data) {
      $scope.received = data;
    });
  };

  var requested = function() {
    Friendship.requested({}, function(data) {
      $scope.sent = data;
    });
  };

  $scope.$on('friendship:requested', function() {
    requested();
  })

  requested();
  received();

});
