import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import "./styles.css";

export default function App() {
  const [name, setName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [topic, setTopic] = useState('Select Topic');

  const inputRef = useRef(null);

  const topics = ['Select Topic', ...Object.keys(questions)];

  const question = topic ? questions[topic] : [];
  useEffect(() => {
    if (topic !== "Select Topic" && questions[topic]) {
      setTotal(questions[topic].length);
    } else {
      setTotal(0);
    }
  }, [topic]);

  const handleNext = () => {
    const next = currentIndex + 1;
    if (next < question.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
      saveResult();
    }
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const saveResult = () => {
    axios.post("http://localhost:8001/api/results/insert", {
      name: name,
      topic: topic,
      marks_obtained: score,
      marks_total: total
    }).then((res) => {
      alert("✅ Your result saved");
      console.log("✅ Your result saved:", res.data);
    })
      .catch((err) => {
        alert("❌ Error saving result:");
        console.error("❌ Error saving result:", err);
      });
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>

      {/* TAKING THE NAME */}
      {
        !name ? (
          <>
            <input type="text" placeholder="Enter your name..." ref={inputRef} />
            <button onClick={(e) => {
              setName(inputRef.current.value);
            }}>
              Next
            </button>
          </>
        ) : (
          <>

            {/* SELECTING THE TOPIC */}
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
                  <h2>Your score: {score} / {total}</h2>
                )
              ) : null
            }
          </>
        )
      }
    </div>
  );
}
