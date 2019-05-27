import React, { Component } from "react";

import "./Pagination.scss";

class Pagination extends Component {
  state = {
    page: 1
  };

  onNextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  onPrevPage = () => {
    this.setState(
      this.state.page !== 1
        ? { page: this.state.page - 1 }
        : { page: this.state.page - 0 }
    );
  };
  render() {
    const { page } = this.state;
    return (
      <div className="Pagination">
        <div className="btn">
          <h4 onClick={this.onPrevPage}>{"<"}</h4>
        </div>
        <div className="btn num">
          <h3>{page}</h3>
        </div>
        <div className="btn">
          <h4 onClick={this.onNextPage}>{">"}</h4>
        </div>
      </div>
    );
  }
}

export default Pagination;
