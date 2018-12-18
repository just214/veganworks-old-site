import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-family: 'Alice', sans-serif;
  padding: 0px 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>info@veganworks.com</p>
      <p>VeganWorks, Inc. 2018</p>
      <p>631-403-0362</p>
    </StyledFooter>
  );
}

export default Footer;
