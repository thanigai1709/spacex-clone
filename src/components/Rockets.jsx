import React, { Component } from "react";
import Header from "./Header";
import PageLoader from "./PageLoader";
class Rockets extends Component {
  state = {
    isLoading: false
  };
  render() {
    return (
      <div>
        <Header />
        <div className="rockets-pg-hero">
          <div className="rockets-hero-ottr">
            <div className="rockets-hero-inner">
              <div className="rockets-hero-cnt text-center">
                <h1>SpaceX Rockets</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rockers-pg-content-area content-area">
          <div className="container-fluid">
            <div className="row"></div>
          </div>
          <PageLoader loading={this.state.isLoading} />
        </div>
      </div>
    );
  }
}

export default Rockets;
