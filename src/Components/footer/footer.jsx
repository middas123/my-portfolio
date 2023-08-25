
import { FaLinkedin , FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const _currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {_currentYear} EpheFrans.corp. All rights reserved.</p>
        <div className="footer-social-icons">
          <a href="https://github.com/middas123" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/middasmoks/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/boitumelo-middas-mokobane-544280148/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
