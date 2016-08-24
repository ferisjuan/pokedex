var HTTP = require('../services/httpservice.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx')

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon(url){
    HTTP.get(url)
    .then(function (json) {
      var len = json.results.length;
      for (var i = 0; i < len; i++) {
        json.results[i].number = +json.results[i].url.match(/\d+/g)[1];
        json.results[i].assets = "https://img.pokemondb.net/artwork/".concat(json.results[i].name).concat(".jpg")
      }
      this.pokemonList = json;
      this.fireUpdate();
    }.bind(this));
  },
  next(){
    var url = this.pokemonList.next
    var len = url.length;
    this.getPokemon(url.slice(17, len));
    this.fireUpdate()
  },
  sortMe(e){
    var val = e.target.getAttribute('data-option-value');
    var list = this.pokemonList.results;

    // Took this function from http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
    function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
    }
    switch (val) {
      case "noSort":
        break;
      case "lowest":
        this.pokemonList.results.sort(dynamicSort("number"));
        break;
      case "highest":
      this.pokemonList.results.sort(dynamicSort("-number"));
        break;
      case "a-z":
        this.pokemonList.results.sort(dynamicSort("name"));
        break;
      case "z-a":
      this.pokemonList.results.sort(dynamicSort("-name"));
        break;
      default:
  }
    this.fireUpdate()
  },
  surprise(){
    var rand = Math.floor(Math.random() * 811) + 1;
    var newUrl = "/api/v2/pokemon/?limit=9&offset=".concat(rand);
    this.getPokemon(newUrl);
    this.fireUpdate()
  }
  ,fireUpdate(){
    this.trigger('change', this.pokemonList);
  }
});

module.exports = PokemonStore;
