import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Two.scss";

class Two extends Component {
  state = {
    diets: [
      { id: 0, name: "Balanced", att: "balanced" },
      { id: 1, name: "High-Fiber", att: "high-fiber" },
      { id: 2, name: "High-Protein", att: "high-protein" },
      { id: 3, name: "Low-Carb", att: "low-carb" },
      { id: 4, name: "Low-Fat", att: "low-fat" },
      { id: 5, name: "Low-Sodium", att: "low-sodium" }
    ]
  };
  render() {
    const { diets } = this.state;
    const { type, advanced, onType } = this.props;
    const mapDiets = diets.map(res => {
      return (
        // <Link to={`/meals/1/${res.att}`} key={res.id}>
        <div className={`${res.att} option  ${res.name} `} onClick={onType}>
          <h4 className={res.att}>{res.name}</h4>
        </div>
        // </Link>
      );
    });
    console.log(type);
    return (
      <div className="Two">
        <h1>Diet Type</h1>
        <div className="optionContainer">{mapDiets}</div>
        <div
          className="optionButtons"
          style={type.length > 1 ? { display: "flex" } : { display: "none" }}
        >
          <h3>
            <Link to={`/meals/1/${type}`}>Search Now</Link>
          </h3>
          <h3 onClick={advanced}>Advanced Search</h3>
        </div>
      </div>
    );
  }
}

export default Two;
