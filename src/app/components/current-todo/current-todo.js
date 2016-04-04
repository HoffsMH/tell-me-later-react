const React       = require("react");
const ReactDOM    = require("react-dom");
const chrono      = require("chrono-node");
const moment      = require("moment");
const marked      = require("marked");

var CurrentTodo = React.createClass({
  rawMarkup: function(content) {
    var rawMarkup = marked(content, {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return <div className="column col-md-6 hidden-sm hidden-xs">
      <div className="column-inner">
        <h3 className="current-title">{this.props.title}</h3>
        <div className="current-show-time">{this.props.show_time}</div>
        <div className="current-content">
          <span dangerouslySetInnerHTML={this.rawMarkup(this.props.content)} />
        </div>
      </div>
    </div>;
  }
});

//styles
require("./current-todo.scss");

module.exports = CurrentTodo;
