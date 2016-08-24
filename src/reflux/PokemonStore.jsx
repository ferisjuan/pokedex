var HTTP = require('../services/httpservice.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx')

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon(url){
    HTTP.get(url)
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
