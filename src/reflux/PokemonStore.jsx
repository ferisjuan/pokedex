var HTTP = require('../services/httpservice.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx')

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon(){
    HTTP.get('/pokemon/?limit=9')
  }
});
