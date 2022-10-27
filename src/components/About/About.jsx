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
      'Hands-on experience in building responsive Web Applications for more than 2+ years.  HTML & CSS, SCSS, JavaScript, React & Redux, React Three Fiber',
  },
  {
    id: 2,
    title: 'Backend',
    content:
      'Experience in 1+ years of database designing, and building reliable APIs. MySQL, PostgreSQL, Ruby, Ruby on Rails, Node.js, Rest API, Rspec, Swagger UI',
  },
  {
    id: 3,
    title: 'Design',
    content:
      'I have skills to create UX & UI design for Web applications on Figma. Love for 3D modeling and creating satisfying videos on Blender',
  },
];

const About = () => {
  return (
    <div className="section-about" id="about">
      <Heading>About Me</Heading>
      <div className="about-content">
        <div className="about-text">
          <P>
            I'm a passionate Full-Stack Web developer with a love for learning
            languages. Mentor of 4+ students who what's to be web developers in
            the future. Actively job seeker who searching to find his position
            in a growing team.
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
