import React, { Component } from "react";
import ArrowUp from "./images/icon-arrow-down.svg";
import ArrowDown from "./images/icon-arrow-up.svg";
import $ from "jquery";
const updateComponent = (OriginalComponent) => {
  class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        icon: ArrowDown,
        down: true,
      };
    }

    control = (name, type) => {
      if (type === "sidebar") $(name).slideToggle(500);
      if (this.state.down) {
        this.setState({
          icon: ArrowDown,
          down: false,
        });
      } else {
        this.setState({
          icon: ArrowUp,
          down: true,
        });
      }
    };

    render() {
      return (
        <OriginalComponent icon={this.state.icon} control={this.control} />
      );
    }
  }
  return newComponent;
};

export default updateComponent;
