const HeroSection = () => {
  return (
    <section className="hero" id="top">
      <div className="prompt">$ whoami</div>
      <h1>
        &gt; Hi, I&apos;m [Ashish Vasava].
        <br />
        <span className="green">I build things that work.</span>
      </h1>
      <p>
        Junior web developer, open to work. I build full-stack apps with the
        MERN stack.
      </p>
      <div className="btns">
        <a className="btn" href="#projects">
          run projects
        </a>
        <a className="btn ghost" href="#contact">
          contact --me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
