import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions , fetchCategories } from './API';
import QuestionCard from './components/QuestionCard';
import StartCard from './components/StartCard';
import { Difficulty, QuestionState, Categories } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 15;
const App = () => {
  // states
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<{value: string;}>({value: '1'});
  const [quizDifficulty, setQuizDifficulty] = useState<{value: string;}>({value: 'easy'})

  const loadStartMenu = async () => {
    setLoading(true);
    const newCategories = await fetchCategories();
    setCategories(newCategories);
    setLoading(false);
  }

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log({value: e.target.value});
    setSelectedCategory({value: e.target.value})
  }

  const selectDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({value: e.target.value});
    if (e.target.checked) setQuizDifficulty({value: e.target.value});
  }

  const startQuiz = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowStartMenu(false);
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    console.log("New Questions, " + newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check answer against correct value / correct answer
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Move onto the next question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  useEffect(() => {
      (async () => {
      const newCategories = await fetchCategories();
      setCategories(newCategories);
      setLoading(false);
    })();
  }, []);

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>QUIZ</h1>
      {gameOver && showStartMenu && !loading &&(<StartCard
      categories={categories}
      selectedCategory={selectedCategory}
      selectedDifficulty={quizDifficulty.value}
      selectCategoryCallback={selectCategory}
      selectDifficulty={selectDifficulty}
      startQuizCallback={startQuiz}
      />)}
      {!gameOver && !showStartMenu ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && !showStartMenu && (<QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswers}
      />)}
      {!gameOver && 
       !loading && 
       userAnswers.length === number + 1 && 
      number !== TOTAL_QUESTIONS - 1 ? 
      (<button className="next" onClick={nextQuestion}>
        Next Question
      </button>) : null}
    </Wrapper>
    </>
  );
}

export default App;
