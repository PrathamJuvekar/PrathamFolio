import "../style.css";

const projects = [
  {
    title: "Movie recommender based on emotion",
    description:
      "Suggests movies based on user’s mood using a questionnaire. Achieved 85% accuracy and improved user satisfaction.",
    tech: ["HTML5", "CSS3", "JS", "JSON Logic"],
  },
  {
    title: "Classroom Management Web App",
    description:
      "A responsive classroom portal that improved educator workflow by 70%. Includes modules for attendance, assignments, and reports.",
    tech: ["Android Studio", "Java", "Firebase"],
  },
  {
    title: "Smart Ration Distribution System",
    description:
      "IoT-powered biometric system for secure and transparent public distribution. Reduced human error by 90%, built with Firebase.",
    tech: ["IoT", "Firebase", "Ardiuno", "Web"],
  },
  
  {
  title: "Furzz",
  description:
    "A full-stack e-commerce app for pet products built as an outsourced project using React, Node.js, Express, and MongoDB. Includes user auth, cart, product browsing, and admin controls. Successfully deployed and used in production",
  tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
  },

  {
  title: "EasyEats",
  description:
    "A modern full-stack food ordering website featuring an interactive menu, real-time cart, and secure Razorpay payments. Integrated with MongoDB for data management and includes a VR food model viewer for immersive UX. Successfully completed as a freelance project with 80–90% feature adoption and user satisfaction.",
  tech: ["React", "Node.js", "MongoDB", "VR Model"],
  },
  
  {
  title: "Typing Test Web App",
  description:
    "An interactive typing test platform built using React and Tailwind CSS. Tracks real-time typing stats including WPM, CPM, accuracy, and mistakes. Features paragraph-style text, countdown timer options, result summary, and smooth UI/UX animations. Designed for both speed training and performance analysis.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
