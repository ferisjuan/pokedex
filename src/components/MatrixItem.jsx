var React = require('react');
var Image = require('./Image.jsx');

var MatrixItem = React.createClass({
  render(){

    return(
      <li>
        <Image />
      </li>
    );
  }
});

module.exports = MatrixItem;
