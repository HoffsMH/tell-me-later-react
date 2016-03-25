const React       = require("react");
const ReactDOM    = require("react-dom");
const PreviewTodo = require("../preview-todo/preview-todo.js");

var TodoBottomArea = React.createClass({
  render: function() {
    return <div className="todo-bottom-area row">
      <PreviewTodo title={this.props.newTodo.title}
                    showTime={this.props.newTodo.showTime}
                    notes={this.props.newTodo.notes}/>
      <div className="column col-md-6 col-sm-12">
        <div className="column-inner">
          <div className="preview-label">preview</div>
          <h3 className="preview-title"> list of reminders</h3>
          <div className="col-md-4 todo-list-item"> Here is a reminder</div>
          <div className="col-md-4 todo-list-item"> Here is a reminder asdfsadfsadfasdfasdf sadf asdfsadfas dfasfddsfasfd </div>
          <div className="col-md-4 todo-list-item"> Here is a reminder</div>
          <div className="col-md-4 todo-list-item"> Here is a reminder </div>
          <div className="col-md-4 todo-list-item"> Here is a reminder</div>
        </div>
      </div>
    </div>;
  }
});

//styles
require("./todo-bottom-area.scss");

module.exports = TodoBottomArea;
