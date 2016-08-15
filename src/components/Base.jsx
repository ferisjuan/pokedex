var React = require('react');

var Base = React.createClass({
  render(){
    return(
      <div>
        <h1>Pokédex</h1>
        <div style={{backgroundColor: "black"}}>
          <h2>Name or Number</h2>
          <div>
            <input/>
            <button><i></i></button>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base
