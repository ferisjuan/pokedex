var React = require('react');

var Image = React.createClass({
  render(){

    return(
      <figure>
        <a href={this.props.url}>
          <img src={this.props.assets} style={this.props.style} />
        </a>
      </figure>
    );
  }
});

module.exports = Image;
