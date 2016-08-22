var React = require('react');

var PokemonAbility = require('./PokemonAbility.jsx');

var PokemonAbilities = React.createClass({
  render(){

    return(
      <div className="container">
        <PokemonAbility
          ability={this.props.abilityInfo.ability}
          abilityId={this.props.abilityInfo.abilityId}
        />
      </div>
    );
  }
});

module.exports = PokemonAbilities;
