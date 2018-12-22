import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const H3 = styled.h3`
  color: lightgray;
`;

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(true);

  function handleSubscribe(e) {
    setError('');
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const url = 'https://www.veganworks.com/.netlify/functions/addSubscriber';
    fetch(url, {
      method: 'POST',
      body: {
        email_address: email,
        status: 'subscribed',
      },
    })
      .then(data => {
        setSubscribed(true);
      })
      .catch(function(error) {
        setError(error.message);
      });
  }

  if (subscribed) {
    return (
      <Wrapper>
        <h3 style={{ color: 'lightblue' }}>Thanks for subscribing!</h3>
        <p style={{ color: 'lightgray' }}>
          We will let you know of any upcoming sales or new products.
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <H3>Subscribe to stay up to date about our latest snack boxes!</H3>
      <form onSubmit={handleSubscribe}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
        />
        <button tyle="submit" onClick={handleSubscribe}>
          Join!
        </button>
        <div style={{ height: '50px' }}>
          {error && <p style={{ color: 'tomato', margin: '5px' }}>{error}</p>}
        </div>
      </form>
    </Wrapper>
  );
}

export default SubscribeForm;
