var React = require('react');
var Button = require('../components/Button.jsx');

var Base = React.createClass({
  render(){
    return(
      <div className="container">
        <h1 className="title">Pokédex</h1>
        <div className="gray-darker container">
          <h2>Name or Number</h2>
          <form className="row">
            <div className="form-group col-sm-4">
              <input type="text" className="form-control" />
            </div>
            <Button
              buttonClass="btn btn-warning"
              icon="glyphicon glyphicon-search"
              type="submit"
            />
          </form>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base
