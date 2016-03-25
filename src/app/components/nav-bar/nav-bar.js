const React    = require("react");
const ReactDOM = require("react-dom");
const moment   = require("moment");

var NavBar = React.createClass({
  navBarTime: function() {
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
          <ul className="pull-right col-md-offset-1 nav navbar-nav navbar-left hidden-sm hidden-xs">
          <li className=""><h3>{this.navBarTime()}</h3></li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="./signin">Sign In</a></li>
          </ul>
        </div>
      </div>
    </nav>
  }
});

//styles
require("./nav-bar.scss");

module.exports = NavBar;
