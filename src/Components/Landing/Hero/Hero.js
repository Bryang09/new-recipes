import React from "react";

import "./Hero.scss";

const Hero = props => {
  return (
    <div className="Hero">
      <div className="text">
        <h1>
          {" "}
          <q>Let food be thy medicine and medicine be thy foods</q>
        </h1>
        <h4>- Hippocrates</h4>
      </div>
    </div>
  );
};

export default Hero;
