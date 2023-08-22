import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './about.css'

const About = () => {
  return (
    <div className='card_container' id='about'>
    <div >
    {/* <h2>About</h2> Added heading */}
        </div> 
        <Card style={{ display: 'flex', width: '18rem' }}>
            <Card.Img className="card-image" variant="top" src="src/assets/IMG_0330.jpeg" />
              <div style={{ flex: 10, padding: '1rem' }}>
                  <div className='card_content'>
                  <Card.Body>
                     my content for the right side goes here 
             
                </Card.Body>
                </div>
            </div>
            </Card>
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
