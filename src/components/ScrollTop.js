import { useState, useEffect } from "react";

export default function ScrollTop({ darkMode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{
        ...styles.button,
        background: darkMode ? "#8b5e3c" : "#6f4e37",
      }}
    >
      ↑
    </button>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
    transition: "0.3s ease",
  },
};