const AppRoot   = require("../../src/app/components/app-root.js");
const React     = require('react');
const TestUtils = require('react-addons-test-utils');
const ReactDOM = require("react-dom");


const chai  = require('chai');

const expect = chai.expect;


describe('app-root component', function()  {
  before('render and locate element', function() {
    this.AppRoot = TestUtils.renderIntoDocument(
      <AppRoot />
    );
  });
  it('should exist',  function()  {
    expect(this.AppRoot).not.to.eq(undefined);
  });
});
