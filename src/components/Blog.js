import { motion } from "framer-motion";

export default function Blog({ darkMode }) {
  const styles = {
    section: {
      padding: "80px 20px",
      background: darkMode
        ? "linear-gradient(180deg,#0f0f0f,#121212)"
        : "linear-gradient(180deg,#faf7f2,#ffffff)",
      display: "flex",
      justifyContent: "center",
    },

    card: {
      width: "100%",
      maxWidth: "800px",
      background: darkMode
        ? "rgba(30,30,30,0.9)"
        : "rgba(255,255,255,0.9)",
      padding: "40px",
      borderRadius: "18px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(111,78,55,0.15)",
      boxShadow: darkMode
        ? "0 15px 40px rgba(0,0,0,0.4)"
        : "0 15px 40px rgba(0,0,0,0.08)",
      textAlign: "center",
      backdropFilter: "blur(10px)",
    },

    title: {
      fontSize: "28px",
      fontWeight: "800",
      color: darkMode ? "#ffffff" : "#6f4e37",
      marginBottom: "12px",
    },

    text: {
      color: darkMode ? "#d1d5db" : "#555",
      marginBottom: "25px",
      lineHeight: "1.7",
      fontSize: "15px",
    },

    placeholder: {
      padding: "18px",
      borderRadius: "12px",
      background: darkMode
        ? "rgba(255,255,255,0.05)"
        : "#f3e9dc",
      color: darkMode ? "#d1d5db" : "#6f4e37",
      fontStyle: "italic",
      border: darkMode
        ? "1px dashed rgba(255,255,255,0.2)"
        : "1px dashed rgba(111,78,55,0.3)",
    },
  };

  return (
    <motion.section
      id="blog"
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={styles.card}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={styles.title}>Blog</h2>

        <p style={styles.text}>
          I’ll be sharing my learnings, projects, and development journey here soon.
        </p>

        <div style={styles.placeholder}>
          Blog posts will be added soon...
        </div>
      </motion.div>
    </motion.section>
  );
}