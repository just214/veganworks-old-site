import React, { useState, useEffect, useRef } from 'react';
import Gauge from 'react-svg-gauge';
import Waypoint from 'react-waypoint';

function CommunityMeter() {
  const FINAL_COUNT = 814;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const interval = useRef();

  useEffect(
    () => {
      interval.current = setInterval(() => {
        if (!isVisible) return;
        setCount(count => {
          if (count >= FINAL_COUNT) {
            return FINAL_COUNT;
          } else {
            return count + 5;
          }
        });
      }, 20);
    },
    [isVisible],
  );

  useEffect(
    () => {
      if (!isVisible) return;
      if (count === FINAL_COUNT) {
        clearInterval(interval.current);
      }
    },
    [count],
  );

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
          max={1000}
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
