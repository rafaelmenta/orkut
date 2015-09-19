'use strict';

var app = app || angular.module('Orkut');

app.controller('ChatCtrl', function($scope, $cookies, ChatRoom) {

  var me = angular.fromJson($cookies.get('me'));

  $scope.messages = ChatRoom;

  $scope.addMessage = function() {
    $scope.messages.$add({
      from: me.name,
      content: $scope.message
    });

    $scope.message = '';
  };

});
