import { motion } from "framer-motion";

export default function About({ darkMode }) {
  const styles = {
    section: {
      padding: "80px 20px",
      background: darkMode ? "#121212" : "#faf7f2",
      display: "flex",
      justifyContent: "center",
      transition: "0.3s ease",
    },

    card: {
      maxWidth: "800px",
      background: darkMode ? "#1e1e1e" : "#ffffff",
      padding: "30px",
      borderRadius: "14px",
      border: darkMode
        ? "1px solid #333"
        : "1px solid #f3e9dc",
      boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
      transition: "0.3s ease",
    },

    title: {
      color: darkMode ? "#ffffff" : "#6f4e37",
      marginBottom: "10px",
    },

    subTitle: {
      marginTop: "20px",
      color: "#8b5e3c",
    },

    text: {
      color: darkMode ? "#d1d5db" : "#555555",
      lineHeight: "1.8",
      textAlign:"justify",
    },

    list: {
      color: darkMode ? "#d1d5db" : "#555555",
      lineHeight: "1.8",
      paddingLeft: "18px",
    },
    educationContainer: {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "15px",
},

educationCard: {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  background: darkMode ? "#252525" : "#f3e9dc",
  padding: "18px",
  borderRadius: "12px",
},

year: {
  minWidth: "120px",
  background: "#6f4e37",
  color: "#fff",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
  fontWeight: "bold",
},

degree: {
  margin: 0,
  color: darkMode ? "#ffffff" : "#2b2b2b",
},

college: {
  margin: "5px 0",
  color: darkMode ? "#d1d5db" : "#555555",
},

score: {
  margin: 0,
  color: "#8b5e3c",
  fontWeight: "600",
},
  };

 return (
  <motion.section
    id="about"
    style={styles.section}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div style={styles.card}>
      <h2 style={styles.title}>About</h2>

      <p style={styles.text}>
        Computer Science and Engineering graduate currently pursuing
        postgraduate studies, with a strong foundation in software
        development, programming, and information technology.
        Passionate about building innovative IT solutions and exploring
        emerging technologies.
      </p>

      <h3 style={styles.subTitle}>Education</h3>

      <div style={styles.educationContainer}>

        <motion.div
          style={styles.educationCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
        >
          <div style={styles.year}>2025 - 2027</div>

          <div>
            <h4 style={styles.degree}>M.E CSE</h4>
            <p style={styles.college}>National Engineering College</p>
            <p style={styles.score}>GPA: 9.0 (Pursuing)</p>
          </div>
        </motion.div>

        <motion.div
          style={styles.educationCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
        >
          <div style={styles.year}>2021 - 2025</div>

          <div>
            <h4 style={styles.degree}>B.E CSE</h4>
            <p style={styles.college}>Francis Xavier Engineering College</p>
            <p style={styles.score}>CGPA: 8.83 (First Class with Distinction 🏆)</p>
          </div>
        </motion.div>

        <motion.div
          style={styles.educationCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
        >
          <div style={styles.year}>2019 - 2021</div>

          <div>
            <h4 style={styles.degree}>Higher Secondary Certificate</h4>
            <p style={styles.score}>90%</p>
          </div>
        </motion.div>

        <motion.div
          style={styles.educationCard}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
        >
          <div style={styles.year}>2018 - 2019</div>

          <div>
            <h4 style={styles.degree}>Secondary School Leaving Certificate</h4>
            <p style={styles.score}>85%</p>
          </div>
        </motion.div>

      </div>
    </div>
  </motion.section>
);
}