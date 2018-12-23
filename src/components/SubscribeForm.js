import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
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
  background-color: #333;
  font-size: 18px;
  border: none;
  padding: 5px 15px;
  width: 200px;
  color: white;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: lightblue;
  height: 30px;

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
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const url = 'https://www.veganworks.com/.netlify/functions/addSubscriber';
    fetch(url, {
      method: 'POST',
      body: email,
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
        <b style={{ color: 'lightblue', fontSize: '1.2em' }}>Subscribe</b> and
        stay up to date about our upcoming products and promotions!
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
          Subscribe!
        </Button>
      </form>
      <div style={{ height: '30px' }}>
        {error && <p style={{ color: 'tomato', margin: '5px' }}>{error}</p>}
      </div>

      <h3 className="alice lightgray">Prefer Twitter?</h3>

      <a
        className="twitter-follow-button"
        href="https://twitter.com/VeganWorksHQ"
        data-size="large"
      >
        Follow @VeganWorksHQ
      </a>
    </Wrapper>
  );
}

export default SubscribeForm;
