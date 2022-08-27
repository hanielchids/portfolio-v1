import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Timeline from "./Timeline";
import VideoHero from "../components/Heroes/VideoHero";
import TextHero from "../components/Heroes/TextHero";
import TechHero from "../components/Heroes/TechHero";
import Sidebar from "../components/Navigation/Sidebar";
import NavigationBar from "../components/Navigation/NavigationBar";

const image =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavigationBar toggle={toggle} />
      <Parallax>
        <VideoHero />
      </Parallax>
      <div style={{ height: "100vh" }}>
        <TextHero />
        <TechHero />
        <Timeline />
      </div>
    </>
  );
};

export default Home;
