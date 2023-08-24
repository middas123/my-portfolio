
import { Container , Row , Col } from 'react-bootstrap';
import { contactConfig } from './content_option';
import "./Contact.css";

const Contact = () => {
  return (
    <Container >
       <Row clasName="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">
              Contact Me
            </h1>  
          </Col>
       </Row>

       <Row className="sec_sp">
         <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4"> Get in touch</h3>
             <address>
                <strong>Email : developer@react.com</strong>
                <br/>
                <br/>
                <p>
                  <strong>Phone : +277 xx xxx xxx</strong>
                </p>
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
                      placeholder="Name"
                      type="text"
                      />
                 </Col>
                 <Col lg="6" className="form-group">
                    <input 
                      className="form-control rounded-0"
                      id="email"
                      placeholder="Email"
                      type="text"
                      />
                 </Col>
              </Row>
            </form>
         </Col>
       </Row>
    </Container>
  )
}

export default Contact