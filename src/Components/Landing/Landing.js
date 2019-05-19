import React, { Component } from "react";

import Hero from "./Hero/Hero";

class Landing extends Component {
  state = {
    level: 0
  };

  onNextLevel = () => {
    this.setState({ level: this.state.level + 1 });
  };
  render() {
    const { level } = this.state;

    return (
      <div className="Landing">
        <Hero level={level} onNext={this.onNextLevel} />
      </div>
    );
  }
}

export default Landing;
