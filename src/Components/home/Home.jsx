import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Typed from 'typed.js';
import 'animate.css';
import './home.css';

const Home = () => {
  const profileImageUrl = 'https://i.ibb.co/6ZrYZyR/about-pic-removebg-preview.png';
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const options = {
      strings: ['<strong>FrontEnd React Software Dev</strong>', '<strong> UI/UX Designer</strong>', '<strong>IT Business Analyst</strong>', '<strong>IT Support Technician</strong>'],
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        const colors = ['#24220f', '#849c7f', '#210dd8'];
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

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Store the mode preference in localStorage
    localStorage.setItem('darkMode', newMode);
  };

  // Click event handler for the emoji toggle
  const handleEmojiClick = () => {
    toggleDarkMode();
  };

  return (
    <div className={`jumbotron mt-5 ${darkMode ? 'dark-mode' : 'light-mode'}`} id="home">
      <div className="content-container text-center d-lg-flex">
       
      <Image src={profileImageUrl} className='rounded col-12 col-lg-4 m-auto gold' fluid />
       <div className="col-12 col-lg-4 mx-2 mx-lg-5">
          <h1 className="display-6 pizza" style={{ color: 'black' }}>HI! I'm <strong>Middas</strong></h1>
          <p className="lead">
            <span className="typed-text"></span>
          </p>
          <p>
            <strong>Highly motivated &amp; Skilled, Please feel free to Look into my Resume</strong>
          </p>
          <a className="btn btn-primary btn-lg" href="https://drive.google.com/file/d/1au4R5EK9HtxgfvYVdYCylFNF4XY7FV3h/view?usp=sharing" role="button">
               <strong>Download Resume</strong>
          </a>

          <div className=''>
            <div className="connect-button m-4">
              <a href="#contact">Let's Connect</a>
            </div>
          </div>
          {/* Sun emoji for dark mode toggle */}
          <span className="emoji-toggle" role="img" aria-label="Toggle Dark Mode" onClick={handleEmojiClick}>
            {darkMode ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
