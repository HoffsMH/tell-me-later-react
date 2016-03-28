const React          = require("react");
const ReactDOM       = require("react-dom");
const TodoTopArea    = require("../todo-top-area/todo-top-area");
const TodoBottomArea = require("../todo-bottom-area/todo-bottom-area");

var MainContent = React.createClass({
  getInitialState: function() {
    return {
      newTodo: {title: '', showTime: '', notes: ''}
    };
  },
  handleUpdateNew: function(todo) {
    this.setState({newTodo: todo});
  },
  render: function() {
    return <div className="main-content container-fluid">
      <TodoTopArea handleUpdateNew={this.handleUpdateNew} />
      <TodoBottomArea newTodo={this.state.newTodo}/>
    </div>
  }
});

//styles
require("./main-content.scss");

module.exports = MainContent;
