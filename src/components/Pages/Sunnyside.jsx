import { useParams } from 'react-router-dom';

import './Pages.scss';

import instagram from '../../assets/projects/instagram/instagram.png';
import instagramSettings from '../../assets/projects/instagram/instagram-setting.png';
import instagramPost from '../../assets/projects/instagram/instagram-post.png';
import instagramBanner from '../../assets/projects/instagram/instagram-banner.png';

const Instagram = () => {
  return (
    <div>
      <div className="project-heading">
        <div className="heading-content">
          <h1 className="pg-heading-primary">Sunnyside Agency</h1>
        </div>
      </div>

      <div className="pg-btns">
        <a
          href="https://github.com/Rustamxon7/Instagram-Clone-Rails"
          target="_blank"
          rel="noreferrer"
          className="pg-btn"
        >
          Github
        </a>

        <a
          href="https://instagram-test-ror.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="pg-btn"
        >
          Live
        </a>
      </div>

      {/* <h2 className="pg-heading-secondary">Info</h2> */}
      <p className="pg-paragraph">
        <span className="pg-bold">The Instagram Clone </span> is a clone of
        <span className="pg-italic"> Instagram </span> built with Ruby on Rails.
        It is one of my most proud projects. I am proud to say that I have built
        this project from scratch. Building such a project with Ruby on Rails is
        a great experience.
      </p>
      <img className="pg-img" src={instagram} />
      <p className="pg-paragraph">
        And it has a lot of highlights that I can say about. To store data,
        PostgreSQL was a helpful tool to combine all of my database tables. When
        storing my images I have used the Cloudinary Cloud base component. For
        connecting purposes, I have used shrine Gem to upload my images to the
        database.
      </p>
      <div className="pg-gallery-2">
        <img className="pg-img" src={instagramSettings} />
        <img className="pg-img" src={instagramPost} />
      </div>

      <h3 className="pg-heading-tertiary">Build with</h3>

      <div className="pg-build-with">
        <ul>
          <li>HTML&CSS</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Cloudinary</li>
        </ul>
      </div>
    </div>
  );
};

export default Instagram;
