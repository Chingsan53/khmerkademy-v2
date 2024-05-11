import "./EachUnit.css";
import { Link, useNavigate } from "react-router-dom";
const UnitTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <h3>Unit 1</h3> */}
      <div className="main-unit">
        {/* <Link to="/unit/consonants">Consonants</Link> */}

        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/unit/basic-phrase-2")}
            >
              Basic Phrase
            </div>
          </div>
        </div>
        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/unit/conversation-2")}
            >
              Conversation
            </div>
          </div>
        </div>
        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/unit/grammar-1")}
            >
              Grammar
            </div>
          </div>
        </div>

        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/exercise/flashcard")}
            >
              Days in Khmer
            </div>
          </div>
        </div>

        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/exercise/fill-the-blank")}
            >
              Fill in the blank
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitTwo;
