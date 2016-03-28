const React    = require("react");
const ReactDOM = require("react-dom");
const moment   = require("moment");

var NavBar = React.createClass({
  getInitialState: function() {
    return {currentTime: moment().format('MMMM D h:mm:ss a')};
  },
  componentDidMount: function() {
    setInterval(() => {
      this.setState({currentTime: moment().format('MMMM D h:mm:ss a')})
    }, 100);
  },
  navBarTime: function() {
    // window.setInterval(function() {return moment().format('MMMM D h:mm:ss a')};, 1000);
    return moment().format('MMMM D h:mm:ss a');
  },
  render: function() {
    return <nav className="navbar">
      <div className="container-fluid">
        <div className="col-md-6">
          <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Tell Me When</a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className=""><h3>{this.state.currentTime}</h3></li>
          </ul>
        </div>
      </div>
    </nav>;
  }
});

//styles
require("./nav-bar.scss");

module.exports = NavBar;
