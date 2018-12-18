import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';

function AnimatedItem(props) {
  const enterAnimation = keyframes`${props.enterAnimation}`;
  const leaveAnimation = keyframes`${props.leaveAnimation}`;

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
  const [animationType, setAnimationType] = useState('');

  function handleEnter() {
    setAnimationType('enter');
  }

  function handleLeave() {
    setAnimationType('leave');
  }
  return (
    <Waypoint
      onEnter={handleEnter}
      onLeave={handleLeave}
      topOffset={props.topOffset}
      bottomOffset={props.bottomOffset}
    >
      <div>
        <AnimatedWrapper type={animationType}>{props.children}</AnimatedWrapper>
      </div>
    </Waypoint>
  );
}

AnimatedItem.propTypes = {
  topOffset: PropTypes.string,
  enterAnimation: PropTypes.object.isRequired,
  leaveAnimation: PropTypes.object.isRequired,
};

AnimatedItem.defaultProps = {
  topOffset: '0px',
  bottomOffset: '0px',
};

export default AnimatedItem;
