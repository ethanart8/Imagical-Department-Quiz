import { createContext, useContext, useState } from 'react';

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});

  const selectAnswer = (questionNumber, choiceIndex) => {
    setAnswers((prev) => ({ ...prev, [questionNumber]: choiceIndex }));
  };

  return (
    <QuizContext.Provider value={{ answers, selectAnswer }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('useQuiz must be used within QuizProvider');
  return ctx;
}
