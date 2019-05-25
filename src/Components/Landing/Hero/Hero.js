import React from "react";

import "./Hero.scss";
import One from "./One/One";
import Two from "./Two/Two";
import Three from "./Three/Three";

const Hero = props => {
  const { level, onNext, type } = props;

  const numLevel = parseInt(level);

  return (
    <div className="Hero">
      {numLevel === 0 ? (
        <One level={level} onNext={onNext} />
      ) : numLevel === 1 ? (
        <Two level={level} onNext={onNext} type={type} />
      ) : null}
    </div>
  );
};

export default Hero;
