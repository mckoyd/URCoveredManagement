import React from "react";

import "../../styles/lnavigation.css";

const urcBlueLogo = require("../../assets/images/urcLogoBlue.png");

export const LNavigation = () => (
  <nav className="nav">
    <img className="logo" src={urcBlueLogo} alt="U R Covered Logo" />
    <hgroup className="title">
      <h1 className="main-title">
        U <span>R</span> Covered
      </h1>
      <h2 className="sub-title">
        Management <span>G</span>roup
      </h2>
    </hgroup>
  </nav>
);
