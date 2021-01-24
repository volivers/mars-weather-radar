export const Logo = () => {
  return (
    <div className="logo">
      <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
        <img src="https://www.pngkey.com/png/full/27-274741_nasa-tp-logo-nasa-worm-logo-png.png" alt="NASA logo" height="70" />
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/volivers/" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-linkedin" style={{ fontSize: '1.75em' }}></i></a>
        <a href="https://github.com/volivers" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" style={{ fontSize: '1.75em' }}></i></a>
      </div>
      <div className="footer-copyright">
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};