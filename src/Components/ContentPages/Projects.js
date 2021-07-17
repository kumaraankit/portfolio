import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="project-description">Personal Projects Description</h1>
      <div className="card-deck">
        <div className="card">
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "js.png"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Random Quote Generator</h5>
            <p className="card-text">
              <a href="https://github.com/kumaraankit/quotes-generator">
                Github source code
              </a>
            </p>
            <p className="card-text">
              <small className="text-muted">
                <a href="https://kumaraankit.github.io/quotes-generator/">
                  Live Demo
                </a>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          {/* <img
            className="card-img-top"
            // src={process.env.PUBLIC_URL + "pp.jpg"}
            alt="Card image cap"
          /> */}
          <div className="card-body">
            <h5 className="card-title">Many More Projects coming soon</h5>
            <p className="card-text">Stay tuned</p>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
          </div>
        </div>
        <div className="card">
          {/* <img
            className="card-img-top"
            // src={process.env.PUBLIC_URL + "pp.jpg"}
            alt="Card image cap"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
