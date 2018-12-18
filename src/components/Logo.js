import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';
import { zoomIn, zoomOut } from 'react-animations';
import { FaTwitter, FaAmazon, FaFacebook } from 'react-icons/fa';

const LogoSection = styled.div`
  display: flex;
  width: 100%;
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

const enterAnimation = keyframes`${zoomIn}`;
const leaveAnimation = keyframes`${zoomOut}`;

const AnimatedWrapper = styled.div`
  display: ${props => (!props.type ? 'none' : 'block')};
  animation: 0.8s
    ${props => {
      switch (props.type) {
        case 'enter':
          return enterAnimation;
        case 'leave':
          return leaveAnimation;
        default:
          return 'none';
      }
    }}
    forwards;
`;

const Image = styled.img`
  max-width: 90%;
  width: 600px;
`;

const Slogan = styled.h2`
  text-align: center;
  font-size: 36px;
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
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState('');

  function handleEnter() {
    console.log('Enter');
    setAnimationType('enter');
    setShowAnimation(true);
  }

  function handleLeave() {
    console.log('LEAVE');
    setAnimationType('leave');
    setShowAnimation(false);
  }

  return (
    <LogoSection bg="https://res.cloudinary.com/gojutin/image/upload/v1544980240/veganworks/veganworks_display.png">
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} topOffset="200px">
        <div>
          <AnimatedWrapper show={showAnimation} type={animationType}>
            <Image
              src="https://res.cloudinary.com/gojutin/image/upload/v1544936219/veganworks-logo.png"
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
          </AnimatedWrapper>
        </div>
      </Waypoint>
    </LogoSection>
  );
}

export default Logo;
