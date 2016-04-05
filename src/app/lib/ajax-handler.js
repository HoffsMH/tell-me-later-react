const $ = require('jquery');

$.ajaxSetup({
  url: "api/v1",
  headers: {
    // autheticating with rails
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});
const AjaxHandler =  {

  submitNew(todo_item, callback) {
    // try {
    $.ajax({
      url: "api/v1/todo_items",
      method: "POST",
      data: {
        todo_item: todo_item
      }
    })
    .then(function(data) {

      console.log(data);
      console.log("we are in submit New: " + data);
      callback(data);
    })
    .fail(function(data) {
      console.log("we are in submit New and failed: " + data);
      callback(data);
    });
    // } catch(e) {
    //   console.log("most likely trying to use this function on local");
    //   console.log("here's the error: " + e);
    // }
  },
  getList(code, callback) {
    try {
      $.ajax({
        url: "api/v1/todo_lists/" + code,
        method: "get"
      })
      .then(function(data) {
        console.log("we are in getList and failed: " + data);
        callback(data);
      })
      .fail(function(data) {
        console.log("we are in getList and failed: " + data);
        callback(data);
      });
    } catch(e) {
      console.log("most likely trying to use this function on local");
      console.log("here's the error: " + e);
    }
  }
};


module.exports = AjaxHandler;
