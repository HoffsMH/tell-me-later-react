const React       = require("react");
const ReactDOM    = require("react-dom");
const NewTodo     = require("../new-todo/new-todo.js");

var TodoTopArea = React.createClass({
  render: function() {
    return <div className="todo-top-area row">
      <NewTodo handleUpdate={this.props.handleUpdateNew} />
      <div className="column col-md-6  col-sm-12">
        <div className="column-inner">
        <h3 className="preview-title">Go Grocery Shopping</h3>
        <div className="preview-time">7:03:03pm (tomorow at 3)</div>
        <div>
          <h2>asdfasfd</h2>
          <ul>
            <li>asdfas</li>
            <li>asdfas adfasdf</li>
            <li>asas</li>
          </ul>
        </div>
        </div>
      </div>
    </div>;
  }
});

//styles
require("./todo-top-area.scss");

module.exports = TodoTopArea;
