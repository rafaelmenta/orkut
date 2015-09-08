'use strict';

var app = app || angular.module('Orkut');

app.config( function( $mdIconProvider ){
  $mdIconProvider.iconSet('avatar', 'assets/icons/avatar-icons.svg', 128);
});
