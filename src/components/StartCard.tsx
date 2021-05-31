import React, { useState, useEffect } from 'react';

import { Categories, fetchCategoryDetails, CategoryDetails, GlobalCategoryDetails, fetchGlobalCategoryDetails } from '../API';

import { StartMenuWrapper } from './StartCard.styles';

type Props = {
  categories: Categories[] | undefined;
  selectedCategory: {value: string};
  selectedDifficulty: string;
  number: number;
  selectCategoryCallback: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectDifficulty: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectNumberCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startQuizCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StartCard: React.FC<Props> = ({
  categories,
  selectedCategory,
  selectedDifficulty,
  number,
  selectCategoryCallback,
  selectDifficulty,
  selectNumberCallback,
  startQuizCallback
}) => {
  
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetails | any>({});
  const [globalCategoryDetails, setGlobalCategoryDetails] = useState<GlobalCategoryDetails | any>({});
  const [loading, setLoading] = useState(false);
  const [showGlobalDetails, setShowGlobalDetails] = useState(true);

  const getCategoryDetails = async () => {
    const newCategoryDetails = await fetchCategoryDetails(selectedCategory.value);

    setCategoryDetails(newCategoryDetails);
  }

  const getGlobalCategoryDetails = async () => {
    const newGlobalCategoryDetails = await fetchGlobalCategoryDetails();

    setGlobalCategoryDetails(newGlobalCategoryDetails);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (selectedCategory.value == "1") {
        const newGlobalCategoryDetails = await fetchGlobalCategoryDetails();

        setGlobalCategoryDetails(newGlobalCategoryDetails);

        setShowGlobalDetails(true);
      } else { 
        const newCategories = await fetchCategoryDetails(selectedCategory.value);

        setCategoryDetails(newCategories);

        setShowGlobalDetails(false);
      }
      setLoading(false);
      })();
    }, [selectedCategory.value]);

  return (
  <StartMenuWrapper>
    <h1>Quiz Setup:</h1>
    <label htmlFor='categories' className="categories-dropdown-label">Categories</label>
    <select name="category" id="categories" onChange={selectCategoryCallback} value={selectedCategory.value}>
      {
        categories?.map(category => (
          <option 
            key={category.id} 
            value={category.id}
            className={"category-item " + (category.id === Number(selectedCategory.value) ? "selected-category-item" : "")}>
              {category.name}
          </option>
        ))
      }
    </select>
    {!loading && !showGlobalDetails && (
    <div className="category-details">
      <p>Total Questions: {categoryDetails?.total_question_count}</p>
      <p>Easy: {categoryDetails.total_easy_question_count}</p>
      <p>Normal: {categoryDetails.total_medium_question_count}</p>
      <p>Hard: {categoryDetails.total_hard_question_count}</p>
    </div>
    )}
    {!loading && showGlobalDetails && (
      <div className="global-category-details">
        <p>Total Questions: {globalCategoryDetails.total_num_of_questions}</p>
        <p>Pending: {globalCategoryDetails.total_num_of_pending_questions}</p>
        <p>Verified: {globalCategoryDetails.total_num_of_verified_questions}</p>
        <p>Rejected: {globalCategoryDetails.total_num_of_rejected_questions}</p>
      </div>
    )}
    {loading ? (
      <div className="loading-panel">
        <p>Loading</p>
      </div>
    ) : null}
    <strong>Select Category</strong>
    <div className="difficulty-selector">
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
    <label htmlFor="question-quantity" className="question-quantity-label">Amount of questions (10-50):</label>
    <input type="number" id="question-quantity" name="question-quantity" min="10" max="50" value={number} onChange={selectNumberCallback}/>
    <button className="start" onClick={startQuizCallback}>
        Start
    </button>
  </StartMenuWrapper>
);}

export default StartCard;