import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="edu">
      <h1 className="title">Qualification Details</h1>
      <table className="table table-hover table-dark bg-danger mt-5 ">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Education</th>
            <th scope="col">Board</th>
            <th scope="col">Aggregate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>B.E</td>
            <td>V.T.U</td>
            <td>7.99 CGPA</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>12th</td>
            <td>CBSE</td>
            <td>80.4</td>
          </tr>
          <th scope="row">3</th>
          <td>10th</td>
          <td>CBSE</td>
          <td>8.6 CGPA</td>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
