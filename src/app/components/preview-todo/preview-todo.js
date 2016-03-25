const React       = require("react");
const ReactDOM    = require("react-dom");
const chrono      = require("chrono-node");
const moment      = require("moment");
const marked      = require("marked");

var PreviewTodo = React.createClass({
  componentDidMount: function() {

  },
  renderShowTime: function() {
    if (chrono.parseDate(this.props.showTime)) {
      return chrono.parseDate(this.props.showTime).toString() + " ( " + this.props.showTime +" )";
    } else if (this.props.showTime) {
      return "( " + this.props.showTime +" )";
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
          <span dangerouslySetInnerHTML={this.rawMarkup(this.props.notes)} />
        </div>
      </div>
    </div>;
  }
});

//styles
require("./preview-todo.scss");

module.exports = PreviewTodo;
