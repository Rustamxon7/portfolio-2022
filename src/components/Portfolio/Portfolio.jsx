import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Heading from '../UI/Heading';
import './Portfolio.scss';
const PortfolioProject = React.lazy(() => import('./PortfolioProject'));

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://projects-api.fly.dev/api/v1/projects`)
      .then((res) => {
        setProjects(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className='portfolio' id='projects'>
      <Heading>Projects</Heading>
      <div className='portfolio-projects'>
        {projects.map((project, index) => {
          return (
            <PortfolioProject
              key={index}
              id={project.id}
              img={project.thumb.url}
              title={project.title}
              link={project.link}
              thumbImg={project.thumb.thumb.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
