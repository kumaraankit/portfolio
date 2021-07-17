import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="title">Contact me on below links</h1>
      <div className="linkedIn">
        {" "}
        <a href="https://www.linkedin.com/in/ankit-kumar-929769159">
          LinkedIn Profile
        </a>
      </div>
      <div className="mail">
        <a href="ankit.k012@hotmail.com">Mail To</a>
      </div>{" "}
      <div className="Github">
        <a href="https://github.com/kumaraankit">Github Profile</a>
      </div>
      <div className="Medium">
        <a href="https://medium.com/@ankit.kumarr">Medium Profile</a>
      </div>
    </div>
  );
};

export default Contact;
