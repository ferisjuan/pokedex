var React = require('react');

var Button = require('../components/Button.jsx');

var SearchBar = React.createClass({
  render(){

    return(
      <div className="row">
        <form >
          <div className="form-group col-sm-10 col-md-6 col-lg-6">
            <input type="text" className="form-control" />
          </div>
          <Button
            buttonClass="btn btn-warning"
            icon="glyphicon glyphicon-search"
            type="submit"
          />
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
