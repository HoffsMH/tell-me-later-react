const React       = require("react");
const ReactDOM    = require("react-dom");
const PreviewTodo = require("../preview-todo/preview-todo.js");
const TodoList    = require("../todo-list/todo-list.js");

var TodoBottomArea = React.createClass({
  render: function() {
    return <div className="todo-bottom-area row">
      <PreviewTodo title={this.props.newTodo.title}
                    show_time={this.props.newTodo.show_time}
                    content={this.props.newTodo.content} />
      <TodoList />
    </div>;
  }
});

//styles
require("./todo-bottom-area.scss");

module.exports = TodoBottomArea;
