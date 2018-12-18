import React from 'react';
import styled from 'styled-components';
import { fadeIn, fadeOut } from 'react-animations';
import AnimatedItem from './AnimatedItem';

const Wrapper = styled.div`
  background: url('https://res.cloudinary.com/gojutin/image/upload/f_auto/v1545165691/veganworks/community-solidarity-collage.png')
    no-repeat center center;

  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    background-size: cover;
    background-attachment: fixed;
  }
`;

const Card = styled.div`
  padding: 10px;
  min-height: 270px;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

function Community() {
  return (
    <div>
      <Wrapper>
        <AnimatedItem
          topOffset="200px"
          bottomOffset="200px"
          enterAnimation={fadeIn}
          leaveAnimation={fadeOut}
        >
          <Card>
            <h3 style={{ marginBottom: '5px' }} className="alice">
              For every snack box sold, we donate 25 cents to
            </h3>
            <a
              href="https://communitysolidarity.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="70%"
                src="https://res.cloudinary.com/gojutin/image/upload/f_auto/v1545156921/veganworks/community-solidarity-logo.png"
                alt="Community Solidarity- Americas largest Vegetarian hunger relief program."
              />
            </a>
            <div style={{ margin: '0 auto' }}>
              <div>
                <small>Learn more at</small>
              </div>
              <p>
                <a
                  style={{ color: 'lightblue' }}
                  href="http://communitysolidarity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.communitysolidarity.org
                </a>
              </p>
            </div>
          </Card>
        </AnimatedItem>
      </Wrapper>
    </div>
  );
}

export default Community;
