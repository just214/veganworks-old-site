import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { brands } from '../data';
import { Image } from 'cloudinary-react';
import SectionTitle from './SectionTitle';

const Wrapper = styled.div`
  text-align: center;

  margin: 10px;
  padding: 10px;
  min-height: 300px;
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
              <div>
                <Image
                  cloudName="gojutin"
                  height={80}
                  publicId={brand}
                  alt={brand}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Brands;
