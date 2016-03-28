const $ = require('jquery');

function AjaxHandler() {
  $.ajaxSetup({
    url: "api/v1",
    headers: {
      // autheticating with rails
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
}
AjaxHandler.prototype.submitNew = function(todo_item) {
  todo_item.show_time =
  $.ajax({
      url: "api/v1/todo_items",
      method: "POST",
      data: {
              todo_item: todo_item
            }
    })
    .then(function(data) {
      console.log(data);
      console.log(data.data);
      console.log(data.data.todo_item);
    })
    .fail(function(data) {

    });
  };

module.exports = AjaxHandler;
