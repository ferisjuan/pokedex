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
      next: null,
      dropdownButtonText: "Sort results by... "
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
    Actions.next();
  },
  surpriseMe(e){
    Actions.surprise();
  },
  sortMe(e){
    e.persist();
    Actions.sortMe(e);
    console.log(e.target.value);
    this.setState({dropdownButtonText: e.target.innerHTML});
  },
  render(){
    return(
      <div className="row" style={{marginTop: 10}}>
        <div className="col-sm-3 col-md-4 col-lg-4">
          <Button
            buttonClass="btn btn-primary"
            function={this.surpriseMe}
            icon="glyphicon glyphicon-refresh"
            text=" Surprise me!"
            style={styles.button}
            type="button"
          />
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4">
          <SplitDropdown
            buttonClass="btn btn-default dropdown-toggle"
            function={this.sortMe}
            style={styles.button}
            text={this.state.dropdownButtonText}
          />
        </div>
        <div className="row">
          <Matrix
            pokemonList = {this.state.pokemonList}
          />
        </div>
        <div className="row">
          <Button
            buttonClass="btn btn-default "
            function={this.nextPokemon}
            style={styles.button}
            text="Load more!"
            type="button"
          />
        </div>
      </div>

    );
  }
});

module.exports = Page1;
