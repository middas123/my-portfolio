import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { contactConfig } from './content_option';
import { collection, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
import emailjs from "emailjs-com";
import * as yup from 'yup';
import './Contact.css';

const firebaseConfig = {
  apiKey: "AIzaSyCk0dyrNHhxZGWARpB1TdoQhxHAwQXBtDU",
  authDomain: "vivid-now-332706.firebaseapp.com",
  projectId: "vivid-now-332706",
  storageBucket: "vivid-now-332706.appspot.com",
  messagingSenderId: "752097036479",
  appId: "1:752097036479:web:0ef4dd016eea84dbdade0a",
  measurementId: "G-JFG9HGHXMK"
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  number: yup
    .string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const db = getFirestore(app);

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true; 

    // Validation logic
    try {
      await schema.validate({
        name,
        surname,
        email,
        number,
        message,
      });

      if (!name || !surname || !email || !number || !message) {
        isValid = true;
      }
  
      if (!/^\d{10}$/.test(number)) {
        isValid = true;
      }
  
      if (!isValid) {
        setShowAlert(true);
        return;
      }
  

      await emailjs.sendForm(
        "service_9my0rso",
        "template_irq94z1",
        e.target,
        "QVi-OGP9K42h2ZXtr"
      );

      await addDoc(collection(db, 'Messages'), {
        name,
        surname,
        email,
        number,
        message,
      });

      setName('');
      setSurname('');
      setEmail('');
      setNumber('');
      setMessage('');

      setShowAlert(false); // Hide the alert on successful submission

      console.log('Form data sent to Firebase and email sent with emailjs!');
    } catch (error) {
      console.error('Validation error:', error.message);
    }
  };

  return (
    <div className="Container" id="contact">
      <h1>
        <strong>Contact</strong>
      </h1>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4"> Get in touch</h3>
          <address>
            <strong style={{ color: 'darkblue' }}>
              <i className="fas fa-envelope"></i> <br />
              Email: <a href="mailto:middasmokobane08@gmail.com" style={{ color: 'darkblue' }}>middasmokobane08@gmail.com</a>
            </strong>
            <br />
            <br />
            <strong style={{ color: 'darkblue' }}><i className="fas fa-phone"> </i> <br />  Phone:+27 79 604 6479</strong>
            <br />
            <br />
            <strong style={{ color: 'darkblue' }}>
              <i className="fas fa-map-marker-alt"></i>  <br />
              Location: <a href="https://www.google.com/search?q=lower+long+street%2C+foreshore%2C+cape+town&rlz=1C1CHBD_enZA1067ZA1067&oq=lower&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyCQgCEAAYQxiKBTIJCAMQLhhDGIoFMgwIBBAAGEMYsQMYigUyDAgFEAAYQxixAxiKBTIGCAYQRRg8MgYIBxBFGDzSAQgxNDQ3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" style={{ color: 'blue' }}>
                View on Map
              </a>
            </strong>
          </address>
          <p>{contactConfig.description}</p>
        </Col>

        <Col lg="7" className="d-flex align-items-center">
          <form className="contact_form w-100" onSubmit={handleSubmit}>
            {showAlert && (
              <div className="alert alert-danger">
                Fill in all fields and make sure your phone number is valid.
              </div>
            )}
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                  type="text"
                  value={surname}
                  onChange={handleSurnameChange}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="number"
                  name="number"
                  placeholder="Area Code + Number"
                  type="number"
                  pattern="\d{10}"
                  title="Please enter a 10-digit number"
                  maxLength="12"
                  value={number}
                  onChange={handleNumberChange}
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn">
                  Submit Message 😀
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
