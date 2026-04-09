function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>RijanQT's Website</h3>
            <p>Just another project to escape College</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: rijanpalomera@gmail.com</p>
            <p>Course: Bachelor of Science in Information Technology</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Developed by RijanQT.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
