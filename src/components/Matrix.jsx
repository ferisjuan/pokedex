var React = require('react');

var MatrixItem = require('./MatrixItem.jsx')
var styles = require('../styles/styles.js');

var Matrix = React.createClass({
  render(){
    var pokemonList = this.props.pokemonList.map(function(item, index) {
      return(
        <MatrixItem
          key={index + item}
          url={item.url}
          assets={item.assets}
          number={item.number}
          name={item.name}
          ability="fire"
          style={{marginTop: 20, width: 256, height: 256}}
        />
      )
    })
    return(
        <div className="text-center" style={styles.matrix}>
          {pokemonList}
        </div>
    );
  }
});

module.exports = Matrix;
