import React from "react";
import "../../App.css";
import { Button } from "../../component/Button/Button";
import { Link } from "react-router-dom";
import "./FirstView.css";
import FW from "../../images/FW_move.mp4";

function FirstView() {
  return (
    <div className="hero-container">
      <video src={FW} autoPlay loop muted />
      <h1>For-minutes</h1>
      <p>AI Minutes Service</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to="/post">GET STARTED</Link>
        </Button>
      </div>
    </div>
  );
}

export default FirstView;
