import React from "react";

const One = props => {
  const { level, onNext } = props;
  return (
    <div className="One">
      <h1>Your Healthy Lifestyle Begins Here!</h1>

      <h4 onClick={onNext}>Let's Begin</h4>
    </div>
  );
};

export default One;

// import React from "react";

// const One = props => {
//   return(

//   )
// }

// export default One;
