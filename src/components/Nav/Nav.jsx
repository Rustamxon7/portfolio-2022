import logo from '../../assets/logo.svg';
import './Nav.scss';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-scroll';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const shapeRef1 = useRef();
  const shapeRef2 = useRef();
  const shapeRef3 = useRef();
  const shapeRef4 = useRef();

  const navTl = useRef(null);

  useEffect(() => {
    navTl.current = gsap.timeline({
      paused: true,
    });

    navTl.current.to('.nav-list', {
      display: 'flex',
    });

    navTl.current.to(shapeRef1.current, {
      width: '25vw',
      opacity: 1,
    });
    navTl.current.to(
      shapeRef2.current,
      {
        width: '25vw',
        opacity: 1,
      },
      '<0%'
    );
    navTl.current.to(
      shapeRef3.current,
      {
        width: '25vw',
        opacity: 1,
      },
      '<0%'
    );
    navTl.current.to(
      shapeRef4.current,
      {
        width: '25vw',
        opacity: 1,
      },
      '<0%'
    );

    navTl.current.to(
      '#link-1',
      {
        x: 0,
        opacity: 1,
      },
      '<100%'
    );
    navTl.current.to(
      '#link-2',
      {
        x: 0,
        opacity: 1,
      },
      '<25%'
    );
    navTl.current.to(
      '#link-3',
      {
        x: 0,
        opacity: 1,
      },
      '<25%'
    );
    navTl.current.to(
      '#link-4',
      {
        x: 0,
        opacity: 1,
      },
      '<25%'
    );
  }, []);

  const handleOpen = () => {
    if (open) {
      navTl.current.reverse();
      setOpen(false);
    } else {
      navTl.current.play();
      setOpen(true);
    }
  };

  return (
    <>
      <div className="nav">
        <Link
          href="#about"
          to="about"
          smooth={true}
          duration={1000}
          onClick={closeMenu}
        >
          <img className="nav__logo" src={logo} alt="logo" />
        </Link>

        <p className="nav-btn">
          {open ? (
            <span
              onClick={() => {
                navTl.current.reverse();
                setOpen((open) => false);
              }}
            >
              close
            </span>
          ) : (
            <span
              className="nav__btn"
              onClick={() => {
                navTl.current.play();
                setOpen((open) => true);
              }}
            >
              open
            </span>
          )}
        </p>

        <div ref={shapeRef1} className="nav__shape nav__shape-1"></div>
        <div ref={shapeRef2} className="nav__shape nav__shape-2"></div>
        <div ref={shapeRef3} className="nav__shape nav__shape-3"></div>
        <div ref={shapeRef4} className="nav__shape nav__shape-4"></div>
      </div>

      <ul className="nav-list">
        <li id="link-1">
          <a className="nav-link" href="#home" onClick={handleOpen}>
            Home
          </a>
        </li>
        <li id="link-2">
          <a className="nav-link" href="#about" onClick={handleOpen}>
            About
          </a>{' '}
        </li>
        <li id="link-3">
          <a className="nav-link" href="#projects" onClick={handleOpen}>
            Portfolio
          </a>{' '}
        </li>
        <li id="link-4">
          <a className="nav-link" href="#contact" onClick={handleOpen}>
            Contact
          </a>{' '}
        </li>
      </ul>
    </>
  );
};

export default Nav;
