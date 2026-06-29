import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title:
        "Transformer-Based ECG Analysis for Early Myocardial Ischemia Detection",
      desc: "Designed and developed a deep learning system using Transformer-based neural networks to analyze ECG signals for the early detection of cardiac abnormalities. Collected and preprocessed ECG datasets through noise removal, normalization, and heartbeat segmentation to improve data quality. Trained the Transformer model to capture long-range temporal dependencies and accurately classify heart conditions. Evaluated the model using accuracy, precision, recall, and F1-score, achieving improved prediction performance. The project demonstrates practical expertise in deep learning, signal processing, medical AI, and predictive analytics.",
      tag: "Deep Learning",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVu9ZrGs0y0onJUJbh3w6RPHi2nQ0BdW5ub-uaXR8W8QRh1E-nJ7t6EXG&s=10" },   {
      title:
        "Coronary Heart Disease Prediction using Comparative Machine Learning",
      desc: "Built a predictive disease classification system using clinical datasets and multiple machine learning algorithms to identify health conditions accurately. Performed data preprocessing, feature selection, and data normalization to improve model performance. Trained and compared algorithms such as Logistic Regression, Decision Tree, Random Forest, Support Vector Machine, and XGBoost to determine the best-performing model. Evaluated performance using metrics including accuracy, precision, recall, F1-score, and AUC-ROC. The project demonstrates expertise in machine learning, data preprocessing, model comparison, and predictive healthcare analytics.",
      tag: "Machine Learning",
      image:
    "https://static.vecteezy.com/system/resources/thumbnails/069/261/619/small/man-suffering-from-chest-pain-holding-heart-area-heart-attack-warning-concept-with-heartbeat-graph-overlay-cardiovascular-disease-risk-medical-emergency-illustration-photo.jpg"    },
    {
      title: "Personalized Career Roadmap Generation",
      desc: "Developed a web-based Career Guidance System using ReactJS for the frontend and Python for the backend to assist users in making informed career decisions. Designed an interactive and responsive interface that provides personalized career recommendations based on user inputs and interests. Implemented skill gap analysis to identify missing competencies and suggest relevant learning resources. Integrated resume guidance features to help users improve their resumes for better job opportunities. The project demonstrates expertise in full-stack web development, frontend design, backend integration, and career-focused recommendation systems.",
      tag: "Full Stack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLjxLzckCxFIZmSwpGTbk1voTEr-oOPcAlYXfGVMGXQ&s=10"    },
    
  ];

  return (
    <motion.section
      id="projects"
      style={{
        padding: "90px 20px",
        background: darkMode
          ? "linear-gradient(180deg,#0f0f0f,#121212)"
          : "linear-gradient(180deg,#faf7f2,#ffffff)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div style={{ maxWidth: "950px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "35px",
            color: "#6f4e37",
            fontWeight: "700",
          }}
        >
          Projects 
        </h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateX: -4,
              rotateY: 4,
              scale: 1.02,
              y: -5,
            }}
            transition={{ duration: 0.3 }}
            style={{
              marginBottom: "20px",
              borderRadius: "18px",
              overflow: "hidden",
              background: darkMode
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.65)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: darkMode
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(111,78,55,0.15)",
              boxShadow: darkMode
                ? "0 10px 30px rgba(0,0,0,0.35)"
                : "0 10px 30px rgba(0,0,0,0.08)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* HEADER */}
            <div
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              style={{
                padding: "22px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  color: darkMode ? "#fff" : "#000",
                  fontWeight: "700",
                }}
              >
                {project.title}
              </h3>

              <span
                style={{
                  fontSize: "24px",
                  color: "#6f4e37",
                  fontWeight: "bold",
                }}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* CONTENT */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 22px 22px" }}>
                    <p
                      style={{
                        lineHeight: "1.8",
                        textAlign: "justify",
                        color: darkMode ? "#d1d5db" : "#555",
                      }}
                    >
                      {project.desc}
                    </p>

                    {/* IMAGE FOR ALL PROJECTS */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          marginTop: "12px",
                          borderRadius: "12px",
                          maxHeight: "240px",
                          objectFit: "cover",
                          boxShadow: darkMode
                            ? "0 8px 20px rgba(0,0,0,0.4)"
                            : "0 8px 20px rgba(0,0,0,0.15)",
                        }}
                      />
                    )}

                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        padding: "6px 14px",
                        borderRadius: "25px",
                        background: "#6f4e37",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}