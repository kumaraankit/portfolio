import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid mb-0">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <section className="paragraphs">
        <br></br>
        <p>
          I am a <span className="sd">Software Developer</span> having 2 years
          of working experience in top multinational corporation
        </p>
        <br></br>
        <p>
          Skills which applies to me are{" "}
          <span className="skill-react">React JS</span>, MongoDB,
          <span className="skill-node"> Node JS</span>, Express JS, Basics of
          Docker,<span className="skill-typescript">Typescript</span>, GIT{" "}
        </p>
        <br></br>
        <p>
          Developed applications using modern{" "}
          <span className="web">web development</span> stack(Javascript)
        </p>
        <br></br>
        <p>
          Developed <span className="ui">UI</span> components using React JS and
          design the same using CSS{" "}
        </p>
        <br></br>
        <p>
          Understanding of Rest API(Node JS),{" "}
          <span className="full-stack">Full Stack applications </span>
          and ability to implement and test it usingJest.
        </p>
        <br></br>
        <p>
          Very much <span className="passionate">passionate</span> about
          learning technologies and providing the best solution
        </p>
        <br></br>
      </section>
      <p>
        {" "}
        I also like to share post ,write <span className="blogs">blogs</span> on
        Javascript on medium and will continue to create application using{" "}
        <span className="modern">Modern tech stack</span>
      </p>
    </div>
  );
};

export default About;
