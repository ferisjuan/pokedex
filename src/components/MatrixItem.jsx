var React = require('react');
var Image = require('./Image.jsx');
var PokemonInfo = require('./PokemonInfo.jsx');

var MatrixItem = React.createClass({
  render(){

    return(
      <div className="col-sm-12 col-md-6 col-lg-4">
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
      </div>
    );
  }
});

module.exports = MatrixItem;
