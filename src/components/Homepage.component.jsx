import "./Homepage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
export default function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return (
    <div className="main-homepage">
      <h1>Welcome to Khmerkademy! </h1>
      <div className="top-container">
        <div className="left-top">
          <h2>Your Journey Await... </h2>
          <div className="button-row">
            {!authUser ? (
              <Link className="button-8" to="/signup">
                Sign In
              </Link>
            ) : (
              <Link className="button-8" to="/lesson">
                Continue Learning
              </Link>
            )}
          </div>
        </div>
        <img
          className="image-class"
          src="./img/angkor-wat-cartoon.png"
          alt="top-pic"
        />
      </div>
      {/* <div className="middle-container">
        <h2>Gamification poured into every lesson</h2>
        <div className="lesson-preview">
          <div className="lesson-container">
            <img
              className="image-small"
              src="./img/cambodia-convo-small.jpg"
              alt="small-pic"
            />
            <h3>Personalized Learning</h3>
          </div>
          <div className="lesson-container">
            <img
              className="image-small"
              src="./img/cambodia-improve.jpg"
              alt="small-pic"
            />
            <h3>Improve Quickly</h3>
          </div>
          <div className="lesson-container">
            <img
              className="image-small"
              src="./img/stay-motivated.jpg"
              alt="small-pic"
            />
            <h3>Stay Motivated</h3>
          </div>
          <div className="lesson-container">
            <img
              className="image-small"
              src="./img/khmer-language.png"
              alt="small-pic"
            />
            <h3>New Lesson Every Week</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
}
