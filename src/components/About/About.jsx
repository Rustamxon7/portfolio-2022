import Marquee from '../Portfolio/Marquee';
import Accordion from '../UI/Accordion';
import Heading from '../UI/Heading';
import P from '../UI/P';

import './About.scss';

const accordionData = [
  {
    id: 1,
    title: 'Frontend',
    content:
      'I have over two years of experience in developing responsive web applications. I am proficient in HTML & CSS, SCSS, JavaScript, React & Redux, Three Js, React Three Fiber',
  },
  {
    id: 2,
    title: 'Backend',
    content:
      'I possess over one year of experience in database design and development, as well as creating dependable application programming interfaces (APIs). My expertise includes MySQL, PostgreSQL, Ruby, Ruby on Rails, Node.js, Rest API, Rspec, Swagger UI and Git.',
  },
  {
    id: 3,
    title: 'Design',
    content:
      'I have a keen interest in developing user interfaces and user experiences on Figma, as well as creating 3D models and satisfying visual content on Blender. I enjoy the challenge of combining aesthetics and function to create results which exceed expectations.',
  },
];

const About = () => {
  return (
    <div className='section-about' id='about'>
      <Heading>About Me</Heading>
      <div className='about-content'>
        <div className='about-text'>
          <P>
            I am an enthusiastic Full-Stack Web Developer passionate about
            learning languages. Mentoring four or more students who are aspiring
            to become web developers in the future, I am actively seeking
            employment to join a flourishing team.
          </P>
        </div>

        <div>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default About;
