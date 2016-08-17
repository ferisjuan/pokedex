var React = require('react');
var $ = require('jquery')
var Button = require('./Button.jsx');
var Dropdown = require('../../bower_components/bootstrap/js/dropdown.js')

var Dropdown = React.createClass({
  render(){
    var dropDownList = this.props.elements.map(function (el) {
      return(
        <li
          data-option-value={el.value}
          key={el.value+el.text}
        >
          <a>{el.text}</a>
        </li>
      );
    });

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
        <ul className="dropdown-menu" id="dropdown">
          {dropDownList}
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;
