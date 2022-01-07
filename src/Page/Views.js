import React from "react";
import Cards from "../commmop/Card";
export default class Viewss extends React.Component {
  state = {
    booleanShows: false,
  };
  changed = () => {
    this.setState((prevState) => {
      return { ...prevState, booleanShows: !prevState.booleanShows };
    });
  };
  render() {
    return (
      <>
        {this.state.booleanShows && <Cards />}
        <button onClick={this.changed}>
          {this.state.booleanShows ? "hide" : "shwo"}
        </button>
      </>
    );
  }
}
