var React = require('react');
var Button = require('./Button.jsx');
var styles = require('../styles/styles.js')

var Page1 = React.createClass({
  render(){
    return(
      <div className="container" style={styles.container}>
        <div className="row">
          <Button
            buttonClass="btn btn-primary col-sm-4"
            icon="glyphicon glyphicon-refresh"
            text=" Surprise me!"
            style={styles.button}
            type="button"
          />
        </div>
      </div>
    );
  }
});

module.exports = Page1;
