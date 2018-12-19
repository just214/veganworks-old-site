import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const StyledFooter = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-family: 'Alice', sans-serif;
  padding: 4px 20px;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Col xs={12} sm={12} md={4} lg={4}>
            <ContactInfoWrapper>
              <FaPhone size="20" color="lightblue" />
              &nbsp;&nbsp;<a href="tel:6314030362">631-403-0362</a>
            </ContactInfoWrapper>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
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
          </Col>
          <Col style={{ textAlign: 'center' }} xs={12} sm={12} md={4} lg={4}>
            <p>VeganWorks, Inc. 2017-2018</p>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
