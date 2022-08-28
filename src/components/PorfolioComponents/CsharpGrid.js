import React from "react";
import styled from "styled-components";
import image from "../../resources/images/Health.png";
import image2 from "../../resources/images/Coffeeshop.png";
import image3 from "../../resources/images/bee.png";
import image4 from "../../resources/images/afri.png";
import { VideoBg } from "../Heroes/HeroStyles/VideoElements";
import video2 from "../../resources/videos/video4.mp4";
import health from "../../resources/videos/health.mp4";
import bee from "../../resources/videos/bee.mp4";
import afri from "../../resources/videos/afri.mp4";
import events from "../../resources/videos/events.mp4";
import coffee from "../../resources/videos/coffee.mp4";
import port from "../../resources/videos/port.mp4";

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  text-align: center;
  width: 30%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const PortfolioItems = styled.div`
  padding: 10px;
  flex: 20%;
  margin: 1%;

  @media screen and (max-width: 800px) {
    flex: 100%;
  }
`;
const PortfolioCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.5);
  padding: 1px;
  text-align: center;
  background-color: #f1f1f1;

  &:hover {
    opacity: 1;
  }
`;

const PolaroidImg = styled.img`
  width: 100%;
`;
const PolaroidText = styled.p`
  color: rgb(17, 24, 28);
`;

// const PolaroidOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
//   transition: 0.5s ease;
//   background-color: #00ccff;

//   &:hover {
//     opacity: 1;
//   }
// `;

const ExternalLink = styled.a`
  text-decoration: none;
`;

const CsharpGrid = () => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioItems>
          <PortfolioCard>
            <VideoBg
              playsInline
              autoPlay
              loop
              muted
              src={health}
              type="video/mp4"
              //   style={{ height: "35.83815028901734vh" }}
            />

            <PolaroidText>Car Dealership App</PolaroidText>

            {/* <PolaroidOverlay>
              <ExternalLink href="">Link</ExternalLink>
            </PolaroidOverlay> */}
          </PortfolioCard>
        </PortfolioItems>
      </PortfolioContainer>
    </>
  );
};

export default CsharpGrid;
