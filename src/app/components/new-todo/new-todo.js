const React       = require("react");
const ReactDOM    = require("react-dom");
const AjaxHandler = require("../../lib/ajax-handler");
const chrono      = require("chrono-node");

var NewTodo = React.createClass({
  getInitialState: function() {
    return {
      newTodo: {
        title: '',
        show_time: '',
        content: ''
      },
      ajaxHandler: new AjaxHandler()
    };
  },
  handleChange(type) {
    return (e) => {
      var newState = {newTodo: this.state.newTodo};
      var value = e.target.value;
      newState.newTodo[type] = value;
      this.setState(newState);
      this.state.newTodo[type] = value;
      this.props.handleUpdate(this.state.newTodo);
    };
  },
  handleShowTimeChange: function(e)  { this.handleChange("show_time")(e);},
  handleNotesChange:    function(e)  { this.handleChange("content")(e); },
  handleTitleChange:    function(e)  { this.handleChange("title")(e); },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleSubmitNew(this.state.newTodo)
    this.state.newTodo.show_time = chrono.parseDate(this.state.newTodo.show_time);
    console.log(this.getInitialState());
    try {
      var output = this.state.ajaxHandler.submitNew(this.state.newTodo);
    } catch(e) {
      console.log("most likely trying to use this function on local");
      console.log("here's the error: " + e);
    }
    this.setState(this.getInitialState());
    this.props.handleUpdate(this.state.newTodo);
  },
  render: function() {
    return <div className="column col-md-6 col-sm-12">
        <div className="column-inner">
          <form>
          <input type="text"
                  placeholder="Title"
                  className="title col-md-12"
                  maxLength="50"
                  onChange={this.handleTitleChange}
                  value={this.state.newTodo.title}/>

          <label>Tell Me:</label>
          <input type="text"
                  className="show-time col-md-12"
                  placeholder="...in 5 minutes,   ... tomorow at 3 AM,   ... in 3 days"
                  maxLength="50"
                  onChange={this.handleShowTimeChange}
                  value={this.state.newTodo.show_time}/>

          <label>Additional: </label>
          <div className="content-area">
          <textarea placeholder="Markdown is valid here!"
                      className="content"
                      maxLength="500"
                      onChange={this.handleNotesChange}
                      value={this.state.newTodo.content}/>
          <input type="submit" className="col-md-6 col-md-push-3" onClick={this.handleSubmit}/>
          </div>
          </form>
        </div>
      </div>;
  }
});

//styles
require("./new-todo.scss");

module.exports = NewTodo;
