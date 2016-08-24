var React = require('react');

var Button = React.createClass({
  element(props){
    if(props === null){
      return''
    }
    return (
      <i className={props}></i>
    )
  },
  render(){

    return(
        <button
          type={this.props.type}
          className={this.props.buttonClass}
          onClick={this.props.function}
          style={this.props.style}
        >
          {this.element(this.props.icon)}
          {this.props.text}
        </button>
    );
  }
});

module.exports = Button;
