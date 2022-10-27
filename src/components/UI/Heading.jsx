import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Heading.scss';
gsap.registerPlugin(ScrollTrigger);

const Heading = (props) => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tlL = gsap.timeline({
      scrollTrigger: {
        trigger: lineRef.current,
        toggleActions: 'play none none none',
        start: 'bottom bottom-=200px',
        end: 'bottom top+=100px',
        scrub: true,
      },
    });

    // text
    gsap.fromTo(
      titleRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );

    // line
    tlL.fromTo(
      lineRef.current,
      {
        scrollTrigger: {
          trigger: lineRef.current,
          toggleActions: 'play none none none',
          start: 'top bottom-=100px',
        },
        width: '0%',
      },
      {
        width: '100%',
      }
    );
  }, []);

  return (
    <div className='heading'>
      <p ref={titleRef} className='heading-title'>
        {props.children}
      </p>
      <div className='heading-line'>
        <div ref={lineRef} className='heading-line__in'></div>
      </div>
    </div>
  );
};

export default Heading;
