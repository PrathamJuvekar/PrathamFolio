const Skills = () => {
  const frontendTools = [
    "fab fa-html5", "fab fa-css3-alt", "fab fa-js", "fab fa-react",
    "fas fa-code", "fab fa-figma", "fas fa-terminal", "fab fa-git-alt",
    "fab fa-github", "fas fa-cloud"
  ];

  const backendDatabase = [
    "fab fa-node", "fas fa-database", "fas fa-server", "fas fa-lock",
    "fab fa-npm", "fab fa-linux"
  ];

  const renderLoop = (icons) => (
    <>
      {[...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons].map((icon, i) => (
        <i key={i} className={`skill-icon ${icon}`} title={icon.split(" ").pop().replace("fa-", "").toUpperCase()}/>

      ))}
    </>
  );

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">TechStack</h2>

      <div className="marquee-wrapper">
        <div className="marquee marquee-left">
          {renderLoop(frontendTools)}
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee marquee-right">
          {renderLoop(backendDatabase)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
