import { useState } from "react";
import "./Conversation.unit.css";
import { Link, useNavigate } from "react-router-dom";
const Conversation = ({ data, handleNext, user }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleContinue = () => {
    if (
      currentIndex <
      Math.min(data.student_a.length, data.student_b.length) - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const Navigate = useNavigate();

  const renderMessage = (studentData, className, index) => (
    <div className={className}>
      <span>{studentData[index].english}</span> <br />
      <span>
        <strong>Khmer: </strong>
        {studentData[index].khmer}
      </span>{" "}
      <br />
      <span>
        <strong>Phonetic: </strong>
        {studentData[index].phonetic}
      </span>
    </div>
  );

  return (
    <div className="convo-main">
      <div className="convo-outer">
        <div className="convo-component">
          <div className="convo-border">
            {currentIndex < data.student_a.length &&
              renderMessage(data.student_a, "convo-left", currentIndex)}
          </div>
          <img
            src="../section-img/white-khmer-girl.png"
            alt="left-person"
            className="convo-img"
          />
        </div>
        <div className="convo-component">
          <div className="convo-border">
            {currentIndex < data.student_b.length &&
              renderMessage(data.student_b, "convo-right", currentIndex)}
          </div>
          <img
            src="../section-img/white-khmer-boy.png"
            alt="left-person"
            className="convo-img"
          />
        </div>
      </div>

      <div className="button-container">
        {currentIndex >=
        Math.min(data.student_a.length, data.student_b.length) - 1 ? (
          <>
            <button className="button-8" onClick={() => setCurrentIndex(0)}>
              Learn again
            </button>{" "}
            <button className="button-8" onClick={handleNext}>
              Back to lesson
            </button>
          </>
        ) : (
          <button className="button-8" onClick={handleContinue}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};
export default Conversation;
