import React from 'react';
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-wrapper">
      <div className="certificates-heading">
        <h2>Certificates</h2>
        <div className="vertical-line"></div>
      </div>
      <div className="card-columns">
        <div className="card">
          <img src="..." className="card-img-top" alt="Certificate 1" />
          <div className="card-body">
            <h5 className="card-title">Certificate Title 1</h5>
            <p className="card-text">Description of certificate 1.</p>
          </div>
        </div>
        <div className="card p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="Certificate 2" />
          <div className="card-body">
            <h5 className="card-title">Certificate Title 2</h5>
            <p className="card-text">Description of certificate 2.</p>
           
          </div>
        </div>
        {/* More card components can be added here */}
      </div>
    </div>
  );
}

export default Certificates;
