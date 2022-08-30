import React, { Component } from "react";
import MobliePic from "./images/image-hero-mobile.png";
import DesktopPic from "./images/image-hero-desktop.png";
import "./styles/collection.css";
import database from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import client_maker from "./images/client-maker.svg";
import client_meet from "./images/client-meet.svg";
class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: MobliePic,
    };
  }

  handleResize = () => {
    const width = window.innerWidth;
    let image;
    if (width > 800) image = DesktopPic;
    else image = MobliePic;
    this.setState({
      currentPic: image,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="grid-row-container">
          <div className="left-grid-container">
            <img src={this.state.currentPic} alt="" />
          </div>
          <div className="right-grid-container">
            <p id="heading">Make Remote Work</p>
            <p id="content">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button type="button" className="btn btn-dark btn-lg">
              Learn more
            </button>
            <br />
            <div className="items-container">
              <img src={database} alt="" />
              <img src={audiophile} alt="" />
              <img src={client_meet} alt="" />
              <img src={client_maker} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
