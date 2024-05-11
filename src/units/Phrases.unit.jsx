import "./Phrases.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
const Phrases = ({
  data,
  printTest,
  incrementScore,
  score,
  setScore,
  handleNext,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    if (currentIndex < Math.min(data.greeting.length) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentPhrase = data.greeting[currentIndex];

  const [playSound] = useSound(
    `../audio/phrases/phrase1-${currentIndex + 1}.mp3`
  );

  return (
    <div className="phrases-main">
      <div className="phrases-title">
        <h2>Basic Phrases</h2>
        {/* <h2>{score}</h2> */}
        {/* <progress value={score} max={data.greeting.length - 1} /> */}
        <div key={currentPhrase.id} className="each-phrase">
          <div className="main-item">
            <span>{currentPhrase.word}</span>
            <button className="button-8" onClick={playSound}>
              Hear it
            </button>
          </div>
          <div className="phrase-item">
            {" "}
            <div className="phrase-numbers">
              <span>{currentPhrase.english}</span>
            </div>
            <div className="phrase-numbers">
              <span>{currentPhrase.phonetic}</span>
            </div>
          </div>
        </div>
        <div className="button-container">
          {currentIndex >= Math.min(data.greeting.length) - 1 ? (
            <>
              <button
                className="button-8"
                onClick={() => {
                  setCurrentIndex(0);
                  setScore(0);
                }}
              >
                Learn again
              </button>{" "}
              {/* <Link to="/lessons" className="each-unit">
                <button className="button-8">Back to Lessons</button>{" "}
              </Link> */}
              <button className="button-8" onClick={handleNext}>
                Back to Unit 1
              </button>
            </>
          ) : (
            <button
              className="button-8"
              onClick={() => {
                showNext();
                printTest();
                incrementScore(1);
              }}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phrases;
