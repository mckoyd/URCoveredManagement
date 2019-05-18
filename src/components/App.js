import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Landing } from "./landing/LandingPage";

export const App = () => (
  <div>
    <Route exact path="/" component={Landing} />
  </div>
);

export default withRouter(App);
