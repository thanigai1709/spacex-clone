import React, { Component } from "react";
import Header from "./Header";
import PageLoader from "./PageLoader";
import Axios from "axios";
import Rocket from "./Rocket";
class Rockets extends Component {
  state = {
    isLoading: true,
    rocketsData: ""
  };

  componentDidMount() {
    Axios.get("https://api.spacexdata.com/v3/rockets").then(resp => {
      this.setState({
        isLoading: false,
        rocketsData: resp.data
      });
    });
  }

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
          {this.state.isLoading ? (
            <PageLoader loading={this.state.isLoading} />
          ) : (
            <div className="container">
              <div className="row">
                {this.state.rocketsData.map(rocket => {
                  return <Rocket key={rocket.id} rocketInfo={rocket} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Rockets;
