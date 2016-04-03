const React       = require("react");
const ReactDOM    = require("react-dom");
const chrono      = require("chrono-node");
const moment      = require("moment");
const marked      = require("marked");

var PreviewTodo = React.createClass({
  renderShowTime: function() {
    var time = chrono.parseDate(this.props.show_time);
    if (time) {
      return moment(time).format('MMMM D h:mm:ss a') + " ( " + this.props.show_time +" )";
    } else if (this.props.show_time) {
      return "( " + this.props.show_time +" )";
    }
  },
  rawMarkup: function(content) {
    var rawMarkup = marked(content, {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return <div className="column col-md-6 hidden-sm hidden-xs">
      <div className="column-inner">
        <div className="preview-label">preview</div>
        <h3 className="preview-title">{this.props.title}</h3>
        <div className="preview-time">{this.renderShowTime()}</div>
        <div>
          <span dangerouslySetInnerHTML={this.rawMarkup(this.props.content)} />
        </div>
      </div>
    </div>;
  }
});

//styles
require("./preview-todo.scss");

module.exports = PreviewTodo;
