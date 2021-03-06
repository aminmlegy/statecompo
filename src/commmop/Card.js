import imgg from "../new-year-02.png";
import React from "react";
export default class Cards extends React.Component {
  state = {
    imgSrc: imgg,
    fullName: "Amin Elmlegy",
    bio: "Front End",
    profession: "Developer",
    count: 0,
    ifffff: null,
  };
  componentDidMount() {
    let contr = setInterval(() => {
      this.setState((preve) => {
        return { ...preve, count: preve.count + 1 };
      });
    }, 1000);
    this.setState((prevv) => {
      return { ...prevv, ifffff: contr };
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.ifffff);
  }
  render() {
    return (
      <div className='cont'>
        <img src={this.state.imgSrc} alt='img person' />
        <h3>{this.state.fullName}</h3>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
