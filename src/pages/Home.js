import React from "react";
import { Parallax } from "react-parallax";
import Timeline from "./Timeline";
import VideoHero from "../components/VideoHero";
import TextHero from "../components/TextHero";
import TechHero from "../components/TechHero";

const image =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const inlineStyle = {};

const Home = () => {
  return (
    <div style={{ backgroundColor: "rgb(18,24,28)" }}>
      <Parallax>
        <VideoHero />
      </Parallax>
      <div style={{ height: "100vh" }}>
        <TextHero />
        <TechHero />
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
