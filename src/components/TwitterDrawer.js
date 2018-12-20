import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
// import Sidebar from 'react-sidebar';
import { FaTimes } from 'react-icons/fa';
import tweet from '../tweet.svg';

const ImgButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0px 0px 10px;
`;

const ImgButton = styled.button`
  border: none;
  background: transparent;
  height: 50px;
  cursor: pointer;
  z-index: 3000;
`;

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

function TwitterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <Sidebar
        sidebar={<TwitterFeed handleClose={() => setIsOpen(open => !open)} />}
        pullRight
        open={isOpen}
        onSetOpen={() => setIsOpen(true)}
        styles={{
          root: {
            height: '100vh',
          },
          sidebar: {
            backgroundColor: '#292F33',
            overflow: 'scroll',
          },
          overlay: { display: 'none' },
        }}
      > */}
      <ImgButtonWrapper>
        <ImgButton onClick={() => setIsOpen(open => !open)}>
          <img height={50} src={tweet} alt="Show Tweet Button" />
        </ImgButton>
      </ImgButtonWrapper>
      <Menu
        isOpen={isOpen}
        style={{
          height: 'calc(100% - 30px)',
          overflowY: 'scroll',
        }}
      >
        <TwitterFeed handleClose={() => setIsOpen(open => !open)} />
      </Menu>
      {/* </Sidebar> */}
    </div>
  );
}

export default TwitterDrawer;
