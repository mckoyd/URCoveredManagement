import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";

import "./styles/index.css";

WebFont.load({
  google: {
    families: ["Montserrat"]
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
