import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";

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
        <a href="https://www.linkedin.com/in/volivers/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.75em' }}/></a>
        <a href="https://github.com/volivers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.75em' }}/></a>
        <a href="https://dribbble.com/volivers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} style={{ fontSize: '1.75em' }}/></a>
      </div>
      <div className="footer-copyright">
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};