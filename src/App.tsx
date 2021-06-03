import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions , fetchCategories } from './API';
import QuestionCard from './components/QuestionCard';
import StartCard from './components/StartCard';
import GameOverPanel from './components/GameOverPanel';
import { Difficulty, QuestionState, Categories } from './API';
// Styles
import { GlobalStyle, HeaderTag, Wrapper } from './App.styles';

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
  const [number, setNumber] = useState(10);
  const [index, setIndex] = useState(0);
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
    setShowStartMenu(true);
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

  const selectNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  }

  const startQuiz = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowStartMenu(false);
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      number,
      quizDifficulty.value,
      selectedCategory.value
    );
    console.log("New Questions, " + newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setIndex(0);
    setLoading(false);
  }

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check answer against correct value / correct answer
      const correct = questions[index].correct_answer === answer;

      if (correct) setScore(prev => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[index].question,
        answer,
        correct,
        correctAnswer: questions[index].correct_answer
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    // Move onto the next question
    const nextQuestion = index + 1;
    if (nextQuestion === number) {
      setGameOver(true);
    } else {
      setIndex(nextQuestion);
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
      <HeaderTag>QUIZ</HeaderTag>
      {gameOver && showStartMenu && !loading &&(<StartCard
      categories={categories}
      selectedCategory={selectedCategory}
      selectedDifficulty={quizDifficulty.value}
      number={number}
      selectCategoryCallback={selectCategory}
      selectDifficulty={selectDifficulty}
      selectNumberCallback={selectNumber}
      startQuizCallback={startQuiz}
      />)}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && !showStartMenu && (<QuestionCard
        questionNumber={index + 1}
        totalQuestions={number}
        score={score}
        question={questions[index].question}
        answers={questions[index].answers}
        userAnswer={userAnswers ? userAnswers[index]: undefined}
        callback={checkAnswers}
      />)}
      {!gameOver && 
       !loading && 
       userAnswers.length === index + 1 && 
      index !==  number - 1 ? 
      (<button className="next" onClick={nextQuestion}>
        Next Question
      </button>) : null}
      {!gameOver &&
      !loading &&
      index === number - 1 ? (
        <button className="finish" onClick={nextQuestion}>
          Finish
        </button>
      ) : 
    null}
    {gameOver &&
    !loading &&
    !showStartMenu? (
      <GameOverPanel
        score={score}
        loadStartCallback={loadStartMenu}/>
    ) : null}
    </Wrapper>
    </>
  );
}

export default App;
