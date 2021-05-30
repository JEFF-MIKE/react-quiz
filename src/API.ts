import { shuffleArray } from './utils';

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type Categories = {
  name: string;
  id: number;
}

export type CategoryDetails = {
  total_question_count: number;
  total_easy_question_count: number;
  total_medium_question_count: number;
  total_hard_question_count: number;
}

export type GlobalCategoryDetails = {
  total_num_of_questions: number;
  total_num_of_pending_questions: number;
  total_num_of_verfied_questions: number;
  total_num_of_rejected_questions: number;
}

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers, 
      question.correct_answer
    ])
  }));
}

export const fetchCategories = async (): Promise<Categories[]> => {
  const endpoint = `https://opentdb.com/api_category.php`;

  const data = await (await fetch(endpoint)).json();

  data.trivia_categories = [{name: "Any", id: "1"},...data.trivia_categories]
  return data.trivia_categories
}

export const fetchCategoryDetails = async(category_id: string): Promise<CategoryDetails> => {
  const endpoint = `https://opentdb.com/api_count.php?category=${category_id}`;

  const data = await(await fetch(endpoint)).json();

  return data.category_question_count;
}

export const fetchGlobalCategoryDetails = async(): Promise<GlobalCategoryDetails> => {
  const endpoint = `https://opentdb.com/api_count_global.php`;

  const data = await(await fetch(endpoint)).json();

  return data.overall;
}