import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './about.css'

const About = () => {
  return (
    <div className='card_container' id='about'>

<div className="container">
  <h2>About</h2>
</div>
  <div className="flex-container">
    <div className="flex-item-1">
      <img src="src/assets/about_pic-removebg-preview (1).png" alt="Image" />
    </div>
    <div className="flex-item-2">
       <strong> Middas is an enthusiastic junior Frontend React developer who is passionate 
        about crafting engaging web interfaces using React. With a strong foundation in React concepts,
        I transform designs into functional components that enhance user experiences. Guided by mentors,
        I contribute to modern web development, skilled in debugging, UX/UI design principles,
        and utilizing HTML5, CSS, JavaScript, and Node.js. I am committed to continuous learning and collaborative problem-solving,
        aiming to create innovative, user-focused digital solutions. I thrive in collaborative environments where I can contribute my 
        ideas and learn from experienced professionals. I possess excellent communication skills, which enable me to effectively convey
        complex technical concepts to both technical and non-technical stakeholders.</strong>
    </div>
  </div>



      <br />
      <div className='card_row'>
        <Card style={{ width: '23rem' }}>
       
          <Card.Body>
          <Card.Title style={{ color: '#333403', fontWeight: 'bold', fontSize: '1.5rem' }}>Skills</Card.Title>
                    <Card.Img variant="top" src="src/assets/icons8-html-48.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-css-48.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-javascript-64.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-react-50.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-nodejs-48.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-java-48.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-python-48.png" alt="Card Image" />
                    <Card.Img variant="top" src="src/assets/icons8-figma-100.png" alt="Card Image" />

          </Card.Body>
        </Card>

        <Card style={{ width: '23rem' }}>
          <Card.Body>
         
          <Card.Title style={{ color: '#333403', fontWeight: 'bold', fontSize: '1.5rem' }}>Education</Card.Title>
          <Card.Text  style={{ color: '#333403',  }}>
                        ROSEBANK COLLEGE <br />Higher Certificate in support system 2017-2018 <br /> <br /> Bachelor of Information Technology In Business Systems (BIT)<br /> 2018-2020 <br /><br />
                        UNISA <br /> Honours Information Science<br /> 2021 - Present
                        </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '23rem' }}>
          <Card.Body>
          <Card.Title style={{ color: '#333403', fontWeight: 'bold', fontSize: '1.5rem' }}>Experience</Card.Title>
            <Card.Text  style={{ color: '#333403' }}>
                   ROSEBANK COLLEGE - Junior IT Support Tech <br /> 2018-2020 <br /> <br /> WESTPACK LIFESTYLE - Information Admin Clerk<br /> 2022-2023 <br /> <br /> YOUNGLINGS (ABSA) - Junior Software Developer <br /> Jan 2023 - Present
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
