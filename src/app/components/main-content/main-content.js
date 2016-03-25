const React          = require("react");
const ReactDOM       = require("react-dom");
const TodoTopArea    = require("../todo-top-area/todo-top-area");
const TodoBottomArea = require("../todo-bottom-area/todo-bottom-area");

var MainContent = React.createClass({
  handleUpdateNew: function(arg1) {
    // console.log("title: " + arg1["title"]);
    // console.log("showTime: " + arg1["showTime"]);
    // console.log("notes: " + arg1["notes"]);
  },
  render: function() {
    return <div className="main-content container-fluid">
      <TodoTopArea handleUpdateNew={this.handleUpdateNew} />
      <TodoBottomArea/>
    </div>
  }
});

//styles
require("./main-content.scss");

module.exports = MainContent;
