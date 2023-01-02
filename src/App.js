import React, { useEffect } from 'react';
import gsap from 'gsap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import './Queries.scss';
import Cursor from './components/Cursor/Cursor';
import Container from './components/UI/Container';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Project from './components/Pages/Project';

const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

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
