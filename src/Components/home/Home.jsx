import  { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Typed from 'typed.js';
import 'animate.css';
import './home.css';

const Home = () => {
  const profileImageUrl = 'src/assets/about_pic-removebg-preview (1).png';

  useEffect(() => {
    const options = {
      strings: ['<strong>FrondEnd React Software Developer ,UI/UX Designer</strong>', '<strong>IT Business Analyst</strong>', '<strong>IT Support Technician</strong>'],
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        const colors = ['#24220f', '#28a745', '#000000'];
        // const typedStrings = self.strings;
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
    <div className="jumbotron mt-5" id="home">
      <div className="content-container text-center d-lg-flex">
       
          <Image src={profileImageUrl} className='rounded col-6 col-lg-4 m-auto ' fluid />
          {/* <img src={profileImageUrl} alt="Profile" className="profile-image figure-img img-fluid rounded" /><br /> */}
      
        <div className=" col-10 col-lg-6  mx-5">
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
          <div className=''>
         {/* klass yakho connect */}
            <div className="connect-button m-5">
    {/* klass yakho connect-button */}
              <a href="#contact">Lets Connect</a>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
