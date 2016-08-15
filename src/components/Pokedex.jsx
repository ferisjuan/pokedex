var React = require('react');
var Button = require('./Button.jsx');
var SplitDropdown = require('./SplitDropdown.jsx')
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
          <div className=""></div>
          <SplitDropdown
            buttonClass="btn btn-success"
            divClass="col-sm-4"
            style={styles.button}
            text="Sort results by..."
          />
        </div>
      </div>
    );
  }
});

module.exports = Page1;
