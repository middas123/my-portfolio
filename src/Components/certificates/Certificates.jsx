// import React from 'react';
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-wrapper" id='certificates'>
      <div className="certificates-heading">
        <h2><strong>Certificates</strong></h2>
        <h />
        <div className="vertical-line"></div>
      </div>
      <div className="card-columns">
        <div className="card">
          <div className="card p-2">
            <br />
            <h5 className="card-title">AWS Cloud Practitioner</h5>
            <br />
            <p>It covers key concept & basic terms of AWS, Giving In-depth Understanding, It is designed for individuals who want to demonstrate their skill</p>
            <a href="src/assets/aws cloud prac.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
            <footer className="blockquote-footer">
            </footer>
          </div>
        </div>
        <div className="card">
          <div className="card p-2">
            <br />
            <h5 className="card-title">AWS DevOps</h5>
            <br />
            <p>Covers a range of topics, including continuous integration, continuous delivery, automation, infrastructure, & continuous integration</p>
            <a href="src/assets/DevOpss.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
            <footer className="blockquote-footer">
            </footer>
          </div>
        </div>
        <div className="card">
          <div className="card p-2">
            <br />
            <h5 className="card-title">IBM Cyber Security</h5>
            <br />
            <p>It covers a wide range of topics related to protecting digital assets, networks & information systems from cyber threats and attacks.</p>
            <a href="src/assets/cybersecurity.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
            <footer className="blockquote-footer">
            </footer>
          </div>
        </div>
        <div className="card">
          <div className="card p-2">
            <br />
            <h5 className="card-title">AWS Technical Essentials</h5>
            <br />
            <p>It covers essential concepts, terminology, and key services offered by AWS on coursera</p>
            <a href="src/assets/aws technical assen.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
            <footer className="blockquote-footer">
            </footer>
          </div>
        </div>
        <div className="card">
          <div className="card p-2">
            <br />
            <h5 className="card-title">Figma Design</h5>
            <br />
            <p>The Figma Design course provides instruction on how to effectively use Figma</p>
            <a href="src/assets/Figma.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
            <footer className="blockquote-footer">
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
