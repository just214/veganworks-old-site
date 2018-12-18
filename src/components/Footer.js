import React from 'react';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const StyledFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-family: 'Alice', sans-serif;
  padding: 0px 20px;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <ContactInfoWrapper>
        <FaPhone size="20" color="lightblue" />
        &nbsp;&nbsp;<a href="tel:6314030362">631-403-0362</a>
      </ContactInfoWrapper>
      <ContactInfoWrapper>
        <FaEnvelope size="20" color="lightblue" />
        &nbsp;&nbsp;
        <a
          href="mailto:info@veganworks.com?Subject=Hello%20VeganWorks!"
          target="_top"
        >
          info@veganworks.com
        </a>
      </ContactInfoWrapper>

      <p>VeganWorks, Inc. 2017-2018</p>
    </StyledFooter>
  );
}

export default Footer;
