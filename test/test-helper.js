var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.parentWindow;

global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

module.exports = {
  noop() {return null;},
  getMethods(reactClass) {
    return reactClass.prototype.__reactAutoBindMap
  }
};
