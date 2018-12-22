import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  padding: 20px 5px;
`;

const H3 = styled.h3`
  color: lightgray;
`;

const Input = styled.input`
  border-radius: 20px;
  font-size: 20px;
  border: none;
  padding: 5px 15px;
  width: 200px;
`;

const Button = styled.button`
  border-radius: 30px;
  background-color: lightblue;
  height: 35px;
  width: 70px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      <H3 className="alice">
        Subscribe to stay up to date about our latest snack boxes!
      </H3>
      <form
        onSubmit={handleSubscribe}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Input
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          className="alice"
        />
        <Button className="alice" type="submit" onClick={handleSubscribe}>
          Join!
        </Button>
      </form>
      <div style={{ height: '50px' }}>
        {error && <p style={{ color: 'tomato', margin: '5px' }}>{error}</p>}
      </div>
    </Wrapper>
  );
}

export default SubscribeForm;
