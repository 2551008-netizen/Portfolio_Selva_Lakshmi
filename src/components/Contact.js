import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const styles = {
    section: {
      padding: "100px 20px",
      background: darkMode ? "#121212" : "#faf7f2",
      display: "flex",
      justifyContent: "center",
    },

    card: {
      width: "100%",
      maxWidth: "900px",
      background: darkMode ? "#1e1e1e" : "#ffffff",
      padding: "40px",
      borderRadius: "22px",
      border: darkMode ? "1px solid #333" : "1px solid #f3e9dc",
      boxShadow: "0 15px 40px rgba(0,0,0,0.10)",
      textAlign: "center",
    },

    title: {
      color: darkMode ? "#fff" : "#6f4e37",
      fontSize: "36px",
      marginBottom: "20px",
      fontWeight: "700",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
      marginBottom: "30px",
      justifyItems: "center",
    },

    item: {
      background: darkMode
        ? "rgba(255,255,255,0.05)"
        : "rgba(255,255,255,0.7)",
      padding: "18px",
      borderRadius: "14px",
      color: darkMode ? "#fff" : "#2b2b2b",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      minHeight: "90px",
      border: darkMode ? "1px solid #333" : "1px solid #eee",
      width: "100%",
      maxWidth: "260px",
    },

    buttonRow: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      marginTop: "10px",
    },

    button: {
      padding: "12px 18px",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: "600",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",
    },

    linkedin: {
      background: "linear-gradient(135deg, #0077b5, #00a0dc)",
      color: "#fff",
      boxShadow: "0 8px 20px rgba(0,119,181,0.3)",
    },

    leetcode: {
      background: "linear-gradient(135deg, #ffa116, #ffb84d)",
      color: "#1a1a1a",
      boxShadow: "0 8px 20px rgba(255,161,22,0.3)",
    },
 github: {
  background: "linear-gradient(135deg, #22c55e, #4ade80)",
  color: "#fff",
  boxShadow: "0 8px 20px rgba(34, 197, 94, 0.35)",
},

    formTitle: {
      margin: "25px 0 10px",
      fontSize: "22px",
      color: darkMode ? "#fff" : "#6f4e37",
    },

    input: {
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      marginBottom: "12px",
      outline: "none",
    },

    textarea: {
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      minHeight: "120px",
      outline: "none",
      resize: "none",
    },

    submitBtn: {
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      background: "#6f4e37",
      color: "#fff",
      fontWeight: "bold",
      marginTop: "12px",
    },

    popup: {
      marginTop: "15px",
      padding: "10px",
      borderRadius: "8px",
      background: "#4CAF50",
      color: "#fff",
      fontWeight: "600",
    },
  };

  return (
    <motion.section id="contact" style={styles.section}>
      <motion.div style={styles.card}>
        <h2 style={styles.title}>Contact</h2>

        <div style={styles.grid}>
          {[
            "📞 +91 8870709328",
            "📧 selvalakshmi1384@gmail.com",
            "📍 Tirunelveli, Tamil Nadu",
          ].map((item, i) => (
            <motion.div key={i} style={styles.item}>
              {item}
            </motion.div>
          ))}
        </div>

        {/* Social Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <motion.div style={styles.item}>
            💼 LinkedIn
            <div style={styles.buttonRow}>
              <motion.a
                href="https://www.linkedin.com/in/selva-lakshmi-d-638899243/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.linkedin }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
              </motion.a>
            </div>
          </motion.div>

          <motion.div style={styles.item}>
            🧠 LeetCode
            <div style={styles.buttonRow}>
              <motion.a
                href="https://leetcode.com/u/Selva_Lakshmi_D_13/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.leetcode }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
              </motion.a>
            </div>
          </motion.div>
          <motion.div style={styles.item}>
            🐙 Github
            <div style={styles.buttonRow}>
              <motion.a
                href="https://github.com/2551008-netizen"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.github }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
              </motion.a>
            </div>
          </motion.div>
        </div>

        <h3 style={styles.formTitle}>Let's Connect 🤝🏻</h3>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          action="https://formspree.io/f/xnjkjjgo"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <motion.button
            type="submit"
            style={styles.submitBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </form>

        {success && (
          <motion.div style={styles.popup}>
            ✅ Message sent successfully!
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
}