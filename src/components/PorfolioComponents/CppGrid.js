import React from "react";
import styled from "styled-components";
import image from "../../resources/images/Management.png";
import image2 from "../../resources/images/Login.png";
import Calculator from "../../resources/images/Calculator.png";

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  text-align: center;
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

const CppGrid = () => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioItems>
          <ExternalLink
            href="//https://github.com/hanielchids/Basic-C-calculator-with-functions"
            target="_blank"
          >
            <PortfolioCard>
              <PolaroidImg src={Calculator} alt="calc" />

              <PolaroidText>Calculator App</PolaroidText>
            </PortfolioCard>
          </ExternalLink>
        </PortfolioItems>

        <PortfolioItems>
          <ExternalLink
            href="//https://github.com/hanielchids/CPPLoginSystem"
            target="_blank"
          >
            <PortfolioCard>
              <PolaroidImg src={image2} alt="login" />
              <PolaroidText>Login System</PolaroidText>
            </PortfolioCard>
          </ExternalLink>
        </PortfolioItems>

        <PortfolioItems>
          <ExternalLink
            href="//https://github.com/hanielchids/Student-Report-Management-System"
            target="_blank"
          >
            <PortfolioCard>
              <PolaroidImg src={image} alt="management" />

              <PolaroidText>Report Management</PolaroidText>
            </PortfolioCard>
          </ExternalLink>
        </PortfolioItems>
      </PortfolioContainer>
    </>
  );
};

export default CppGrid;
