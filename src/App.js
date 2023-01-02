import React, { useEffect } from 'react';
import gsap from 'gsap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import './Queries.scss';

const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Nav = React.lazy(() => import('./components/Nav/Nav'));
const Project = React.lazy(() => import('./components/Pages/Project'));
const Cursor = React.lazy(() => import('./components/Cursor/Cursor'));
const Container = React.lazy(() => import('./components/UI/Container'));

function App() {
  useEffect(() => {
    const tl = gsap.timeline({});
    const buttons = document.querySelectorAll('button');
    const inputs = document.querySelectorAll('input');
    const textareas = document.querySelectorAll('textarea');
    const cursor = document.querySelector('.cursor');
    const footerLinks = document.querySelectorAll('.footer-icon');

    tl.to('.first', {
      width: 0,
      delay: 0.5,
    });

    tl.to(
      '.second',
      {
        width: 0,
      },
      '<0%'
    );

    tl.to(
      '.third',
      {
        width: 0,
      },
      '<0%'
    );

    tl.to(
      '.fourth',
      {
        width: 0,
      },
      '<0%'
    );

    tl.to('.overlay', {
      border: '0px solid black',
    });

    console.log(buttons);

    buttons.forEach((button) => {
      button.addEventListener('mouseover', () =>
        cursor.classList.add('c-none')
      );
      button.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });

    inputs.forEach((input) => {
      input.addEventListener('mouseover', () => cursor.classList.add('c-none'));
      input.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });

    textareas.forEach((textarea) => {
      textarea.addEventListener('mouseover', () =>
        cursor.classList.add('c-none')
      );
      textarea.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });

    footerLinks.forEach((link) => {
      link.addEventListener('mouseover', () => cursor.classList.add('c-none'));
      link.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Nav />
                <Hero />
                <Container>
                  <Portfolio />
                </Container>
                <Container>
                  <About />
                </Container>
                <Container>
                  <Contact />
                </Container>
                <Footer />
                <Cursor />
              </>
            }
          ></Route>

          <Route
            exact
            path='/project/:id'
            element={
              <>
                <Nav />
                <Container>
                  <Project />
                </Container>
                <Footer />
                <Cursor />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* animation overlay */}
      <div className='overlay first'></div>
      <div className='overlay second'></div>
      <div className='overlay third'></div>
      <div className='overlay fourth'></div>
    </div>
  );
}

export default App;
