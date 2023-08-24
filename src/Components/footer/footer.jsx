
import './Footer.css'; // You can create a CSS file for styling

function Footer() {
  const _currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {_currentYear} Your Company. All rights reserved.</p>
        <div className="footer-social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
