import React from "react";
import {
  TextContainer,
  TextWrapper,
  TextRow,
  Column1,
  WordWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from "./HeroStyles/TextHeroElements";
import image from "../../resources/images/coder.svg";

const TextHero = ({ id, topline }) => {
  return (
    <>
      <TextContainer id={id}>
        <TextWrapper>
          <TextRow>
            <Column1>
              <WordWrapper>
                <TopLine>{topline}</TopLine>
                <Heading>Get To Know Me</Heading>
                <Subtitle>
                  I love building cool things. I'm a software engineer , with a
                  keen interest in Object oriented programming, functional
                  programming and devOps. Keep scrolling and have a look at what
                  I've worked with, what i'm working with and what i want to
                  work with one day.
                </Subtitle>
              </WordWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt="cool picture" />
              </ImgWrap>
            </Column2>
          </TextRow>
        </TextWrapper>
      </TextContainer>
    </>
  );
};

export default TextHero;
