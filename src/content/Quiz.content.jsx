import { useState } from "react";
import "./FillTheBlank.css";
import { Link, useNavigate } from "react-router-dom";
const blankWords = [
  {
    id: 1,
    prompt: "Good evening ",
    translation: "",
    phonetic: "",
    options: [
      { text: "ទិវាសួស្តី", phonetic: "Tivea soursdei" },
      { text: "អរុណសួស្តី", phonetic: "Ahrun soursdei" },
      { text: "សាយ័ន្តសួស្តី", phonetic: "Sayaun soursdei" },
      { text: "រាត្រីសួស្តី", phonetic: "Reatrei soursdei" },
    ],
    answer: "សាយ័ន្តសួស្តី",
  },
  {
    id: 2,
    prompt: "How are you doing? (with friend)",
    translation: "តើ______សុខសប្បាយទេ? (មិត្តភ័ក្ដិ)",
    phonetic: "Ter _____ sok sabbay te?",
    options: [
      { text: "តើអ្នកសុខសប្បាយទេ?", phonetic: "Ter Neak sok sabbay te?" },
      { text: "តើខ្ញុំសុខសប្បាយទេ?", phonetic: "Ter Khnom sok sabbay te?" },
      { text: "តើឯងសុខសប្បាយទេ?", phonetic: "Ter aeng sok sabbay te?" },
      { text: "តើលោកសុខសប្បាយទេ?", phonetic: "Ter lok sok sabbay te" },
    ],
    answer: "តើឯងសុខសប្បាយទេ?",
  },
  {
    id: 3,
    prompt: "What is your name?",
    translation: "តើអ្នកមានអាយុអ្វី?",
    phonetic: "Ter neak mean ______ avey?",
    options: [
      { text: "តើអ្នកមានអាយុអ្វី?", phonetic: "Ter nak man ah yuk avey" },
      {
        text: "តើអ្នកមានបងប្អូនអ្វី?",
        phonetic: "Ter nak man bong paoun avey",
      },
      { text: "តើអ្នកមានបងស្រីអ្វី?", phonetic: "Bong Srei" },
      { text: "តើអ្នកមានឈ្មោះអ្វី?", phonetic: "Chamous" },
    ],
    answer: "តើអ្នកមានឈ្មោះអ្វី?",
  },
  {
    id: 4,
    prompt: "I’m Devy.",
    translation: "ខ្ញុំមាន____ថា ទេវី។",
    phonetic: "Khnom mean _____ tha Devy",
    options: [
      { text: "ខ្ញុំមានលោកថា ទេវី។", phonetic: "Lok" },
      { text: "ខ្ញុំមានអ្នកថា ទេវី។", phonetic: "Neak" },
      { text: "ខ្ញុំមានអាយុថា ទេវី។", phonetic: "Ah yuk" },
      { text: "ខ្ញុំមានឈ្មោះថា ទេវី។", phonetic: "Chamous" },
    ],
    answer: "ខ្ញុំមានឈ្មោះថា ទេវី។",
  },
  {
    id: 5,
    prompt: "Great to hear that",
    translation: "_____ណាស់ដែរបានដឹង។",
    phonetic: "_____ nas dae ban deong",
    options: [
      { text: "រីករាយណាស់ដែរបានដឹង។", phonetic: "Rik Reay" },
      { text: "ស្អប់ណាស់ដែរបានដឹង។", phonetic: "Saorb" },
      { text: "មិនចូលចិត្តណាស់ដែរបានដឹង។", phonetic: "Min Chol Chet" },
      { text: "ស្រលាញ់ណាស់ដែរបានដឹង។", phonetic: "Srolanh" },
    ],
    answer: "រីករាយណាស់ដែរបានដឹង។",
  },
  {
    id: 6,
    prompt: "Where are you from?",
    translation: "តើអ្នកមកពី_______ណា?",
    phonetic: "Ter neak mok pi ______ na",
    options: [
      { text: "តើអ្នកមកពីកន្លែងណា?", phonetic: "Kon laeng" },
      { text: "តើអ្នកមកពីស្អប់ណា?", phonetic: "Saorb" },
      { text: "តើអ្នកមកពីប្រទេសណា?", phonetic: "Bro tes" },
      { text: "តើអ្នកមកពីស្រលាញ់ណា?", phonetic: "Srolanh" },
    ],
    answer: "តើអ្នកមកពីប្រទេសណា?",
  },
];
const Quiz = () => {
  //useState
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showContinue, setShowContinue] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = blankWords[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setFeedback("Correct");
      setShowContinue(true);
    } else {
      setFeedback("Incorrect");
      setShowContinue(false);
    }
  };

  const handleContinue = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < blankWords.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCurrentQuestionIndex(-1);
    }
    setFeedback("");
    setShowContinue(false);
  };

  if (currentQuestionIndex === -1) {
    return (
      <div className="congratulations-1">
        Congrats{" "}
        <Link to="/lessons" className="each-unit">
          <button className="button-8">Back to Lessons</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="fillintheblank">
      <h2>Quiz</h2>
      <div className="blank-components">
        <div>
          <div className="blank-prompt">
            <h3>{currentQuestion.prompt}</h3>
            {/* <h3>{currentQuestion.translation}</h3>
            <h3>{currentQuestion.phonetic}</h3> */}
            <button>🔊</button>
          </div>
          <div className="blank-answers-choice">
            <div className="correct-answer-choice">
              {currentQuestion.options.map((option) => (
                <button
                  className="button-1"
                  key={option.text}
                  onClick={() => {
                    handleOptionClick(option.text);
                  }}
                >
                  {option.text}
                  <br />
                  {option.phonetic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="blank-feedback">{feedback}</div>
      <div className="blank-buttons-container">
        {showContinue && (
          <button className="button-8" onClick={handleContinue}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
