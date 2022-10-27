import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './Cursor.scss';

const Cursor = () => {
  const cursorRef = useRef();
  const cursorInnerRef = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursorRef.current, {
        duration: 0.3,
        left: e.clientX,
        top: e.clientY,
      });

      gsap.to(cursorInnerRef.current, {
        duration: 0,
        left: e.clientX,
        top: e.clientY,
      });
    });
  }, []);

  return (
    <>
      {' '}
      <div ref={cursorRef} className='cursor'></div>
      <div ref={cursorInnerRef} className='cursor-inner'></div>
    </>
  );
};

export default Cursor;
