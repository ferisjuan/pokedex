var React = require('react');
var Image = require('./Image.jsx');
var PokemonInfo = require('./PokemonInfo.jsx');

var MatrixItem = React.createClass({
  render(){

    return(
      <li>
        <Image
          url={this.props.url}
          assets={this.props.assets}
          style={this.props.style}
        />
        <PokemonInfo
          number={this.props.number}
          name={this.props.name}
          abilityInfo={this.props.ability}
        />
      </li>
    );
  }
});

module.exports = MatrixItem;
