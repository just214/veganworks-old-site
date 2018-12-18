import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaAmazon } from 'react-icons/fa';

const Card = styled.div`
  margin: 5px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`;

const ShopButton = styled.button`
  margin: 15px;
  border-radius: 20px;
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #333;
  a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
  }
`;

const Tag = styled.span`
  padding: 3px 6px;
  border-radius: 20px;
  margin: 5px;
  background-color: lightblue;
  font-size: 12px;
`;

function ProductListing({ item }) {
  return (
    <Card className="alice">
      <img
        src={item.photoUrl}
        alt={item.title}
        style={{ maxHeight: '60vh', maxWidth: '100%' }}
      />
      <h2>
        <b>{item.title}</b>
      </h2>
      <h2>{item.price}</h2>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {item.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div>
        <ShopButton>
          <a href={item.link} rel="noopener noreferrer" target="_blank">
            <FaAmazon size="16" /> &nbsp;Shop Now
          </a>
        </ShopButton>
      </div>
    </Card>
  );
}

ProductListing.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductListing;
