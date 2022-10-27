import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './PortfolioProject.scss';
gsap.registerPlugin(ScrollTrigger);

const PortfolioProject = (props) => {
  // refs
  const imgRef = useRef(null);
  const imgInRef = useRef(null);
  const titleRef = useRef(null);
  const numRef = useRef(null);
  const desRef = useRef(null);

  useEffect(() => {
    if (imgRef === null) return;
    const cursor = document.querySelector('.cursor');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: 'play none none none',
        start: 'top bottom-=100px',
        end: 'bottom top+=100px',
      },
    });
    // anmate image

    tl.fromTo(
      imgRef.current,
      {
        x: props.id % 2 === 0 ? '-20%' : '20%',
        opacity: 0,
        duration: 2,
      },
      {
        x: 0,
        opacity: 1,
      }
    );

    // parallax effect on img
    const tlIn = gsap.timeline({
      scrollTrigger: {
        trigger: imgInRef.current,
        toggleActions: 'play none reverse none',
        start: 'top bottom-=200px',
        end: 'bottom top+=100px',
        scrub: true,
      },
    });

    tlIn.fromTo(
      imgInRef.current,
      {
        scrollTrigger: {
          trigger: imgInRef.current,
          toggleActions: 'play none none none',
          start: 'top bottom-=100px',
        },
        scale: 1,
      },
      {
        scale: 1.1,
      }
    );

    // animate texts
    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        toggleActions: 'play none none none',
        start: 'top bottom-=100px',
        end: 'bottom top+=100px',
      },
    });

    tlTitle
      .fromTo(
        titleRef.current,
        {
          x: props.id % 2 === 0 ? '-50%' : '50%',
          opacity: 0,
          letterSpacing: '2rem',
          duration: 1,
        },
        {
          x: 0,
          opacity: 1,
          letterSpacing: '0',
        }
      )
      .fromTo(
        desRef.current,
        {
          opacity: 0,
          y: '-50%',
        },
        {
          opacity: 1,
          y: '0%',
        }
      );

    // animate cursor
    imgRef.current.addEventListener('mouseover', () => {
      cursor.innerHTML = 'View project';
      cursor.classList.add('c-project');
    });
    imgRef.current.addEventListener('mouseout', () => {
      cursor.innerHTML = '';
      cursor.classList.remove('c-project');
    });
  }, []);

  return (
    <div className="portfolio-project">
      <a href={props.link} className="portfolio-project__img" ref={imgRef}>
        <img ref={imgInRef} src={props.img} alt="Project" />
      </a>

      <div className="portfolio-project__content">
        <h2 ref={titleRef}>{props.title}</h2>
        <p ref={desRef}>{props.description}</p>{' '}
      </div>
    </div>
  );
};

export default PortfolioProject;
