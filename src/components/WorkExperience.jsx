const WorkExperience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <h3 className="experience-role">Full Stack Developer Intern</h3>
            <span className="experience-duration">June – July 2025</span>
          </div>
          <p className="experience-company">Aimerz.ai</p>
          <ul className="experience-tasks list-disc list-inside mt-2 text-github-gray text-sm leading-relaxed">
            <li>Built responsive UI components using React and Tailwind CSS.</li>
            <li>Contributed to real-world project under mentorship.</li>
            <li>Enhanced user experience and accessibility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
