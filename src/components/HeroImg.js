import "./HeroImg.css";

import React from "react";

import IntroImg from "../img/back.svg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Background" />
      </div>
      <div className="content">
        <h1>portfolio</h1>
        <div className="barre"></div>
        <p>developpeur web / consultant SEO</p>
        <br />
        <br />
        <Link to="/projects" className="btn">
          Projet
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
