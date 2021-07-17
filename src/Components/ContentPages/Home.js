import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="image">
          <img
            src={process.env.PUBLIC_URL + "pp.jpg"}
            className="rounded-circle float-right mt-5 ml-5 mr-5 "
            alt="Ankit"
            width="250"
            height="250"
          />
        </div>
        <div>
          <br></br>
          <h1 className="blink_name">Software Developer</h1>
        </div>
        <div className="paragraph">
          <p>Self taught software developer</p>
          <p>Passion for technology</p>
          <p>Transforming the ideas into solution</p>
        </div>
      </div>
    </>
  );
};
export default Home;
