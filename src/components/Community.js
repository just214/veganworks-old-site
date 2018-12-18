import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: url('https://res.cloudinary.com/gojutin/image/upload/v1545063346/veganworks/community_solidarity_collage.png')
    no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 80%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: white;
`;

function Community() {
  return (
    <div>
      <Wrapper>
        <Card>
          <h1 className="cursive">Serving Our Community</h1>
          <h3 style={{ marginBottom: '5px' }}>
            For every snack box sold, we donate 25 cents to
          </h3>
          <a
            href="https://communitysolidarity.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="28%"
              src="https://res.cloudinary.com/gojutin/image/upload/v1545064391/veganworks/community_solidarity_logo.png"
              alt="Community Solidarity- Americas largest Vegetarian hunger relief program."
            />
          </a>
        </Card>
      </Wrapper>
    </div>
  );
}

export default Community;
