import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "redux";
import App from "./components/App";

ReactDom.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
