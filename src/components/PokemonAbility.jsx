var React = require('react');

var PokemonAbility = React.createClass({
  render(){

    return(
      <span
        className="label label-default"
        id={this.props.abilityId}
      >
        {this.props.ability}
      </span>
    );
  }
});

module.exports = PokemonAbility;
