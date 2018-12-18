import React from 'react';
import styled from 'styled-components';
import { zoomIn, zoomOut } from 'react-animations';
import { FaTwitter, FaAmazon, FaFacebook } from 'react-icons/fa';
import AnimatedItem from '../components/AnimatedItem';

const LogoSection = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  background-color: #333;
  justify-content: center;
  align-items: center;
  background-image: ${props => `url(${props.bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Image = styled.img`
  max-width: 100%;
  width: 600px;
`;

const Slogan = styled.h2`
  text-align: center;
  font-size: 36px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  margin: 5px 15px;
  text-decoration: none;
`;

function Logo() {
  return (
    <LogoSection bg="https://res.cloudinary.com/gojutin/image/upload/v1545162899/veganworks/veganworks_display.png">
      <AnimatedItem
        topOffset="200px"
        enterAnimation={zoomIn}
        leaveAnimation={zoomOut}
      >
        <Image
          src="https://res.cloudinary.com/gojutin/image/upload/v1545163193/veganworks/veganworks-logo.png"
          alt="veganworks logo"
        />
        <Slogan className="cursive white">
          We make delicious vegan snack boxes
        </Slogan>
        <SocialWrapper>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://amzn.to/2QFidX3"
          >
            <FaAmazon color="lightblue" size="50" />
          </SocialLink>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="http://bit.ly/2PLgvOe"
          >
            <FaTwitter className="social" color="lightblue" size="50" />
          </SocialLink>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/veganworkshq"
          >
            <FaFacebook color="lightblue" size="45" />
          </SocialLink>
        </SocialWrapper>
      </AnimatedItem>
    </LogoSection>
  );
}

export default Logo;
