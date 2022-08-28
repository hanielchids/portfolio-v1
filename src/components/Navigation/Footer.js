import React from "react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const FooterContainer = styled.div`
  background-color: rgb(17, 24, 28);

  // @media screen and(max-width: 900px) {
  //   //   max-width: 900px;
  //   width: 100%;
  // }
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;

  // @media screen and(max-width: 900px) {
  //   max-width: 900px;
  //   width: 100%;
  // }
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FooterLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #00ccff;
    transition: 0.3s ease-out;
  }
`;

const FooterLinkExt = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #00ccff;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  dispaly: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    color: #00ccff;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #00ccff;
  }
`;

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me </FooterLinkTitle>
                <FooterLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About Me
                </FooterLink>
                <FooterLink
                  to="tech"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Tech
                </FooterLink>
                <FooterLink
                  to="experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Experience
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems></FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Social </FooterLinkTitle>
                <FooterLinkExt
                  href="//https://www.linkedin.com/in/haniel-chidavose-503168205"
                  target="_blank"
                >
                  LinkedIn
                </FooterLinkExt>
                <FooterLinkExt
                  href="//https://github.com/hanielchids"
                  target="_blank"
                >
                  GitHub
                </FooterLinkExt>
                <FooterLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          {/* SOCIAL MEDIA ICONS */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Haniel
              </SocialLogo>
              <WebsiteRights>
                Haniel &copy; {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//https://www.linkedin.com/in/haniel-chidavose-503168205"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  {" "}
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="//https://github.com/hanielchids"
                  target="_blank"
                  aria-label="GitHub"
                >
                  {" "}
                  <FaGithub />{" "}
                </SocialIconLink>
                <SocialIconLink
                  href="//https://stackoverflow.com/users/13561757/user13561757"
                  target="_blank"
                  aria-label="StackOverflow"
                >
                  {" "}
                  <FaStackOverflow />
                </SocialIconLink>
                <SocialIconLink href="//" target="_blank" aria-label="Google">
                  {" "}
                  <FaGoogle />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
