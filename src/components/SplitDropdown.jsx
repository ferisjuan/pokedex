var React = require('react');
var $ = require('jquery')
var Button = require('./Button.jsx');
var Dropdown = require('../../bower_components/bootstrap/js/dropdown.js')

var Dropdown = React.createClass({
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
        <ul
          className="dropdown-menu"
          id="dropdown"
          onClick={this.props.function}
        >
          <li>
            <a data-option-value="noSort">
              Sort results by...
            </a>
          </li>
          <li

          >
            <a data-option-value="lowest">
              Lowest Number (First)
            </a>
          </li>
          <li>
            <a data-option-value="highest"
            >Highest Number (First)
            </a>
          </li>
          <li>
            <a data-option-value="a-z">
              Alphabetic
            </a>
          </li>
          <li>
            <a data-option-value="z-a">
              Inversed-Alpha
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;
