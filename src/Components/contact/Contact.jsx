
import {  Row , Col } from 'react-bootstrap';
import { contactConfig } from './content_option';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='Container' id='contact' >
       <h1 ><strong>Contact</strong></h1>
       {/* <Row className="mb-5 mt-3">
          <Col lg="8">
            <h5 className="display-6 mb-4">
              Contact me
            </h5>  
          </Col>
       </Row> */}
           <br />
           <br />
            <Row className="sec_sp">
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4"> Get in touch</h3>
                <address>
                    <strong style={{ color: 'darkblue' }}><i className="fas fa-envelope"></i> <br /> Email: middasmokobane08@gmail.com</strong>
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
            <form className="contact_form w-100">
              <Row>
                 <Col lg="6" className="form-group">
                    <input 
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      />
                 </Col>
                 <Col lg="6" className="form-group">
                    <input 
                      className="form-control rounded-0"
                      id="surname"
                      name="surname"
                      placeholder="Surname"
                      type="text"
                      />
                 </Col>
                  <Col lg="6" className="form-group">
                    <input 
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      />
                 </Col>
                  <Col lg="6" className="form-group">
                    <input 
                        className="form-control rounded-0"
                        id="number"
                        name="number"
                        placeholder="Area Code + Number"
                        type="text"
                        pattern="\d{10}" // Use a regex pattern to validate 10 digits
                        title="Please enter a 10-digit number"
                        maxLength="12" // Maximum length of 12 characters (including area code and digits)
                    />
                </Col>

              </Row>
              <textarea
                        className="form-control rounded-0" id="message"
                        name="message"
                        placeholder="Message"
                        rows="5"
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">Submit</button>
                </Col>
              </Row>
            </form>
         </Col>
       </Row>
   </div>
  )
}

export default Contact