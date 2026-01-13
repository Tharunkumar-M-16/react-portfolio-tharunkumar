function Hero() {
  return (
    <section id='head'>
      <h1>Hi, I'm Tharun Kumar</h1>

      <h3>Frontend Developer | React Learner</h3>

      <p>
        I'm a CSE student passionate about building clean, responsive
        web applications and improving my problem-solving skills.
      </p>

       <div className="hero-actions">
  <button
    onClick={() =>
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
    }
  >
    View Projects
  </button>

   
</div>


      <div>
        <a href="https://github.com/Tharunkumar-M-16">GitHub</a>
        <a href="https://linkedin.com/in/tharun-kumar-194a36326">LinkedIn</a>
      </div>
    </section>
  );
}

export default Hero;

