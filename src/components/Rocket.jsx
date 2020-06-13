import React from "react";
import rocket_img from "./images/rocket.svg";
import { Link } from "react-router-dom";
function Rocket(props) {
  console.log(props);
  return (
    <div className="col-md-4">
      <div className="rocket-card text-center">
        <div className="rocket-static-img">
          <img src={rocket_img} alt="image" />
        </div>
        <div className="rocket-static-cnt">
          <h2>{props.rocketInfo.rocket_name}</h2>
          <p>{strExcerpt(props.rocketInfo.description)}</p>
          <Link to="/rockets">Know More</Link>
        </div>
      </div>
    </div>
  );
}

function strExcerpt(str) {
  return str.length > 90 ? str.substring(0, 87) + "..." : str;
}

export default Rocket;
