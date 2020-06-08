import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidenav extends Component {
  state = {
    isNavActive: false
  };

  render() {
    return (
      <div className="side-nav-wrp">
        <span onClick={() => this.setState({ isNavActive: true })}>
          <i className="fas fa-bars"></i>
        </span>
        <div
          className={
            this.state.isNavActive
              ? "off-can-nav-wrp active"
              : "off-can-nav-wrp"
          }
        >
          <div className="text-left">
            <span
              className="close-menu"
              onClick={() => this.setState({ isNavActive: false })}
            >
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
          <div className="off-can-mid-align">
            <div className="off-can-menu">
              <div className="menu-items">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>
                  <Link to="/rockets">Rockets</Link>
                </span>
                <span>Menu</span>
                <span>Menu</span>
                <span>Menu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidenav;
