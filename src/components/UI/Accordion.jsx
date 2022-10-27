import { useState, useRef, useEffect } from 'react';

import arrow from '../../assets/arrow.svg';
import './Accordion.scss';

const Accordion = (props) => {
  const [active, setActive] = useState(false);

  const accRef = useRef();

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // animate cursor
    accRef.current.addEventListener('mouseover', () => {
      cursor.classList.add('c-acc');
    });
    accRef.current.addEventListener('mouseout', () => {
      cursor.classList.remove('c-acc');
    });
  }, []);

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
      <div
        ref={accRef}
        className='accordion-header'
        onClick={() => setActive(!active)}
      >
        {/* <span className='accordion-num'>_{props.id}</span> */}
        <span className='accordion-title'>{props.title}</span>
        <div className='accordion-icon'>
          <img src={arrow} alt='' />
        </div>
      </div>
      <div className='accordion-content'>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Accordion;
