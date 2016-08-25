var React = require('react');

var SearchBar = require('../components/SearchBar.jsx')

var Base = React.createClass({
  render(){
    return(
      <div className="container" style={{background: "#eee"}}>
        <h1 className="title">Pokédex</h1>
        <div className="row gray-darker" style={{paddingLeft: 10, paddingRight: 10, margin: "0 auto"}}>
          <div className="row" style={{marginLeft: 3}}>
            <h2>Name or Number</h2>
          </div>
          <SearchBar />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base
