import React, { useState, useRef, useEffect } from 'react';
import Waypoint from 'react-waypoint';
import throttle from 'lodash/throttle';

function OpeningBox(props) {
  const NUMBER_OF_IMAGES = props.items.length;

  const imgRef = useRef();
  const listenerRef = useRef();

  const [position, setPosition] = useState('');
  const [previousPosition, setPreviousPosition] = useState('');
  const [imageNumber, setImageNumber] = useState('');

  function handleScroll() {
    if (!position) return;

    const imageHeight = imgRef.current.getBoundingClientRect().height;
    console.log('image height: ', imageHeight);
    console.log('Position', position); // 963 //1200  // 1500

    const result = (position / imageHeight) * 16;
    console.log('RES', result);

    function getImageNumber() {
      const imageCount = props.items.length;
      if (position > imageHeight * 2) {
        return 1;
      }

      if (position <= imageHeight) {
        return imageCount - 1;
      }

      return ((position - imageHeight) / position) * 16;
    }

    console.log('IMGNUM', Math.round(getImageNumber()));

    setImageNumber(Math.round(getImageNumber()));
  }

  useEffect(
    () => {
      handleScroll();
    },
    [position],
  );

  useEffect(
    () => {
      function setThePosition() {
        const position = imgRef.current.getBoundingClientRect().bottom;
        setPosition(position);
      }

      const listener = window.addEventListener(
        'scroll',
        throttle(setThePosition, 500),
      );
      listenerRef.current = listener;

      return () => {
        window.removeEventListener('scroll', () => {});
      };
    },
    [position],
  );

  function getRef(photoNumber) {
    return props.items[photoNumber];
  }

  function handleEnter(pos) {
    setPreviousPosition(pos.previousPosition);
    setPosition(pos.waypointBottom);
  }

  function handleLeave(pos) {
    window.removeEventListener('scroll', () => {});
    setPosition('');
  }

  return (
    <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
      <div ref={imgRef}>
        <img
          style={{ width: '80%' }}
          src={getRef(imageNumber)}
          alt="VeganWorks snack box opening as the page scrolls."
        />
      </div>
    </Waypoint>
  );
}

export default OpeningBox;
