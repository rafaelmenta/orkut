'use strict';

var app = app || angular.module('Orkut');

app.controller('SearchCtrl', function($scope, $stateParams, User, Friendship, $cookies, $filter) {
  $scope.term = $stateParams.query;

  User.query({q : $scope.term}, function(data) {
    $scope.people = data;
  })

  var me = angular.fromJson($cookies.get('me'));
  var friends, sent, received;

  Friendship.me({}, function(data) {
    friends = data;
  });

  Friendship.requests({}, function(data) {
    received = data;
  });

  Friendship.requested({}, function(data) {
    sent = data;
  })

  $scope.isMe = function(person) {
    return me.email === person.email;
  };

  $scope.isFriend = function(person) {
    var friendsFiltered = $filter('filter')(friends, {email : person.email});
    var sentFiltered = $filter('filter')(sent, { userRequested: {email : person.email}});
    var receivedFiltered = $filter('filter')(received, { userRequester: {email : person.email}});

    return (friendsFiltered && friendsFiltered.length > 0) ||
           (sentFiltered && sentFiltered.length > 0) ||
           (receivedFiltered && receivedFiltered.length > 0);
  };

});
