  'use strict';

var app = app || angular.module('Orkut');

app.service('User', function($resource, BASE_URL, $cookies) {

  function getCookie() {
    console.log('cookieee', $cookies.get('socialAPI'));
    return $cookies.get('socialAPI');
  }

  return $resource(BASE_URL + '/users/:id', {id : '@id'}, {
    'get':    { method: 'GET',
                withCredentials: true, cache: false, isArray: true },
    'save':   { method: 'POST',
                withCredentials: true },
    'query':  { method: 'GET',
                isArray: true,
                withCredentials: true },
    'remove': { method: 'DELETE',
                withCredentials: true },
    'delete': { method: 'DELETE',
                withCredentials: true },
    'me':     { method: 'GET',
                url: BASE_URL + '/users/me',
                withCredentials: true,
                headers: { 'Cookie' : 'socialAPI=' + getCookie} },
    'available': { isArray : true,
                method: 'GET',
                url: BASE_URL + '/users/available',
                withCredentials: true }
  });
});
