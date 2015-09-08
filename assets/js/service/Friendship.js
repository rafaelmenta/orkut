'use strict';

var app = app || angular.module('Orkut');

app.service('Friendship', function($resource, BASE_URL) {

  return $resource(BASE_URL + '/friendships/:id', {id : '@id'}, {
    'me':       { method: 'GET',
                  url: BASE_URL + '/friendships/me',
                  withCredentials: true, cache: false, isArray: true },
    'requests': { method: 'GET',
                  url: BASE_URL + '/friendships/requests',
                  withCredentials: true, isArray: true },
    'requested':{ method: 'GET',
                  url: BASE_URL + '/friendships/requested',
                  withCredentials: true, isArray: true },
    'invite' :  { method : 'POST',
                  url : BASE_URL + '/friendships/:id',
                  params : {id : '@id'},
                  withCredentials: true},
    'delete': { method: 'DELETE',
                withCredentials: true }
  });
});
