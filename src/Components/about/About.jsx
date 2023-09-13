
import Card from 'react-bootstrap/Card';
import './about.css';

const About = () => {
  return (
    <div className='card_container' id='about'>
      <div className="container">
        <h1 className="mt-5"><strong>About</strong></h1>
      </div>
      <br /> <br />
      <div className="d-lg-flex">
        <div className="flex-item-1">
          <img src="https://i.ibb.co/SPYmmhq/second-pic-removebg-preview.png" alt="about-pic-removebg-preview" />
        </div>
        <div className="flex-item-2">
          <strong> Middas is an enthusiastic junior Frontend React developer who is passionate about crafting engaging web interfaces using React. With a strong foundation in React concepts, I transform designs into functional components that enhance user experiences. Guided by mentors, I contribute to modern web development, possessing skills in debugging, UX/UI design principles, and utilizing HTML5, CSS, JavaScript, and Node.js. I am committed to continuous learning and collaborative problem-solving, aiming to create innovative, user-focused digital solutions. I thrive in collaborative environments where I can contribute my ideas and learn from experienced professionals. My excellent communication skills enable me to effectively convey complex technical concepts to both technical and non-technical stakeholders




.</strong>
        </div>
      </div>
      <br />
      <div className='d-lg-flex'>
        <Card className="card1">
          
          <Card.Body>
            <Card.Title style={{ color: '#333403', fontWeight: 'bold', }}>Skills</Card.Title>
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/HPkCfzs/icons8-html-48.png" alt="icons8-html-48" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/zZdgVKZ/icons8-css-48.png" alt="icons8-css-48" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/cNRR5Q8/icons8-javascript-64.png" alt="icons8-javascript-64" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/ykfH6vV/icons8-react-50.png" alt="icons8-react-50" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/HhJR044/icons8-nodejs-48.png" alt="icons8-nodejs-48" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/hRMr1d6/icons8-java-48.png" alt="icons8-java-48" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/PZcXR0T/icons8-python-48.png" alt="icons8-python-48" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/XXqF116/icons8-figma-100.png" alt="icons8-figma-100" />
            <Card.Img className="infinite-flip-image" variant="top" src="https://i.ibb.co/cbLD8pP/icons8-firebase-48.png" alt="icons8-firebase-48" />
          </Card.Body>
        </Card>

        <Card className="card2">
          <Card.Body>
            <Card.Title className="card-title">Education</Card.Title>
            <Card.Text className="card-text">
              ROSEBANK COLLEGE <br />Higher Certificate in support system 2017-2018 <br /> <br /> Bachelor of Information Technology In Business Systems (BIT)<br /> 2018-2020 <br /><br />
              UNISA <br /> Honours Information Science<br /> 2021 - Present
            </Card.Text>
          </Card.Body>
        </Card>   

        <Card className="card3">
          <Card.Body>
            <Card.Title className="card-title">Experience</Card.Title>
            <Card.Text className="card-text">
              ROSEBANK COLLEGE - Junior IT Support Tech <br /> 2018-2020 <br /> <br /> WESTPACK LIFESTYLE - Information Admin Clerk<br /> 2022-2023 <br /> <br /> YOUNGLINGS (ABSA) - Junior Software Developer <br /> Jan 2023 - Present
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
