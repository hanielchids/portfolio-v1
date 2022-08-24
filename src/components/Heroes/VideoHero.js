import React from "react";
import TypewriterText from "../../pages/TypewriterText";
import {
  VideoContainer,
  VideoHeroBg,
  VideoBg,
} from "./HeroStyles/VideoElements";
import video1 from "../../resources/videos/video (1).mp4";

const VideoHero = () => {
  return (
    <VideoContainer>
      <VideoHeroBg>
        <VideoBg
          playsInline
          autoPlay
          loop
          muted
          src={video1}
          type="video/mp4"
        />
        <div style={{ height: 500, zIndex: 3, display: "flex" }}>
          <TypewriterText />
        </div>
      </VideoHeroBg>
    </VideoContainer>
  );
};

export default VideoHero;
