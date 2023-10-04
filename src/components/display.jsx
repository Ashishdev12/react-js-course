import React, { Component } from "react";

class Display extends Component {
  state = {
    title: 'Display Component',
    imageUrl: 'https://picsum.photos/800/800'
  };
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <img
          src={this.state.imageUrl}
          alt="display"
        ></img>
        <h2>Hello Sindhu!!</h2>
      </div>
    );
  }
}

export default Display;
