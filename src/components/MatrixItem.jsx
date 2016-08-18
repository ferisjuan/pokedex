var React = require('react');
var Image = require('./Image.jsx');
var PokemonInfo = require('./PokemonInfo.jsx');

var MatrixItem = React.createClass({
  render(){

    return(
      <li>
        <Image />
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
