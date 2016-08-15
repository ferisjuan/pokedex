var React = require('react');

var Base = React.createClass({
  render(){
    return(
      <div className="">
        <h1>Header</h1>
          {this.props.children}
        <h1>Footer</h1>
      </div>
    );
  }
});

module.exports = Base
