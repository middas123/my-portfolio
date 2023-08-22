import React from 'react';
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-wrapper" id='certificates'>
      <div className="certificates-heading">
        <h2>Certificates</h2>
        <h />
        <div className="vertical-line"></div>
      </div>
      <div className="card-columns">
        <div className="card">
          
          <div className="card p-2">
            <h5 className="card-title">AWS Cloud Practitioner</h5>
            <br />
            <p className="card-text">It covers key concepts, benefits, and basic terms of AWS, Giving Indepth Understanding, It is designed for individuals who want to demonstrate their foundational knowledge and understanding of cloud computing concepts </p>
            <button className="btn btn-primary">View Certificate</button>
            <footer className="blockquote-footer">
              
            </footer>
          </div>
        </div>
        <div className="card p-2">
          <br />
        <h5 className="card-title">AWS DevOps</h5>
           <br />
            <p>covers a range of topics, including continuous integration, continuous delivery, automation,infrastructure, & continuous integration</p>
            <button className="btn btn-primary">View Certificate</button>
            <footer className="blockquote-footer">
              
            </footer>
          
        </div>
        <div className="card p-2">
          <br />
        <h5 className="card-title">IBM Cyber Security</h5>
           <br />
            <p>It covers a wide range of topics related to protecting digital assets, networks & information systems from cyber threats and attacks.</p>
            <button className="btn btn-primary">View Certificate</button>
            <footer className="blockquote-footer">
              
            </footer>
         
        </div>
        <div className="card">
         
          <div className="card-body">
          <h5 className="card-title">AWS Technical Essentials</h5>
          <br />
            <p className="card-text"> It covers essential concepts, terminology, and key services offered by AWS.</p>
            <button className="btn btn-primary">View Certificate</button>
            <footer className="blockquote-footer">
              
            </footer>
           
          </div>
        </div>
       
        <div className="card p-2">
          <br />
        <h5 className="card-title">Figma Design</h5>
          <br />
            <p>The Figma Design course provides instruction on how to effectively use Figma, a popular cloud-based design</p>
            <button className="btn btn-primary">View Certificate</button>
            <footer className="blockquote-footer">
              
            </footer>
      
        </div>
      
      </div>
    </div>
  );
}

export default Certificates;
