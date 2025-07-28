import React, { useState, useEffect } from "react";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import "./styles.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [topic, setTopic] = useState('Select Topic');

  const topics = ['Select Topic', ...Object.keys(questions)];

  const question = topic ? questions[topic] : [];

  const handleNext = () => {
    const next = currentIndex + 1;
    if (next < question.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <select onChange={(e) => {
        setTopic(e.target.value);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
      }}>
        {
          topics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        }
      </select>
      {
        topic !== 'Select Topic' ? (
          !showResult ? (
            <>
              <h2><u>{topic}</u></h2>
              <QuestionCard
                questionData={question[currentIndex]}
                onNext={handleNext}
                onCorrect={handleScore}
              />
            </>
          ) : (
            <h2>Your score: {score} / {questions.length}</h2>
          )
        ) : null
      }
    </div>
  );
}
