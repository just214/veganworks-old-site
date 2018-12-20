import React, { useState, useRef, useEffect } from 'react';
import Waypoint from 'react-waypoint';
import throttle from 'lodash/throttle';

function OpeningBox(props) {
  const NUMBER_OF_IMAGES = props.items.length;

  const imgRef = useRef();
  const listenerRef = useRef();

  const [initialPosition, setInitialPosition] = useState('');
  const [position, setPosition] = useState('');
  const [imageNumber, setImageNumber] = useState('');

  function handleScroll() {
    if (!initialPosition) return;

    const windowHeight = window.innerHeight;
    const imageHeight = imgRef.current.getBoundingClientRect().height;
    const perfectY = (windowHeight - imageHeight) / 2;
    const diff = imageHeight - perfectY;
    console.log('prefectY:', perfectY);
    console.log('window Height:', windowHeight);
    console.log('POSITION', position, diff);

    const imageNumber =
      // 100/400 * 16
      (Math.abs(perfectY) / Math.abs(position)) * NUMBER_OF_IMAGES;

    function getImageNumber() {
      const imgNum = Math.round(imageNumber);
      if (imgNum > props.items.length - 1) {
        return props.items.length - 1;
      } else if (imgNum < 1) {
        return 1;
      }
      return imgNum;
    }

    setImageNumber(getImageNumber());
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
        const position = imgRef.current.getBoundingClientRect().y;
        console.log('jasdfljkasf', imgRef.current.getBoundingClientRect());
        setPosition(position);
      }

      const listener = window.addEventListener(
        'scroll',
        throttle(setThePosition, 10),
      );
      listenerRef.current = listener;

      return () => {
        window.removeEventListener('scroll', () => {});
      };
    },
    [initialPosition],
  );

  function getRef(photoNumber) {
    return props.items[photoNumber];
  }

  function handleEnter(pos) {
    setInitialPosition(pos.waypointTop);
    setPosition(pos.waypointTop);
  }

  function handleLeave(pos) {
    window.removeEventListener('scroll', () => {});
    setInitialPosition('');
  }

  return (
    <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
      <div ref={imgRef}>
        <img
          style={{ width: '60%', margin: '0 auto' }}
          src={getRef(imageNumber)}
          alt="VeganWorks snack box opening as the page scrolls."
        />
      </div>
    </Waypoint>
  );
}

export default OpeningBox;

/*
      -500 = 1
      -250 = 4
      100 = 8
      250 = 12
      500 = 16
     */

/*
      -500 = 1
      -250 = 8
      100 = 16
  
     */

// position + diff + 1

// position === 100
// perfectY === 100
// imageHeight === 600
// windowHeight === 800
// diff === 500
// image count === 16
// SHOULD BE 8
