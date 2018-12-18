import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProductListing from './ProductListing';
import Section from './Section';
import { products } from '../data';

function Products() {
  return (
    <Section center bg="#fcfcfc">
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
