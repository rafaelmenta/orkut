'use strict';

var app = app || angular.module('Orkut');

app.controller('AppCtrl', function($scope, $rootScope, $mdSidenav, User, Friendship, $http, $mdDialog, $mdToast, $cookies, jwtHelper, $filter, $state) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.setMe = function() {
    User.me({}, function(data) {
      var me = {
        name : data.name,
        email : data.email,
        role : data.role
      };

      $scope.me = me;
      $cookies.put('me', angular.toJson(me));
    });
  }

  var me = $cookies.get('me');
  var token = $cookies.get('socialAPI')
  if (me) {
    me = angular.fromJson(me);
    $scope.me = me;
  } else if (token) {
    $scope.setMe();
  }

  $scope.buildGridModel = function(tileTmpl){
    var it, results = [ ];
    for (var j = 0; j < $scope.users.length; j++) {

      var user = $scope.users[j];
      it = angular.extend({},tileTmpl);
      it.icon  = it.icon + ((j+1) % 11 + 1);
      it._id = user._id;
      it.title = user.name;
      it.email = user.email;
      it.span  = { row : 1, col : 1 };

      switch((j+1) % 11 + 1) {
        case 1:
          it.background = "red";
          it.span.row = it.span.col = 2;
          break;
        case 2: it.background = "green";         break;
        case 3: it.background = "darkBlue";      break;
        case 4:
          it.background = "blue";
          it.span.col = 2;
          break;
        case 5:
          it.background = "yellow";
          it.span.row = it.span.col = 2;
          break;
        case 6: it.background = "pink";          break;
        case 7: it.background = "darkBlue";      break;
        case 8: it.background = "purple";        break;
        case 9: it.background = "deepBlue";      break;
        case 10: it.background = "lightPurple";  break;
        case 11: it.background = "yellow";       break;
      }
      results.push(it);
    }
    return results;
  }

  $scope.addFriend = function(tile) {
    var id = tile._id;
    $scope.tiles = $filter('filter')($scope.tiles, {_id: '!' + id});
    Friendship.invite({id: id}, function(data) {
      $rootScope.$broadcast('friendship:requested');
      $mdToast.show(
        $mdToast.simple()
          .content('Friend request has been sent!')
          .position('bottom right')
          .hideDelay(3000)
      );
    })
  };

  $scope.getSuggestions = function() {
    User.available({}, function(data) {
      $scope.users = data;
      $scope.tiles = $scope.buildGridModel({
        icon : "avatar:svg-",
        title: "Svg-",
        background: ""
      });
    }, function(err, e) {
      console.log('err', err, e);
    });
  };

  $scope.search = function() {
    if ($scope.query) {
      $state.go('search', {query : $scope.query});
    }
  }

  $scope.getSuggestions();

});
