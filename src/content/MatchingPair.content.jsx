import { useState, useEffect } from "react";
import "./MatchingPair.css";
const MatchingPair = () => {
  const matchingWord = [
    {
      set: 1,
      pairs: [
        { left: "Hello", right: "សួស្តី" },
        { left: "Good bye!", right: "លាសិនហើយ" },
        { left: "Good evening", right: "សាយន្ត័សួស្តី" },
        { left: "Tomato", right: "ផ្លែប៉េងប៉ោះ" },
      ],
    },
    {
      set: 1,
      pairs: [
        { left: "Orange", right: "Orange" },
        { left: "Tomato", right: "Red" },
        { left: "Lemon", right: "Yellow" },
        { left: "Frog", right: "Green" },
      ],
    },
  ];

  const initialPairs = [
    { left: "Hello", right: "សួស្តី / Sous sdei" },
    { left: "Good bye!", right: "លាសិនហើយ / Lea sen hery" },
    { left: "Good evening", right: "សាយន្ត័សួស្តី / Sa yourn Sous sdei" },
    { left: "Tomato", right: "ផ្លែប៉េងប៉ោះ" },
  ];

  const [pairs, setPairs] = useState([]);
  const [choices, setChoices] = useState({});
  const [correctPairs, setCorrectPairs] = useState(initialPairs);

  // Shuffle
  const shuffleRights = () => {
    const rights = correctPairs.map((pair) => pair.right);
    const shuffleRights = shuffleArray([...rights]);
    const shuffledPairs = correctPairs.map((pair, index) => ({
      ...pair,
      right: shuffleRights[index],
    }));
    setPairs(shuffledPairs);
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // shuffle on mount
  useEffect(() => {
    shuffleRights();
  }, []);

  // Handle selection changes
  const handleSelection = (left, selectedRight) => {
    const newChoices = { ...choices, [left]: selectedRight };
    setChoices(newChoices);
  };

  // Check Pair
  const checkPair = (left) => {
    return (
      correctPairs.find((pair) => pair.left === left)?.right === choices[left]
    );
  };
  return (
    <div className="main-matching-pair">
      <h2>Match the correct words</h2>
      {pairs.map((pair, index) => (
        <div className="matching-pair-container">
          <div className="left-container">
            <div className="pair-boxes-left">
              <span>{pair.left}</span>
            </div>
          </div>

          <div className="right-container">
            <div className="pair-boxes-right">
              <select
                value={choices[pair.left] || ""}
                onChange={(e) => handleSelection(pair.left, e.target.value)}
              >
                <option value="">Select Color</option>
                {pairs.map((p, i) => (
                  <option key={i} value={p.right}>
                    {p.right}
                  </option>
                ))}
              </select>
              {choices[pair.left] && (
                <span>{checkPair(pair.left) ? " Correct!" : " Incorrect"}</span>
              )}
            </div>
          </div>
        </div>
      ))}
      <button className="button-8">Check the answer</button>
    </div>
  );
};

export default MatchingPair;
