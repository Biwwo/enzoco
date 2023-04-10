import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Card />
      <Footer />
    </div>
  );
};

export default Projects;
