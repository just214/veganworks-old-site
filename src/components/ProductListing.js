import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaAmazon } from 'react-icons/fa';

const ShopButton = styled.button`
  background-color: white;
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
  :hover {
    background-color: #f3f3f3;
  }
`;

const Tag = styled.span`
  padding: 3px 6px;
  border-radius: 20px;
  margin: 5px;
  color: ${props => props.color || '#333'};
  background-color: ${props => props.bg || 'lightblue'};
  font-size: 12px;
`;

function ProductListing({ item }) {
  return (
    <div className="alice">
      <img
        src={item.photoUrl}
        alt={item.title}
        style={{ maxHeight: '60vh', maxWidth: '100%' }}
      />

      <h2 style={{ margin: '5px' }}>
        <b>{item.title}</b>
      </h2>

      <div>
        <small>{item.availability}</small>
      </div>

      {item.salePrice ? (
        <h2 style={{ margin: '5px' }}>
          <span style={{ textDecoration: 'line-through' }}>{item.price}</span>{' '}
          <span style={{ color: 'green' }}>{item.salePrice} </span>
          <Tag bg="green" color="white">
            Sale
          </Tag>
        </h2>
      ) : (
        <h2 style={{ margin: '5px' }}>{item.price}</h2>
      )}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {item.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div>
        <ShopButton>
          <a
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={item.title}
          >
            <FaAmazon color="#333" size="20" /> &nbsp;Shop Now
          </a>
        </ShopButton>
      </div>
    </div>
  );
}

ProductListing.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductListing;
