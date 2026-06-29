import { motion } from "framer-motion";
import { FaReact, FaJava,FaGithub } from "react-icons/fa";
export default function Skills({ darkMode }) {
  const styles = {
    section: {
      padding: "80px 20px",
      background: darkMode
        ? "linear-gradient(180deg,#0f0f0f,#121212)"
        : "linear-gradient(180deg,#faf7f2,#ffffff)",
      display: "flex",
      justifyContent: "center",
    },

    container: {
      width: "100%",
      maxWidth: "900px",
    },

    title: {
      textAlign: "center",
      marginBottom: "35px",
      fontSize: "34px",
      fontWeight: "800",
      color: darkMode ? "#ffffff" : "#6f4e37",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
    },

    card: {
      background: darkMode
        ? "rgba(255,255,255,0.05)"
        : "rgba(255,255,255,0.75)",
      backdropFilter: "blur(14px)",
      padding: "22px",
      borderRadius: "18px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(111,78,55,0.15)",
      boxShadow: darkMode
        ? "0 10px 30px rgba(0,0,0,0.4)"
        : "0 10px 30px rgba(0,0,0,0.08)",
    },

    subTitle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px",
      fontSize: "16px",
      fontWeight: "700",
      color: darkMode ? "#ffffff" : "#6f4e37",
    },

    badges: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },

    badge: {
      background: darkMode
        ? "rgba(139, 94, 60, 0.25)"
        : "linear-gradient(135deg, #8b5e3c, #a8744a)",
      color: "#fff",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "600",
    },

    icon: {
      fontSize: "22px",
    },
  };

  const skillData = [
    {
      title: "Programming Languages",
      icon: (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          <FaJava color="#f89820" />
        </motion.div>
      ),
      skills: ["Java", "Python", "SQL"],
    },
    {
      title: "Web Technologies",
      icon: (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <FaReact color="#61DBFB" />
        </motion.div>
      ),
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
    },
  {
  title: "Tools",
  icon: (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <FaGithub color="#060606" />
    </motion.div>
  ),
  skills: ["VS Code", "Eclipse", "Jupyter Notebook", "GitHub"],
},
  ];

  return (
    <motion.section
      id="skills"
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div style={styles.container}>
        <h2 style={styles.title}>Skills</h2>

        <div style={styles.grid}>
          {skillData.map((group, index) => (
            <motion.div
              key={index}
              style={styles.card}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={styles.subTitle}>
                {group.icon}
                {group.title}
              </h3>

              <div style={styles.badges}>
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    style={styles.badge}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}