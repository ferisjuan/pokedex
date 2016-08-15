var React = require('react');
var $ = require('jquery')
var Button = require('./Button.jsx');
var Dropdown = require('../../bower_components/bootstrap/js/dropdown.js')

var Dropdown = React.createClass({
  componentDidMount(){
    // Dropdown();
  },
  render(){

    return(
      <div
        className={"btn-group ".concat(this.props.divClass)}
      >
        <button
          type="button"
          className={this.props.buttonClass}
          style={this.props.style}
        >
          {this.props.text}
        </button>

        <button
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className={this.props.buttonClass.concat(" dropdown-toggle")}
          style={this.props.style}
          type="button"
        >
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        {/* {elements} */}
        <ul className="dropdown-menu" id="dropdown">
          <li data-option-value="noSort"><a>Sort Results by</a></li>
          <li><a>Another action</a></li>
          <li><a>Something else here</a></li>
          <li role="separator" className="divider"></li>
          <li><a>Separated link</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;
