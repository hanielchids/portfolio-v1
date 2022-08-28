import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Timeline from "./Timeline";
import VideoHero from "../components/Heroes/VideoHero";
import TextHero from "../components/Heroes/TextHero";
import TechHero from "../components/Heroes/TechHero";
import Sidebar from "../components/Navigation/Sidebar";
import NavigationBar from "../components/Navigation/NavigationBar";
import {
  textObj,
  techObj,
  timelineObj,
  portfolioObj,
  contactObj,
} from "../components/Data";
import Footer from "../components/Navigation/Footer";
import PortfolioTabs from "./PortfolioTabs";
import { Heading } from "../components/Heroes/HeroStyles/TextHeroElements";
import Contact from "./Contact";
import { ToastProvider } from "react-toast-notifications";

const image =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout="2000"
      placement="top-right"
    >
      <div style={{ background: "rgb(17,24,28" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavigationBar toggle={toggle} />
        <Parallax>
          <VideoHero />
        </Parallax>
        {/* <div style={{ height: "100vh" }}> */}
        <TextHero {...textObj} />
        <TechHero {...techObj} />
        <div style={{ backgroundColor: "#fff", marginTop: "15px" }}>
          <div style={{ backgroundColor: "#fff", height: "20px" }}></div>
          <Timeline {...timelineObj} />
        </div>

        <PortfolioTabs {...portfolioObj} />

        <div style={{ backgroundColor: "#fff" }}>
          <Contact {...contactObj} />
        </div>

        {/* </div> */}
        <Footer />
      </div>
    </ToastProvider>
  );
};

export default Home;
