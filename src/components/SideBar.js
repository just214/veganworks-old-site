import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from 'react-sidebar';
import tweet from '../tweet.svg';
import { FaTimes } from 'react-icons/fa';

const Wrapper = styled.div`
  background-color: #292f33;
  max-width: 320px;
`;

const FollowWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-top: 10px;
  cursor: pointer;
  float: right;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: lightgray;
  font-size: 16px;
  margin: 8px;
  padding: 5px;
  font-weight: bold;
`;

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(open => !open);
  }
  return (
    <Sidebar
      overlayId="overlay"
      pullRight
      open={isOpen}
      onSetOpen={toggle}
      styles={{
        sidebar: { background: '#333', width: '320' },
        content: {
          // prevents unwanted padding to the right from default 'scroll'
          overflowY: 'auto',
        },
      }}
      sidebar={
        <Wrapper>
          <div>
            <CloseButton onClick={toggle}>
              <FaTimes /> close
            </CloseButton>
          </div>
          <FollowWrapper>
            <a
              className="twitter-follow-button"
              href="https://twitter.com/VeganWorksHQ"
              data-size="large"
            >
              Follow @VeganWorksHQ
            </a>
          </FollowWrapper>
          <a
            className="twitter-timeline"
            data-width="320"
            data-theme="dark"
            href="https://twitter.com/VeganWorksHQ?ref_src=twsrc%5Etfw"
          >
            Tweets by VeganWorksHQ
          </a>
        </Wrapper>
      }
    >
      <Button onClick={toggle}>
        <img src={tweet} height={50} alt="Show Tweets Icon" />
      </Button>
    </Sidebar>
  );
}

export default SideBar;
