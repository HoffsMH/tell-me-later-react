const React       = require("react");
const ReactDOM    = require("react-dom");
const NavBar      = require("./nav-bar/nav-bar");
const MainContent = require("./main-content/main-content");

var AppRoot = React.createClass({
  render: function() {
    return <div className="app-root">
      <NavBar />
      <MainContent />
    </div>;
  }
});

//styles
require("./app-root.scss");

module.exports = AppRoot;
