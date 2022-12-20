import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Pages.scss';

const Project = () => {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://projects-api.fly.dev/api/v1/projects/1`)
      .then((res) => {
        setProject(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(project);

  return isLoading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <div className="project-heading">
        <div className="heading-content">
          <h1 className="pg-heading-primary">{project.title}</h1>
        </div>
      </div>

      <div className="pg-btns">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="pg-btn"
        >
          Github
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="pg-btn"
        >
          Live
        </a>
      </div>

      <p className="pg-paragraph">{project.paragraph1}</p>
      <img className="pg-img" src={project.image1.url} />
      <p className="pg-paragraph">
        {project.paragraph2}
      </p>
      <div className="pg-gallery-2">
        <img className="pg-img" src={project.image2.url} />
        <img className="pg-img" src={project.image3.url} />
      </div>

      <h3 className="pg-heading-tertiary">Build with</h3>

      <div className="pg-build-with">
        <ul>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Cloudinary</li>
          <li>HTML&CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
