import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="title">
      <div className="title">
        <h1>Blogs on the Medium</h1>
      </div>

      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Javascript behind the scenes</h5>
            <p className="card-text">
              <a href="https://medium.com/@ankit.kumarr/javascript-behind-the-scenes-5de42390cb2">
                Click to Read
              </a>
            </p>
            <p className="card-text">
              <small className="text-muted"></small>
              <a href="https://medium.com/@ankit.kumarr">Medium</a>
            </p>
          </div>
        </div>
        <div className="card">
          {/* <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "js.png"}
            alt="Card image cap"
          /> */}
          <div className="card-body">
            <h5 className="card-title">
              Type Coercion, Mutation and Loops in Javascript
            </h5>
            <p className="card-text">
              <a href="https://medium.com/@ankit.kumarr/type-coercion-mutation-and-loops-in-javascript-d1518faaf419">
                Click to Read
              </a>
            </p>
            <p className="card-text">
              <small className="text-muted"></small>
              <a href="https://medium.com/@ankit.kumarr">Medium</a>
            </p>
          </div>
        </div>
        <div className="card">
          {/* <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + "pp.jpg"}
            alt="Card image cap"
          /> */}
          <div className="card-body">
            <h5 className="card-title">
              Variables and Data Types in Javascript
            </h5>
            <p className="card-text">
              <a href="https://medium.com/@ankit.kumarr/variables-and-data-types-in-javascript-533f12aacaad">
                Click to Read
              </a>
            </p>
            <p className="card-text">
              <small className="text-muted"></small>
              <a href="https://medium.com/@ankit.kumarr">Medium</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
