import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import pr2 from "../img/pr2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front end developper. I create responsive secure website
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img alt="img 1" src={pr2} className="img" />
          </div>
          <div className="img-stack bottom">
            <img alt="img 2" src={pr2} className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
