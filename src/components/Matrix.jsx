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
          assets={"https://img.pokemondb.net/artwork/".concat(item.name).concat(".jpg")}
          number={item.url.match(/\d+/g)[1]}
          name={item.name}
          ability="fire"
          style={{marginTop: 20, width: 256, height: 256}}
        />
      )
    })
    return(
        <div className="row text-center" style={{marginTop: 30}}>
          {pokemonList}
        </div>
    );
  }
});

module.exports = Matrix;
