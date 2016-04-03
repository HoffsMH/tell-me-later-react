const TestHelper = require("../test-helper.js");
const NewTodo    = require("../../src/app/components/new-todo/new-todo.js");
const React      = require("react");
const mount      = require("enzyme").mount;
const sinon      = require("sinon");

const expect     = require("chai").expect;

const NewTodoMethods = TestHelper.getMethods(NewTodo);

describe("new-todo component", () =>  {
  context("when editing the title field", () => {
    before("each", () => {
      sinon.spy(NewTodoMethods, "handleTitleChange");
    });

    it("calls handleTitleChange", () => {
      const wrapper = mount(<NewTodo title="test" handleUpdate={TestHelper.noop}/>);

      wrapper.find("input.title").simulate("change");

      expect(NewTodoMethods.handleTitleChange.called).to.eq(true);
    });

    it("updates state", () => {
      const wrapper = mount(<NewTodo title="old value" handleUpdate={TestHelper.noop}/>);

      wrapper.find("input.title").node.value = "new value";
      wrapper.find("input.title").simulate("change");

      expect(wrapper.state().newTodo.title).to.eq("new value");
    });
  });
  context("when editing the showtime field", () => {
    before("each", () => {
      sinon.spy(NewTodoMethods, "handleShowTimeChange");
    });

    it("calls handleShowTimeChange", () => {
      const wrapper = mount(<NewTodo title="test"
                                     showTime="test"
                                     handleUpdate={TestHelper.noop}/>);

      wrapper.find("input.show-time").simulate("change");

      expect(NewTodoMethods.handleShowTimeChange.called).to.eq(true);
    });

    it("updates state", () => {
      const wrapper = mount(<NewTodo title="old value"
                                      showTime="test"
                                      handleUpdate={TestHelper.noop}/>);

      wrapper.find("input.show-time").node.value = "new value";
      wrapper.find("input.show-time").simulate("change");

      expect(wrapper.state().newTodo.show_time).to.eq("new value");
    });
  });
  context("when editing the notes field", () => {
    before("each", () => {
      sinon.spy(NewTodoMethods, "handleNotesChange");
    });

    it("calls handleNotesChange", () => {
      const wrapper = mount(<NewTodo notes="test"
                                     handleUpdate={TestHelper.noop}/>);

      wrapper.find("textarea.content").simulate("change");

      expect(NewTodoMethods.handleNotesChange.called).to.eq(true);
    });

    it("updates state", () => {
      const wrapper = mount(<NewTodo notes="test"
                                      handleUpdate={TestHelper.noop}/>);

      wrapper.find("textarea.content").node.textContent = "new value";
      wrapper.find("textarea.content").simulate("change");

      expect(wrapper.state().newTodo.content).to.eq("new value");
    });
  });
});
