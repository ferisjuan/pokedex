var React = require('react');

var PokemonName = React.createClass({
  render(){

    return(
      <h5>{this.props.name}</h5>
    );
  }
});

module.exports = PokemonName;
