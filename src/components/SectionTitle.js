import React from 'react';
import styled from 'styled-components';
import { fadeIn, fadeOut } from 'react-animations';
import AnimatedItem from './AnimatedItem';

const StyledSectionTitle = styled.h1`
  font-family: 'Satisfy', cursive;
  @media screen and (min-width: 768px) {
    font-size: 3em;
  }
`;

function SectionTitle(props) {
  return (
    <AnimatedItem
      topOffset="50px"
      bottomOffset="100px"
      enterAnimation={fadeIn}
      leaveAnimation={fadeOut}
    >
      <StyledSectionTitle>{props.children}</StyledSectionTitle>
    </AnimatedItem>
  );
}

export default SectionTitle;
