import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoDiscord,
  IoLogoLinkedin,
  IoLogoSlack,
  IoLogoSkype,
} from 'react-icons/io5';
import logo from '../../assets/logo.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="" />
      <p className="footer-text">
        Copyright &copy; {new Date().getFullYear()} by Rustam Tolipov. All
        rights reserved.
      </p>
      <div className="footer-icons">
        <a href="https://github.com/Rustamxon7" target="_blank" rel="noreferrer">
          <IoLogoGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/rustam-tolipov" target="_blank" rel="noreferrer">
          <IoLogoLinkedin className="footer-icon" />
        </a>
        <a href="https://join.skype.com/invite/EocMg9sn1jjC" target="_blank" rel="noreferrer">
          <IoLogoSkype className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
