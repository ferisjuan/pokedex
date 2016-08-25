var React = require('react');
var $ = require('jquery')
var Button = require('./Button.jsx');
var Dropdown = require('../../bower_components/bootstrap/js/dropdown.js')

var Dropdown = React.createClass({
  render(){
    return(
      <div
        className={"dropdown "}
      >
        <button
          type="button"
          id="dropdownMenu1"
          className={this.props.buttonClass}
          style={{fontSize: "1.4em", fontWeight: "bold", height: 40}}
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
        >
          {this.props.text}
          <span className="caret"></span>
        </button>
        <ul
          className="dropdown-menu"
          id="dropdown"
          onClick={this.props.function}
          style={{fontSize: "1.2em",width:"60%"}}

        >
          <li>
            <a data-option-value="noSort">
              Sort results by...
            </a>
          </li>
          <li>
            <a data-option-value="lowest">
              Lowest Number (First)
            </a>
          </li>
          <li>
            <a data-option-value="highest">
              Highest Number (First)
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
