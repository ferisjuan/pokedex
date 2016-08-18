var React = require('react');

var Image = React.createClass({
  render(){

    return(
      <figure>
        <a href={this.props.url}>
          <img srt={this.props.assets} style={this.props.style} />
        </a>
      </figure>
    );
  }
});

module.exports = Image;
