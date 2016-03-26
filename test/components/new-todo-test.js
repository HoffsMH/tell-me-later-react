const NewTodo   = require("../../src/app/components/new-todo/new-todo.js");
const React     = require("react");
const enzyme    = require("enzyme");
const mount     = enzyme.mount;
const sinon     = require("sinon");

const chai  = require("chai");
const expect = chai.expect;

describe("new-todo component", () =>  {
  context("when editing the title field", () => {
    before("each", () => {
      sinon.spy(NewTodo.prototype.__reactAutoBindMap, "handleTitleChange");
    });
    it("calls handleTitleChange", () => {
      var nullfunc = function() {return null;};
      const wrapper = mount(<NewTodo title="asdf" handleUpdate={nullfunc}/>);


      wrapper.find("input.title").node.value = "tacos";
      wrapper.find("input.title").simulate("change");

      expect(NewTodo.prototype.__reactAutoBindMap.handleTitleChange.called).to.be.true
    });
  });
});
