import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import ProductListing from './ProductListing';
import SectionTitle from './SectionTitle';
import { products } from '../data';

const Section = styled.div`
  padding: 10px;
  max-width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #fbfbfb,
    #f8f8f8,
    #f4f4f4,
    #f1f1f1
  );
`;

Section.propTypes = {
  bg: PropTypes.string,
  center: PropTypes.bool,
  full: PropTypes.bool,
};

function Products() {
  return (
    <Section>
      <SectionTitle>Our Snack Boxes</SectionTitle>
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
