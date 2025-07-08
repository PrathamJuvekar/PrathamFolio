import "../style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-box">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Home</p>

          <h1 className="hero-heading">I'm Pratham</h1>

          <p className="hero-subtext mb-1">
            Full-Stack Developer &bull; React &bull; Firebase &bull; Flutter &bull; Node.js
          </p>
          <p className="hero-subtext">
            I build real-time, scalable solutions that solve real-world problems.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="mailto:prathamjuvekar20@gmail.com" className="btn-primary">Contact Me</a>
          <a href="https://drive.google.com/file/d/18i3bVP6R6E3cgkfV6tXqEy-b2Q0Yzr2k/view?usp=drive_linkhttps://drive.google.com/file/d/18i3bVP6R6E3cgkfV6tXqEy-b2Q0Yzr2k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume</a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
