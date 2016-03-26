const NewTodo   = require("../../src/app/components/new-todo/new-todo.js");
const React     = require("react");
const TestUtils = require("react-addons-test-utils");
const ReactDOM = require("react-dom");


const chai  = require("chai");

const expect = chai.expect;


describe("new-todo component", function()  {
  before("render and locate element", function() {
    this.NewTodo = TestUtils.renderIntoDocument(
      <NewTodo />
    );
  });
  it("should exist",  function()  {
    expect(this.NewTodo).not.to.eq(undefined);
  });
  it("should start with a blank title", function() {
    var title = TestUtils.findRenderedDOMComponentWithClass(this.NewTodo, "title");

    expect(title.textContent).to.eq("");
    expect(this.NewTodo.state.title).to.eq("");
  });

  it("should start with a blank showTime", function() {
    var showTime = TestUtils.findRenderedDOMComponentWithClass(this.NewTodo, "show-time");

    expect(showTime.textContent).to.eq("");
    expect(this.NewTodo.state.showTime).to.eq("");
  });

  it("should update its state as the user enters a title", function() {
    console.log(this.NewTodo.state);
  });
});
