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
    this.setState({pokemonList: pokemonList});
  },
  render(){
    console.log(this.state.pokemonList);

    return(
      //body
      <div></div>
    )
  }
});

module.exports = Matrix;
