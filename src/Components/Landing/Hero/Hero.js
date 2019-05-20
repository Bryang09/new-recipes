import React from "react";

import "./Hero.scss";
import One from "./One/One";
import Two from "./Two/Two";

const Hero = props => {
  const { level, onNext, type } = props;

  const numLevel = parseInt(level);

  return (
    <div className="Hero">
      {numLevel === 0 ? (
        <One level={level} onNext={onNext} />
      ) : (
        <Two level={level} onNext={onNext} type={type} />
      )}
    </div>
  );
};

export default Hero;
