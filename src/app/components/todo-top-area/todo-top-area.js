const React       = require("react");
const ReactDOM    = require("react-dom");
const NewTodo     = require("../new-todo/new-todo.js");
const CurrentTodo = require("../current-todo/current-todo.js");

var TodoTopArea = React.createClass({
  render: function() {
    return <div className="todo-top-area row">
      <NewTodo handleUpdate={this.props.handleUpdateNew} />
      <CurrentTodo title={this.props.currentTodo.title}
                   show_time={this.props.currentTodo.show_time}
                   content={this.props.currentTodo.content} />
    </div>;
  }
});

//styles
require("./todo-top-area.scss");

module.exports = TodoTopArea;
