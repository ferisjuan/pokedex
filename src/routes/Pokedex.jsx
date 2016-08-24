var React = require('react');
var Reflux = require('reflux');

var Actions = require('../reflux/Actions.jsx');
var PokemonStore = require('../reflux/PokemonStore.jsx');

var Button = require('../components/Button.jsx');
var SplitDropdown = require('../components/SplitDropdown.jsx')
var styles = require('../styles/styles.js')
var Matrix = require('../components/Matrix.jsx')

var Page1 = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState(){
    return {
      pokemonList: [],
      next: null
    }
  },
  componentWillMount(){
    Actions.getPokemon('/api/v2/pokemon/?limit=9');
  },
  onChange(e, pokemonList){
    this.setState({
      pokemonList: pokemonList.results,
      next: pokemonList.next
    });
  },
  nextPokemon(e){
    e.preventDefault();
    var len = this.state.next.length;
    Actions.getPokemon(this.state.next.slice(17,len));
  },
  surpriseMe(e){
    e.preventDefault();
    var rand = Math.floor(Math.random() * 811) + 1;
    console.log(rand);
    var newUrl = "/api/v2/pokemon/?limit=9&offset=".concat(rand);
    Actions.getPokemon(newUrl);
  },
  render(){
    var dropdownElements = [
      {
        text: 'Sort results by...',
        value:'noSort'
      },
      {
        text: 'Lowest Number (First)',
        value: 'lowest'
      },
      {
        text: 'Highest Number (First)',
        value: 'Highest'
      },
      {
        text: 'A-Z',
        value: 'Alphabetic'
      },
      {
        text: 'Z-A',
        value: 'Inversed-Alpha'
      }
  ]
    return(
      <div className="container" style={styles.container}>
        <div className="row">
          <Button
            buttonClass="btn btn-primary col-sm-4"
            function={this.surpriseMe}
            icon="glyphicon glyphicon-refresh"
            text=" Surprise me!"
            style={styles.button}
            type="button"
          />
          <SplitDropdown
            buttonClass="btn btn-default"
            divClass="col-sm-4"
            elements={dropdownElements}
            style={styles.button}
            text="Sort results by..."
          />
          <Button
            buttonClass="btn btn-default col-sm-4"
            function={this.nextPokemon}
            style={styles.button}
            text="Load more!"
            type="button"
          />
        </div>
        <Matrix
          pokemonList = {this.state.pokemonList}
        />
      </div>
    );
  }
});

module.exports = Page1;
