import React, { Component } from "react";

import Hero from "./Hero/Hero";

class Landing extends Component {
  state = {
    level: 0,
    type: ""
  };

  onNextLevel = () => {
    this.setState({ level: this.state.level + 1 });
  };

  onType = e => {
    this.setState({ type: e.target.classList[0], level: this.state.level + 1 });
  };

  render() {
    const { level } = this.state;

    console.log(this.state);

    return (
      <div className="Landing">
        <Hero level={level} onNext={this.onNextLevel} type={this.onType} />
      </div>
    );
  }
}

export default Landing;
