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

    let perfectY = (windowHeight - imageHeight) / 2;

    const imageNumber =
      (Math.abs(perfectY) / Math.abs(position)) * NUMBER_OF_IMAGES;
    console.log(Math.abs(perfectY), Math.abs(position), imageNumber);

    function getImageNumber() {
      const imgNum = Math.round(imageNumber);
      if (imgNum > props.items.length - 1) {
        return props.items.length - 1;
      } else if (imgNum < 1) {
        return 1;
      }
      return imgNum;
    }

    console.log(getImageNumber());

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
          style={{ width: '100%' }}
          src={getRef(imageNumber)}
          alt="VeganWorks snack box opening as the page scrolls."
        />
      </div>
    </Waypoint>
  );
}

export default OpeningBox;
