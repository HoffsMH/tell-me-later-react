const React       = require("react");
const ReactDOM    = require("react-dom");

var TodoList = React.createClass({
  render: function() {
    return <div className="column col-md-6 col-sm-12">
        <div className="column-inner">
          <div className="preview-label">0/3 Shownsdf</div>
          <div>lkjasdfa</div>
          <div className="col-md-4 todo-list-item"> Here is a reminder</div>
          <div className="col-md-4 todo-list-item"> Here is a reminder asdfsadfsadfasdfasdf sadf asdfsadfas dfasfddsfasfd </div>
          <div className="col-md-4 todo-list-item"> Here is a reminder</div>
          <div className="col-md-4 todo-list-item"> Here is a reminder </div>
          <div className="col-md-4 todo-list-item"> Here is a reminder</div>
        </div>
      </div>;
  }
});

//styles
require("./todo-list.scss");

module.exports = TodoList;
