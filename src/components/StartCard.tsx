import React, { useState } from 'react';

import { Categories, fetchCategoryDetails, CategoryDetails } from '../API';

import { StartMenuWrapper } from './StartCard.styles';

type Props = {
  categories: Categories[] | undefined;
  selectedCategory: {value: string};
  selectedDifficulty: string;
  selectCategoryCallback: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectDifficulty: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startQuizCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StartCard: React.FC<Props> = ({
  categories,
  selectedCategory,
  selectedDifficulty,
  selectCategoryCallback,
  selectDifficulty,
  startQuizCallback
}) => {
  
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetails | any>({});

  const getCategoryDetails = async () => {
    const newCategoryDetails = await fetchCategoryDetails(selectedCategory.value);

    setCategoryDetails(newCategoryDetails);
  }

  return (
  <div>
    <h1>Quiz Setup:</h1>
    <label htmlFor='categories'>Categories</label>
    <select name="category" id="categories" onChange={selectCategoryCallback} value={selectedCategory.value}>
      {
        categories?.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))
      }
    </select>
    <button className="category-details-button" onClick={getCategoryDetails}>
      View category details
    </button>
    <div className="category-details">
      <p>Total Questions: {categoryDetails?.total_question_count}</p>
      <p>Easy: {categoryDetails.total_easy_question_count}</p>
      <p>Normal: {categoryDetails.total_medium_question_count}</p>
      <p>Hard: {categoryDetails.total_hard_question_count}</p>
    </div>
    <div className="difficulty-selector">
    <strong>Select Category</strong>
      <label>
        <input type="radio" name="difficulty" value="easy" onChange={selectDifficulty} checked={selectedDifficulty === 'easy'}/>Easy
      </label>
      <label>
        <input type="radio" name="difficulty" value="normal" onChange={selectDifficulty} checked={selectedDifficulty === 'normal'}/>Normal
      </label>
      <label>
        <input type="radio" name="difficulty" value="hard" onChange={selectDifficulty} checked={selectedDifficulty === 'hard'}/>Hard
      </label>
    </div>
    <button className="start" onClick={startQuizCallback}>
        Start
    </button>
  </div>
);}

export default StartCard;