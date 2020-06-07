import React, { Component } from "react";
import Footage from "./video/spacex_footage.mp4";
function Home() {
  return (
    <div className="home-comtainer">
      <div className="full-screen-video-wrp">
        <video src={Footage} autoPlay muted loop></video>
      </div>
      <div className="home-ovrly">
        <div className="home-scrn-content-ottr text-center">
          <div className="home-scrn-content-inner">
            <div className="home-scrn-content">
              <h1>CREW DRAGON</h1>
              <p>
                The Dragon spacecraft is capable of carrying up to 7 passengers
                to and from Earth orbit, and beyond. It is the only spacecraft
                currently flying that is capable of returning significant
                amounts of cargo to Earth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
