import styled from "styled-components";

export const TextContainer = styled.div`
  color: #fff;
  background: rgb(17, 24, 28);

  @media screen and (max-width: 900px) {
    padding: 100px 0;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  z-index: 5;
  height: 500px;
  // width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: flex-start;
`;
export const ContactWrapper = styled.div`
  // display: flex;
  z-index: 5;
  padding-top: 20px;
  height: 700px;
  // width: 100%;
  max-width: 1100px;
  // margin-right: auto;
  margin-left: auto;
  // padding: 0 24px;
  padding-left: 10%;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

export const TechWrapper = styled.div`
  display: grid;
  z-index: 5;
  height: 500px;
  // width: 100%;
  // max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`;

export const TextRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const TechRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2 col2" "col1 col1";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const WordWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    max-width: 80%;
  }
`;

export const TopLine = styled.p`
  color: lightblue;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottm: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #f7f8fa;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 50%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
