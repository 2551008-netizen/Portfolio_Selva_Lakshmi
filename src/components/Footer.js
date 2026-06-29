export default function Footer({ darkMode }) {
  const styles = {
    footer: {
      background: darkMode
        ? "linear-gradient(180deg, #121212, #0d0d0d)"
        : "linear-gradient(180deg, #6f4e37, #5a3d2c)",
      color: "white",
      textAlign: "center",
      padding: "40px 20px",
      marginTop: "60px",
      borderTop: darkMode
        ? "1px solid #2a2a2a"
        : "1px solid rgba(255,255,255,0.15)",
      transition: "0.3s ease",
    },

    name: {
      margin: "0 0 8px 0",
      fontSize: "26px",
      fontWeight: "700",
      letterSpacing: "0.5px",
    },

    role: {
      margin: "0 0 15px 0",
      fontSize: "14px",
      opacity: 0.9,
      color: "#f3e9dc",
    },

    socialRow: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      margin: "15px 0",
      flexWrap: "wrap",
    },

    link: {
      padding: "10px 14px",
      borderRadius: "10px",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "600",
      transition: "0.3s",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "white",
    },

    copy: {
      marginTop: "18px",
      fontSize: "13px",
      opacity: 0.85,
    },
  };

  return (
    <footer style={styles.footer}>
      {/* NAME */}
      <h3 style={styles.name}>Selva Lakshmi</h3>

      {/* ROLE */}
      <p style={styles.role}>
        Computer Science Engineering Student | Aspiring Full Stack Developer </p>

      {/* SOCIAL LINKS */}
      <div style={styles.socialRow}>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseOver={(e) =>
            (e.target.style.background = "rgba(255,161,22,0.25)")
          }
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseOver={(e) =>
            (e.target.style.background = "rgba(255,161,22,0.25)")
          }
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          LeetCode
        </a>

        <a
          href="https://github.com/2551008-netizen"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseOver={(e) =>
            (e.target.style.background ="rgba(255,161,22,0.25)")
          }
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          GitHub
        </a>
      </div>

      {/* COPYRIGHT */}
      <p style={styles.copy}>© 2026 Selva Lakshmi. All Rights Reserved.</p>
    </footer>
  );
}