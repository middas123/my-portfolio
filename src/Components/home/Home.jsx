import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import 'animate.css';
import './home.css';

const Home = () => {
  const profileImageUrl = 'src/assets/IMG_0330.jpeg';

  useEffect(() => {
    const options = {
      strings: ['<strong>React Software Developer</strong>', '<strong>IT Business Analyst</strong>', '<strong>IT Support Technician</strong>'],
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        const colors = ['#24220f', '#28a745', '#000000'];
        const typedStrings = self.strings;
        const typedTextElement = document.querySelector('.typed-text');
        typedTextElement.style.color = colors[arrayPos % colors.length];
        self.options.onResetCallback = () => {
          typedTextElement.style.color = '';
        };
      },
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="jumbotron" id="home">
      <div className="content-container">
        <div className="profile-image-container">
          <img src={profileImageUrl} alt="Profile" className="profile-image" /><br />
          <div className='connect'>
            <p className="connect-button">
              <a href="#contact">Let's Connect</a>
              <span className="social-icons">
                {/* Add social media icons */}
                <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="text-container">
          <h1 className="display-4" style={{ color: 'black' }}>HI! I am <strong>Middas</strong></h1>
          <p className="lead">
            <span className="typed-text"></span>
          </p>
          <p>
            <strong>Highly motivated &amp; Skilled, Please feel free to Look into my Resume</strong>
          </p>
          <a className="btn btn-primary btn-lg" href="src/assets/Beige Modern Digital Interface Professional Developer CV Resume.pdf" role="button">
            <strong>Download Resume</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
