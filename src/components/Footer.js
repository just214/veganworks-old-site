import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  font-family: 'Alice', sans-serif;
  padding: 0px 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <small>info@veganworks.com</small>
      <small>VeganWorks, Inc. 2018</small>
      <small>631-403-0362</small>
    </StyledFooter>
  );
}

export default Footer;
