const NewTodo   = require("../../src/app/components/new-todo/new-todo.js");
const React     = require("react");
const enzyme    = require("enzyme");
const mount     = enzyme.mount;

const chai  = require("chai");
const expect = chai.expect;

describe("new-todo component", function()  {
  it('allows us to set props', () => {
    const wrapper = mount(<NewTodo title="test" />);
  });
});
