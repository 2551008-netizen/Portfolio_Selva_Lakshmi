import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 30px",
      background: darkMode
        ? "rgba(30,30,30,0.95)"
        : "rgba(255,255,255,0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: darkMode
        ? "1px solid #333"
        : "1px solid #f3e9dc",
      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      zIndex: 1000,
    },

    logo: {
      margin: 0,
      color: "#6f4e37",
      fontSize: "24px",
      fontWeight: "700",
      textDecoration: "none",
    },

    links: {
      display: "flex",
      gap: "25px",
      alignItems: "center",
    },

    link: {
      color: darkMode ? "#ffffff" : "#6f4e37",
      textDecoration: "none",
      fontWeight: "600",
      transition: "0.3s",
    },

    activeLink: {
      color: "#a47148",
      borderBottom: "2px solid #a47148",
      paddingBottom: "4px",
    },

    themeBtn: {
      background: "#6f4e37",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
    },

    hamburger: {
      fontSize: "30px",
      cursor: "pointer",
      color: darkMode ? "#ffffff" : "#6f4e37",
    },

    mobileMenu: {
      position: "absolute",
      top: "75px",
      right: "20px",
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      gap: "15px",
      padding: "20px",
      minWidth: "220px",
      borderRadius: "12px",
      background: darkMode ? "#1e1e1e" : "#ffffff",
      boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    },
  };

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={closeMenu}
      style={{
        ...styles.link,
        ...(location.pathname === to ? styles.activeLink : {}),
      }}
    >
      {children}
    </Link>
  );

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        Selva Lakshmi
      </Link>

      {!isMobile ? (
        <div style={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/certifications">Certificates</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={styles.themeBtn}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      ) : (
        <>
          <div
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <div style={styles.mobileMenu}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/certifications">Certificates</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={styles.themeBtn}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </>
      )}
    </nav>
  );
}