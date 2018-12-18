import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import ProductListing from './ProductListing';
import { products } from '../data';

const Section = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
`;

Section.propTypes = {
  bg: PropTypes.string,
  center: PropTypes.bool,
  full: PropTypes.bool,
};

function Products() {
  return (
    <Section>
      <h1 className="cursive">Our Snack Boxes</h1>
      <Container style={{ padding: '15px' }}>
        <Row>
          {products.map(item => (
            <Col key={item.title} xs={12} sm={12} md={6} lg={6} xl={6}>
              <ProductListing item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default Products;
