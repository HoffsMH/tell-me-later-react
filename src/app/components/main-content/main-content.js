const React          = require("react");
const ReactDOM       = require("react-dom");
const chrono         = require("chrono-node");
const AjaxHandler    = require("../../lib/ajax-handler");
const ajaxHandler    = new AjaxHandler();
const TodoTopArea    = require("../todo-top-area/todo-top-area");
const TodoBottomArea = require("../todo-bottom-area/todo-bottom-area");

var MainContent = React.createClass({
  getInitialState: function() {
    return {
      newTodo: {title: '', show_time: '', content: ''},
      currentTodo: {title: '', show_time: '', content: ''},
      todoList: []
    };
  },
  handleUpdateNew: function(todo) {
    this.setState({newTodo: todo});
  },
  handleUpdateList: function(code) {
    var list = ajaxHandler.getList(code, this.setState);
  },
  handleSubmitNew: function(todo) {
    todo.show_time = chrono.parseDate(todo.show_time);
    ajaxHandler.submitNew(todo, this.handleUpdateList);
    this.handleUpdateNew(this.getInitialState().newTodo);
  },
  render: function() {
    return <div className="main-content container-fluid">
      <TodoTopArea handleUpdateNew={this.handleUpdateNew}
                   handleSubmitNew={this.handleSubmitNew}
                   currentTodo={this.state.currentTodo}/>
      <TodoBottomArea newTodo={this.state.newTodo}/>
    </div>;
  }
});

//styles
require("./main-content.scss");

module.exports = MainContent;
