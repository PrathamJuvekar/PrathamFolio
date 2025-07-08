const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 <span className="font-semibold text-white">Pratham Juvekar</span>. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with{" "}
          <a href="https://reactjs.org" target="_blank" rel="noreferrer" className="tech-highlight">React</a>,{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="tech-highlight">JavaScript</a>{" "}
          &{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="tech-highlight">Tailwind CSS</a>.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/PrathamJuvekar" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pratham-juvekar-3807012b1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:prathamjuvekar20@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+918999751563" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
