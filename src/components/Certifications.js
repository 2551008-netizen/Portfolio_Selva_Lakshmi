import { motion } from "framer-motion";

export default function Certifications({ darkMode }) {
  const styles = {
    section: {
      padding: "80px 20px",
      background: darkMode ? "#0f0f0f" : "#faf7f2",
      display: "flex",
      justifyContent: "center",
      transition: "0.3s ease",
    },

    container: {
      width: "100%",
      maxWidth: "800px",
    },

    title: {
      color: darkMode ? "#ffffff" : "#6f4e37",
      marginBottom: "10px",
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "800",
    },

    subtitle: {
      color: darkMode ? "#d1d5db" : "#555555",
      marginBottom: "30px",
      textAlign: "center",
    },

    certCard: {
      background: darkMode
        ? "rgba(255,255,255,0.05)"
        : "rgba(255,255,255,0.7)",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(111,78,55,0.15)",
      padding: "18px 20px",
      borderRadius: "14px",
      marginBottom: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backdropFilter: "blur(12px)",
      boxShadow: darkMode
        ? "0 10px 25px rgba(0,0,0,0.4)"
        : "0 10px 25px rgba(0,0,0,0.08)",
      transition: "0.3s ease",
    },

    certText: {
      color: darkMode ? "#ffffff" : "#3b2f2f",
      fontWeight: "600",
      fontSize: "15px",
    },

    button: {
      padding: "8px 14px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      background: "#6f4e37",
      color: "#fff",
      fontWeight: "600",
      textDecoration: "none",
      fontSize: "13px",
    },
  };

  const certifications = [
    {
      name: "Introduction to Industry 4.0 and Industrial IoT",
      link: "/certificates/industry4.0.pdf",
    },
    {
      name: "Full Stack Web Development Intern – EY Global Delivery Services (AICTE)",
      link: "/certificates/EY.pdf",
    },
    {
      name: "Web Development Internship – Digisailor",
      link: "/certificates/Digisailor.pdf",
    },
    {
      name: "CLA: Programming Essentials in C – Cisco Networking Academy",
      link: "/certificates/CLA.pdf",
    },

  ];

  return (
    <motion.section
      id="certifications"
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div style={styles.container}>
        <h2 style={styles.title}>Certifications</h2>
        <p style={styles.subtitle}>
          My verified certifications and achievements
        </p>

        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            style={styles.certCard}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <span style={styles.certText}>{cert.name}</span>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              View
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}