import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { brands } from '../data';

import { Image } from 'cloudinary-react';

const Wrapper = styled.div`
  text-align: center;
  padding: 10px;
  min-height: 300px;
  background: #d3cce3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
                <Image cloudName="gojutin" height={80} publicId={brand} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Brands;
