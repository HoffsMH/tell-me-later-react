const React          = require("react");
const ReactDOM       = require("react-dom");
const TodoTopArea    = require("../todo-top-area/todo-top-area");
const TodoBottomArea = require("../todo-bottom-area/todo-bottom-area");

var MainContent = React.createClass({
  render: function() {
    return <div className="main-content container-fluid">
      <TodoTopArea />
      <TodoBottomArea />
    </div>
  }
});

//styles
require("./main-content.scss");

module.exports = MainContent;
