var React = require('react');
var PokemonNumber = require('./PokemonNumber.jsx');
var PokemonName = require('./PokemonName.jsx');
var PokemonAbilities = require('./PokemonAbilities.jsx')

var PokemonInfo = React.createClass({
  // TODO write a <PokemonAbility routine for the react element
  render(){

    return(
      <div>
        <PokemonNumber number={this.props.number} />
        <PokemonName name={this.props.name} />
        <PokemonAbilities abilityInfo={this.info} />
      </div>
    );
  }
});

module.exports = PokemonInfo;
