import React from 'react'
// Types
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper, BottomButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  score: number;
  questionNumber: number;
  totalQuestions: number;
  nextQuestionCallback: () => void;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  score,
  questionNumber,
  totalQuestions,
  nextQuestionCallback
}) => (
  <Wrapper>
    <div className="inner-div">
      <h1>Score: {score}</h1>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML = {{ __html: question }}/>
      <div>
        {answers.map(answer => (
          <ButtonWrapper 
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}>
            <button disabled={userAnswer ? true: false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
      <BottomButtonWrapper>
      {userAnswer && questionNumber !== totalQuestions ? 
      (<button className="next" onClick={nextQuestionCallback}>
        Next Question
      </button>) : null}
      {userAnswer && questionNumber === totalQuestions ? (
        <button className="finish" onClick={nextQuestionCallback}>
          Finish
        </button>) : null}
      </BottomButtonWrapper>
    </div>
  </Wrapper>
);

export default QuestionCard;