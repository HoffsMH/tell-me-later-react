const React = require('react'),
      AppRoot = require("../../src/app/components/app-root.js"),
      TestUtils = React.addons.TestUtils;


const _     = require("lodash");
const chai  = require('chai');

const expect = chai.expect;



describe('app-root react component', function () {

  it('should be an object', function () {
    expect(AppRoot).to.be.a("Object");
  });
});
