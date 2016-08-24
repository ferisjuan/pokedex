var Fetch = require('whatwg-fetch');
var baseUrl = 'http://pokeapi.co';

var service = {
  get(url){
    return fetch(baseUrl.concat(url))
    .then(function (response) {
      return response.json();
    });
  }
}

module.exports = service;
