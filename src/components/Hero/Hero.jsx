import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './Hero.scss';
import heroImg from '../../assets/hero.webp';

const Hero = () => {
  // refs
  const imgRef = useRef();
  const titleRef = useRef();
  const backRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1.5,
    });
    const cursor = document.querySelector('.cursor');

    // animate image
    tl.fromTo(
      imgRef.current,
      {
        opacity: 0,
        y: '0%',
      },
      {
        duration: 1,
        opacity: 1,
        y: '-50%',
      }
    );

    // animate text
    tl.fromTo(
      titleRef.current,
      {
        y: '50%',
        skewY: 10,
        opacity: 0,
      },
      {
        y: '0%',
        skewY: 0,
        opacity: 1,
      },
      '<50%'
    );

    const backTl = gsap.timeline({
      scrollTrigger: {
        trigger: backRef.current,
        toggleActions: 'play none none none',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    backTl.fromTo(
      backRef.current,
      {
        left: '100%',
      },
      {
        left: '-20%',
      }
    );

    // cursor animate
    titleRef.current.addEventListener('mouseover', () =>
      cursor.classList.add('c-title')
    );
    titleRef.current.addEventListener('mouseout', () =>
      cursor.classList.remove('c-title')
    );
  }, []);

  return (
    <div className="hero" id="home">
      <div className="hero-container">
        <h1 ref={titleRef} className="hero-title">
          <span className="hero-title-highlight">FULL STACK DEV</span>&nbsp;
          spends his days building tools that help make the Internet a better
          place for everyone
        </h1>
        <img ref={imgRef} className="hero-img" src={heroImg} alt="" />
      </div>

      <p ref={backRef} className="back-text">
        FULL STACK FULL STACK FULL STACK FULL STACK FULL STACK
      </p>
    </div>
  );
};

export default Hero;
