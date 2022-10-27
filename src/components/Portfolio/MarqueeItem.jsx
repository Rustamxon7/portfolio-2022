import { useEffect, useRef } from 'react';

const MarqueeItem = (props) => {
  const marRef = useRef();

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // animate cursor
    marRef.current.addEventListener('mouseover', () => {
      cursor.classList.add('c-mar');
      cursor.classList.add(props.class);
    });
    marRef.current.addEventListener('mouseout', () => {
      cursor.classList.remove('c-mar');
      cursor.classList.remove(props.class);
    });
  }, []);
  return (
    <div ref={marRef} className='marquee-item'>
      {props.skill}
      <div className='marquee-item__dot'></div>
    </div>
  );
};

export default MarqueeItem;
