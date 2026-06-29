import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero({ darkMode }) {
  const styles = {
    hero: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: darkMode ? "#121212" : "#faf7f2",
      padding: "20px",
      transition: "0.3s ease",
    },

    card: {
      width: "100%",
      maxWidth: "1100px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "50px",
      background: darkMode ? "#1e1e1e" : "#ffffff",
      padding: "50px",
      borderRadius: "18px",
      border: darkMode ? "1px solid #333" : "1px solid #f3e9dc",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      transition: "0.3s ease",
    },

    content: {
      flex: 1,
    },

    title: {
      fontSize: "48px",
      marginBottom: "10px",
      color: darkMode ? "#ffffff" : "#2b2b2b",
    },

    highlight: {
      color: "#6f4e37",
    },

    role: {
      color: "#8b5e3c",
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "15px",
      minHeight: "35px",
    },

    desc: {
      color: darkMode ? "#d1d5db" : "#555555",
      lineHeight: "1.8",
      marginBottom: "25px",
      fontSize: "17px",
      textAlign: "justify",
    },

    btn: {
      padding: "12px 24px",
      background: "#6f4e37",
      color: "white",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      display: "inline-block",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },

    image: {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "6px solid #8b5e3c",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  };

  return (
    <motion.section
      id="home"
      style={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={styles.card}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Hi, I'm <span style={styles.highlight}>Selva Lakshmi</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Computer Science Engineering Student",
              2000,
              "Aspiring Full Stack Developer",
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            style={styles.role}
          />

          <p style={styles.desc}>
            Passionate about building intelligent systems using Machine Learning,
            Deep Learning, and modern web technologies. Focused on solving
            real-world problems and creating impactful applications.
          </p>

          {/* ✅ PREMIUM BUTTON (NO hover variable needed) */}
          <motion.a
            href="/resume.pdf"
            download
            style={styles.btn}
            whileHover={{
              scale: 1.08,
              backgroundColor: "#5a3d2b",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </div>

        <img
          src="/profile.jpg"
          alt="Selva Lakshmi"
          style={styles.image}
        />
      </div>
    </motion.section>
  );
}