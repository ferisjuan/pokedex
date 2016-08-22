var React = require('react');
var Reflux = require('reflux');

var Actions = require('../reflux/Actions.jsx');
var PokemonStore = require('../reflux/PokemonStore.jsx');

var MatrixItem = require('./MatrixItem.jsx')
var styles = require('../styles/styles.js');

var Matrix = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState(){
    return {
      pokemonList: []
    }
  },
  componentWillMount(){
    Actions.getPokemon();
  },
  onChange(e, pokemonList){
    this.setState({pokemonList: pokemonList.results});
  },
  render(){
    var pokemonList = this.state.pokemonList.map(function(item, index) {
      return(
        <MatrixItem
          key={index + item}
          url={item.url}
          assets={"https://img.pokemondb.net/artwork/".concat(item.name).concat(".jpg")}
          number={item.url.slice(-2).slice(0,1)}
          name={item.name}
          ability="fire"
        />
      )
    })
    console.log(pokemonList);
    return(
      <div>
        {pokemonList}
      </div>
    );
  }
});

module.exports = Matrix;
