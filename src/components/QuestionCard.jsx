import React, { useState, useEffect } from "react";

const shuffleOptions = (options) => {
  return [...options].sort(() => Math.random() - 0.5);
};

export default function QuestionCard({ questionData, onNext, onCorrect }) {
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setShuffledOptions(shuffleOptions(questionData.options));
    setSelected(null); // Reset selection on new question
  }, [questionData]);

  const handleClick = (option) => {
    if (selected) return; // Prevent multiple selections
    setSelected(option);
    if (option === questionData.answer) {
      onCorrect();
    }
  };

  const getClass = (option) => {
    if (!selected) return "option";
    if (option === questionData.answer) return "option correct";
    if (option === selected) return "option wrong";
    return "option";
  };

  return (
    <div>
      <h2>{questionData.question}</h2>
      <div className="options">
        {shuffledOptions.map((option, i) => (
          <button
            key={i}
            className={getClass(option)}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {selected && <button onClick={onNext}>Next</button>}
    </div>
  );
}
