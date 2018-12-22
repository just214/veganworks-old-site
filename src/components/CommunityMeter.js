import React, { useState, useEffect, useMutationEffect, useRef } from 'react';
import Gauge from 'react-svg-gauge';
import Waypoint from 'react-waypoint';

function CommunityMeter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [pounds, setPounds] = useState(0);
  const [max, setMax] = useState(1000);
  const interval = useRef();

  useMutationEffect(
    () => {
      interval.current = setInterval(() => {
        if (!isVisible) return;
        setCount(count => {
          if (count >= pounds) {
            return pounds;
          } else {
            return count + 5;
          }
        });
      }, 20);
    },
    [isVisible, pounds],
  );

  useEffect(
    () => {
      if (!isVisible) return;
      if (count === pounds) {
        clearInterval(interval.current);
      }
    },
    [count],
  );

  useEffect(() => {
    fetch('https://www.veganworks.com/.netlify/functions/airtable-units-sold')
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status,
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          setMax(Math.round(data * 1.3));
          setPounds(data);
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }, []);

  function handleEnter() {
    setIsVisible(true);
    setCount(0);
  }

  function handleLeave() {
    setIsVisible(false);
  }

  return (
    <Waypoint
      topOffset="100px"
      bottomOffset="100px"
      onEnter={handleEnter}
      onLeave={handleLeave}
    >
      <div style={{ textAlign: 'center', margin: '0px 20px 20px 20px' }}>
        <Gauge
          value={count}
          label=""
          width={350}
          height={250}
          min={0}
          max={max}
          color="green"
          backgroundColor="lightgray"
          valueLabelStyle={{ fill: 'lightgray' }}
          minMaxLabelStyle={{ display: 'none' }}
        />
        <div style={{ position: 'relative', top: -50 }}>
          <h1 style={{ color: 'lightgray' }}>pounds of fresh groceries*</h1>
          <p className="white" style={{ padding: '10px 10%' }}>
            * For every dollar donated, Community Solidarity is able to provide
            8 pounds of fresh groceries to a family in need. We donate 25 cents
            for every snack box purchase.
          </p>
        </div>
      </div>
    </Waypoint>
  );
}

export default CommunityMeter;
