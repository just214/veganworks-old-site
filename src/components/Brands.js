import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { brands } from '../data';

import { Image } from 'cloudinary-react';

const Wrapper = styled.div`
  text-align: center;
  border: 6px solid #444;
  border-radius: 30px;
  margin: 10px;
  padding: 10px;
  min-height: 300px;
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
`;

function Brands() {
  return (
    <Wrapper>
      <Container style={{ padding: '15px' }}>
        <h1 className="cursive">Bringing you our favorite brands</h1>
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
