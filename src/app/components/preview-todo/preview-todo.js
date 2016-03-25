const React       = require("react");
const ReactDOM    = require("react-dom");

var PreviewTodo = React.createClass({
  render: function() {
    return <div className="column col-md-6 hidden-sm hidden-xs">
      <div className="column-inner">
        <div className="preview-label">preview</div>
        <h3 className="preview-title">{this.props.title}</h3>
        <div className="preview-time">{this.props.showTime}</div>
        <div>
          {this.props.notes}
        </div>
      </div>
    </div>;
  }
});

//styles
require("./preview-todo.scss");

module.exports = PreviewTodo;
