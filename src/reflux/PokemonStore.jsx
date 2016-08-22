var HTTP = require('../services/httpservice.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx')

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon(){
    HTTP.get('/pokemon/?limit=9')
    .then(function (json) {
      this.pokemonList = json;
      this.fireUpdate();
    }.bind(this));
  },
  fireUpdate(){
    this.trigger('change', this.pokemonList);
  }
});

module.exports = PokemonStore;
