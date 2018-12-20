import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { brands } from '../data';
import { Image } from 'cloudinary-react';
import LazyLoad from 'react-lazyload';
import SectionTitle from './SectionTitle';
import AnimatedItem from './AnimatedItem';
import { pulse } from 'react-animations';

const Wrapper = styled.div`
  text-align: center;
  padding: 10px;
  min-height: 300px;
  background-image: linear-gradient(
    to bottom,
    #f1f1f1,
    #fafaff,
    #f3f6ff,
    #ebf2ff,
    #e1eeff
  );
`;

function Brands() {
  return (
    <Wrapper>
      <Container style={{ padding: '15px' }}>
        <SectionTitle>Bringing you our favorite brands</SectionTitle>
        <Row>
          {brands.map(brand => (
            <Col
              key={brand}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              style={{ marginTop: '30px' }}
            >
              <AnimatedItem enterAnimation={pulse} leaveAnimation={pulse} loop>
                <LazyLoad height={80} offset={100}>
                  <Image
                    cloudName="gojutin"
                    height={80}
                    publicId={brand}
                    alt={brand}
                  />
                </LazyLoad>
              </AnimatedItem>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Brands;
