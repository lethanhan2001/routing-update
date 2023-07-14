import React from "react";
import AboutMain from "../components/about/AboutMain";
import ProfessHome from "../components/home/ProfessHome";
import Business from "../components/about/Business";
import VisionandMission from "../components/about/VisionandMission";
import Client from "../components/about/Client";

const About = () => {
  return (
    <>
      <AboutMain />
      <ProfessHome title="30px" />
      <Business />
      <VisionandMission />
      <Client />
    </>
  );
};

export default About;
