import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"; 

const Header = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button onClick={() => setMenuOpen(true)} className="hamburger-btn">
            <FaBars />
          </button>
          <h1 className="header-title">Pratham Juvekar</h1>
        </div>

        
      </header>

      {/* Slide-in Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Pratham</h2>
          <button onClick={() => setMenuOpen(false)} className="close-btn">
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar-nav">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>TechStack</button>
          <button onClick={() => scrollToSection("workexp")}>Experience</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
