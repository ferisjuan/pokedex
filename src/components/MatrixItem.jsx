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
          number=""
          name=""
          abilityInfo=""
        />
      </li>
    );
  }
});

module.exports = MatrixItem;
