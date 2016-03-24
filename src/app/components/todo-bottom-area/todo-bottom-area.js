const React       = require("react");
const ReactDOM    = require("react-dom");

var TodoBottomArea = React.createClass({
  render: function() {
    return <div className="todo-bottom-area row">
    <div className="column col-md-6 hidden-sm hidden-xs">
      <div className="column-inner">
        <div className="preview-label">preview</div>
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
    <div className="column col-md-6 col-sm-12">
      <div className="column-inner">
        <div className="preview-label">preview</div>
        <h3 className="preview-title"> list</h3>
        <div className="col-md-4 todo-list-item"> Here is a thing</div>
        <div className="col-md-4 todo-list-item"> Here is a thing asdfsadfsadfasdfasdf sadf asdfsadfas dfasfddsfasfd </div>
        <div className="col-md-4 todo-list-item"> Here is a thing</div>
        <div className="col-md-4 todo-list-item"> Here is a thing asdfasdfasdf asdfasdf asdfasfd asdfasdfs df</div>
        <div className="col-md-4 todo-list-item"> Here is a thing</div>
      </div>
    </div>
    </div>;
  }
});

//styles
require("./todo-bottom-area.scss");

module.exports = TodoBottomArea;
