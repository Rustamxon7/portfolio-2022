import { gsap } from 'gsap';
import { useEffect } from 'react';

import './Marquee.scss';
import MarqueeItem from './MarqueeItem';

const Marquee = () => {
  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'React',
    'Redux',
    'Ruby',
    'Ruby on Rails',
    'MySQL',
    'PostgreSQL',
    'Swagger UI',
    'Rspec',
    'Blender',
    'Trello',
    'Kanban',
    'HTML',
    'CSS',
    'SASS',
  ];

  useEffect(() => {
    var boxWidth = 200,
      totalWidth = boxWidth * 18,
      no01 = document.querySelectorAll('.marquee-item'),
      dirFromLeft = '+=' + totalWidth;

    var mod = gsap.utils.wrap(0, totalWidth);

    function marquee(which, time, direction) {
      gsap.set(which, {
        x: function (i) {
          return i * boxWidth;
        },
      });
      var action = gsap.timeline().to(which, {
        x: direction,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + 'px',
        },
        duration: time,
        ease: 'none',
        repeat: -1,
      });
      return action;
    }

    gsap.timeline().add(marquee(no01, 30, dirFromLeft), 1);
  }, []);

  return (
    <div className="marquee">
      {skills.map((skill, index) => (
        <MarqueeItem
          key={index}
          skill={skill}
          class={skill.toLocaleLowerCase()}
        />
      ))}
    </div>
  );
};

export default Marquee;
