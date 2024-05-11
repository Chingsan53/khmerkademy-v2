import Phrases from "../Phrases.unit";
import data from "./onePhrases.json";
import useSound from "use-sound";

import { useNavigate } from "react-router-dom";

const OnePhrases = ({ printTest, incrementScore, score, setScore }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/unit-1");
  };

  return (
    <div className="">
      <Phrases
        data={data}
        printTest={printTest}
        incrementScore={incrementScore}
        score={score}
        setScore={setScore}
        handleNext={handleNext}
      />
      {/* <button className="button-8" onClick={handleNext}>
        next lesson
      </button> */}
    </div>
  );
};

export default OnePhrases;
