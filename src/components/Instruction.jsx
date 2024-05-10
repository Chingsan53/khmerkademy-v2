import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Instruction.css";

const instructionData = [
  {
    title: "Welcome to KhmerKademy!",
    content: "I will show you how to get started...",
    img: "/img/salute-women.png",
  },
  {
    title: "Step 1: Start learning by clicking on 'Lesson'",
    content: "There are several lessons that you can learn from this app",
    img: "/img/lesson.png",
  },
  {
    title: "Step 2: You can choose to read about 'Cambodian Culture'",
    content: "There are several topics about foods, tranditions, and culture.",
    img: "/img/amok-cartoon-small.png",
  },
  {
    title: "Step 3: Daily phrases that would refresh everyday",
    content:
      "There are many words that would refresh everyday so that you would get a joy of learning new words.",
    img: "/img/timetable.png",
  },
];

const Instructions = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < instructionData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/lesson");
    }
  };

  const handleSkip = () => {
    navigate("/lesson");
  };
  return (
    <div className="outer-all-component">
      <div className="main-instruction">
        <div className="instruction-picture">
          <img
            src={instructionData[currentStep].img}
            alt="instruction-pic"
            className="instruction-img"
          />
        </div>
        <div className="instruction-body">
          <div className="instruction-title">
            <h2>{instructionData[currentStep].title}</h2>
          </div>
          <div className="instruction-content">
            <p>{instructionData[currentStep].content}</p>
          </div>
          <div className="instruction-button">
            <button className="button-8" onClick={handleNextStep}>
              {currentStep === instructionData.length - 1
                ? "Start learning now"
                : "Next"}
            </button>
            {currentStep !== instructionData.length - 1 ? (
              <button className="button-8" onClick={handleSkip}>
                Skip
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
