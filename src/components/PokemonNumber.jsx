var React = require('react');

var PokemonNumber = React.createClass({
  render(){

    return(
      <p>
        <span>#{this.props.number}</span>
      </p>
    );
  }
});

module.exports = PokemonNumber;
