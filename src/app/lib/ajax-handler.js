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
AjaxHandler.prototype.submitNew = function(todo_item, callback) {
  $.ajax({
    url: "api/v1/todo_items",
    method: "POST",
    data: {
      todo_item: todo_item
    }
  })
  .then(function(data) {
    callback(data);
  })
  .fail(function(data) {
    callback(data);
  });
};

module.exports = AjaxHandler;
