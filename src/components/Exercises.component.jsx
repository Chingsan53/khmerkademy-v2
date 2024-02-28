import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./Exercise.css";

const Exercise = () => {
  return (
    <Fragment>
      <div className="categories">
        <h1>Exercises</h1>
        <div className="categories-container">
          <Link className="card" to="/multiple-choice">
            <img className="card-image" src="/img/quiz.jpeg" alt="Quiz" />
            <div className="card-title">Quiz</div>
          </Link>
          <Link className="card" to="/fill-blank">
            <img className="card-image" src="/img/blank.png" alt="Quiz" />
            <div className="card-title">Fill in the Blanks</div>
          </Link>
          <Link className="card" to="/matching">
            <img className="card-image" src="/img/matching.avif" alt="Quiz" />
            <div className="card-title">Matching Pairs</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Exercise;
