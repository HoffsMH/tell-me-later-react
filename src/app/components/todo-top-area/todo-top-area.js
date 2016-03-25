const React       = require("react");
const ReactDOM    = require("react-dom");

var TodoTopArea = React.createClass({
  render: function() {
    return <div className="todo-top-area row">
      <div className="column col-md-6 col-sm-12">
        <div className="column-inner">
          <form>
          <input type="text" placeholder="Title" className="title col-md-12"/>

          <label>Tell Me:</label>
          <input type="text" className="col-md-12" placeholder="...in 5 minutes,   ... tomorow at 3 AM,   ... in 3 days" />

          <label>Additional: </label>
          <div className="content-area">
          <textarea placeholder="Markdown is valid here!" className="content"/>
          <input type="submit" className="col-md-6 col-md-push-3"/>
          </div>
          </form>
        </div>
      </div>
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
