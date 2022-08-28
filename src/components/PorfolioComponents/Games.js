import React from "react";
import styled from "styled-components";
import { VideoBg } from "../Heroes/HeroStyles/VideoElements";
import piano from "../../resources/videos/piano.mp4";

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

const Games = () => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioItems>
          <ExternalLink
            href="//https://github.com/hanielchids/TypeScript-Piano"
            target="_blank"
          >
            <PortfolioCard>
              <VideoBg
                playsInline
                autoPlay
                loop
                muted
                src={piano}
                type="video/mp4"
              />

              <PolaroidText>Piano App</PolaroidText>
              <PolaroidText style={{ fontSize: "8px" }}>TS, React</PolaroidText>
            </PortfolioCard>
          </ExternalLink>
        </PortfolioItems>
      </PortfolioContainer>
    </>
  );
};

export default Games;
