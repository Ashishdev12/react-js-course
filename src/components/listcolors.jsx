import React, { Component } from "react";

class ListColors extends Component {
  state = {
    title: "ListColors Component",
    allColors: ["RED", "BLUE", "GREEN"],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="text-success">{this.state.title}</h2>
          <ul className="list-group">
            {/* {this.state.allColors.map((eachColor) => {
              return (
                <li className="list-group-item" key={eachColor}>
                  {eachColor}
                </li>
              );
            })} */}
            {this.renderAllColors()}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  renderAllColors(){
     return this.state.allColors.map((eachColor) => (
        <li className="list-group-item" key={eachColor}>
          {eachColor}
        </li>
     ))
  }
}

export default ListColors;
