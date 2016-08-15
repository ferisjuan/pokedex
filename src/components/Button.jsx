var React = require('react');

var Button = React.createClass({
  render(){

    return(
        <button
          type={this.props.type} className={this.props.buttonClass}
          style={this.props.style}
        >
          <i className={this.props.icon}></i>
          {this.props.text}
        </button>
    );
  }
});

module.exports = Button;
