import React, { Component } from "react";

import "./Three.scss";

class Three extends Component {
  state = {
    options: [
      { id: 0, name: "Alcohol-Free", att: "alcohol-free", selected: false },
      { id: 1, name: "Celery-Free", att: "celery-free", selected: false },
      {
        id: 2,
        name: "Crustacean-Free",
        att: "crustacean-free",
        selected: false
      },
      { id: 3, name: "Dairy-Free", att: "dairy-free", selected: false },
      { id: 4, name: "Eggs-Free", att: "egg-free", selected: false },
      { id: 5, name: "Fish-Free", att: "fish-free", selected: false },
      { id: 6, name: "Gluten-Free", att: "gluten-free", selected: false },
      { id: 7, name: "Keto-Free", att: "keto-friendly", selected: false },
      {
        id: 8,
        name: "Kidney-Friendly",
        att: "kidney-friendly",
        selected: false
      },
      { id: 9, name: "Kosher", att: "kosher", selected: false },
      { id: 10, name: "Low Potassium", att: "low-potassium", selected: false },
      { id: 11, name: "Lupine-Friendly", att: "lupine-free", selected: false },
      { id: 12, name: "Mustard-Free", att: "mustard-free", selected: false },
      { id: 13, name: "No Oil", att: "No-oil-added", selected: false },
      { id: 14, name: "Low Sugar", att: "low-sugar", selected: false },
      { id: 15, name: "Paleo", att: "paleo", selected: false },
      { id: 16, name: "No Peanuts", att: "peanuts", selected: false },
      { id: 17, name: "Pescatarian", att: "pescatarian", selected: false },
      { id: 18, name: "Pork-Free", att: "pork-free", selected: false },
      { id: 19, name: "Sesame-free", att: "sesame-free", selected: false },
      { id: 20, name: "No Soy", att: "soy-free", selected: false },
      {
        id: 21,
        name: "Sugar-Conscious",
        att: "sugar-conscious",
        selected: false
      },
      { id: 22, name: "No Tree Nuts", att: "tree-nut-free", selected: false },
      { id: 23, name: "Vegan", att: "vegan", selected: false },
      { id: 24, name: "Vegetarian", att: "vegetarian", selected: false },
      { id: 25, name: "Wheat-Free", att: "wheat-free", selected: false },
      { id: 25, name: "None", att: "none", selected: false }
    ]
  };
  render() {
    const { options } = this.state;
    const optionMap = options.map(res => {
      return (
        <div className={`${res.att} option`} key={res.id}>
          <h4>{res.name}</h4>
        </div>
      );
    });
    return (
      <div className="Three">
        <h1>More Options</h1>

        <div className="optionContainer">{optionMap}</div>
      </div>
    );
  }
}

export default Three;
