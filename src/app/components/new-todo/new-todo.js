const React       = require("react");
const ReactDOM    = require("react-dom");

var NewTodo = React.createClass({
  getInitialState: function() {
    return {title: '', showTime: '', notes: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
    this.props.handleUpdate(this.state);
  },
  handleShowTimeChange: function(e) {
    this.setState({showTime: e.target.value});
    this.props.handleUpdate(this.state);
  },
  handleNotesChange: function(e) {
    this.setState({notes: e.target.value});
    this.props.handleUpdate(this.state);
  },
  
  render: function() {
    return <div className="column col-md-6 col-sm-12">
        <div className="column-inner">
          <form>
          <input type="text"
                  placeholder="Title"
                  className="title col-md-12"
                  onChange={this.handleTitleChange}/>

          <label>Tell Me:</label>
          <input type="text"
                  className="col-md-12"
                  placeholder="...in 5 minutes,   ... tomorow at 3 AM,   ... in 3 days"
                  onChange={this.handleShowTimeChange}/>

          <label>Additional: </label>
          <div className="content-area">
          <textarea placeholder="Markdown is valid here!"
                      className="content"
                      onKeyUp={this.handleNotesChange}/>
          <input type="submit" className="col-md-6 col-md-push-3"/>
          </div>
          </form>
        </div>
      </div>;
  }
});

//styles
require("./new-todo.scss");

module.exports = NewTodo;
