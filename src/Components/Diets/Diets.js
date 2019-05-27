import React, { Component } from "react";

import axios from "axios";

import { ROOT_URL, APP_ID, API_KEY } from "../../key";

import "./Diets.scss";
import Pagination from "../Pagination/Pagination";

class Diets extends Component {
  state = {
    dishes: null,
    current: 1
  };

  componentDidMount = () => {
    // const { type, page } = this.props.match.params;
    // // this.setState({ dietType: type });
    // const pageNum = parseInt(page);
    // const resultFrom = pageNum === 1 ? 0 : pageNum === 2 ? 21 : null;
    // const resultTo = pageNum === 1 ? 20 : pageNum === 2 ? 41 : null;
    // axios
    //   .get(
    //     `${ROOT_URL}q=all&app_id=${APP_ID}&app_key=${API_KEY}&diet=${type}&from=${resultFrom}&to=${resultTo}`
    //   )
    //   .then(res => this.setState({ dishes: res.data.hits }))
    //   .catch(err => console.log(err));
  };

  click = e => {
    // this.setState({ current: e.target.value });
    console.log(e.target.innerText);
  };

  render() {
    const { type, page } = this.props.match.params;
    const { dishes } = this.state;

    const dishesResults =
      dishes !== null ? (
        dishes.map(res => {
          return (
            <div
              className="dish"
              style={{ backgroundImage: `url(${res.recipe.image})` }}
            >
              <div className="dietInfo">
                <h4>{res.recipe.label}</h4>
                <div className="labels">
                  {res.recipe.healthLabels.map(res => {
                    return (
                      <div className="label">
                        <h6>{res}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Searching</h1>
      );

    console.log(this.state.current);

    const results = 50;

    return (
      <div className="Diets">
        <div className="dietContainer">
          <h1>{type}</h1>

          <div className="dietResults">{dishesResults}</div>
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Diets;
