"use strict";

// styles
require("./app/assets/index");

const AppRoot   = require("./app/components/app-root.js");
const ReactDOM  = require("react-dom");
const React     = require("react");
const $         = require("jquery");
const jQuery    = require("jquery");


$(document).ready(function() {
  require("jquery-ui");
  let appContainer = $("#react-app").get(0);
  ReactDOM.render(
    <AppRoot />,
    appContainer
  );
});
