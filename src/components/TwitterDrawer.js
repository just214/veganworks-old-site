import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
// import Sidebar from 'react-sidebar';
import { FaTimes } from 'react-icons/fa';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  padding: 3px 8px;
  z-index: 1000;
  margin: 8px;
  color: lightgray;
`;

function TwitterFeed({ handleClose }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledButton onClick={handleClose}>
        <FaTimes color="lightgray" />
        Close
      </StyledButton>
      <div style={{ margin: '9px' }}>
        <a
          className="twitter-follow-button"
          href="https://twitter.com/VeganWorksHQ"
          data-size="large"
        >
          Follow @VeganWorksHQ
        </a>
      </div>
      <div>
        <a
          className="twitter-timeline"
          data-width="320"
          data-theme="dark"
          href="https://twitter.com/VeganWorksHQ?ref_src=twsrc%5Etfw"
        >
          Tweets by VeganWorksHQ
        </a>
      </div>
    </div>
  );
}

function TwitterDrawer({ isOpen, handleClose }) {
  return (
    <Menu
      right
      isOpen={isOpen}
      style={{
        height: 'calc(100% - 30px)',
        overflowY: 'scroll',
      }}
    >
      {/* <TwitterDrawer isOpen={isOpen} /> */}
      <Menu
        outerContainerId={'outer-container'}
        pageWrapId={'page-wrap'}
        right
        isOpen={isOpen}
        style={{
          overflowY: 'scroll',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <StyledButton onClick={() => setIsOpen(false)}>
            <FaTimes color="lightgray" />
            Close
          </StyledButton>
          <div style={{ margin: '9px' }}>
            <a
              className="twitter-follow-button"
              href="https://twitter.com/VeganWorksHQ"
              data-size="large"
            >
              Follow @VeganWorksHQ
            </a>
          </div>
          <div>
            <a
              className="twitter-timeline"
              data-width="320"
              data-theme="dark"
              href="https://twitter.com/VeganWorksHQ?ref_src=twsrc%5Etfw"
            >
              Tweets by VeganWorksHQ
            </a>
          </div>
        </div>
      </Menu>
      <TwitterFeed handleClose={handleClose} />
    </Menu>
  );
}

export default TwitterDrawer;
