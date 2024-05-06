import React, { useEffect, useRef } from 'react';
import { Typed as ReactTyped } from 'react-typed';

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [' All bookings in one website', 'We have got you covered'],
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
      contentType: 'html',
    };
    
    if (typedRef.current) {
      new ReactTyped(typedRef.current, options);
    }
  }, []);

  return <span ref={typedRef} />;
};

export default TypedText;
