import React, { useState } from 'react';

import { Categories, CategoryDetails } from '../API';

import { StartMenuWrapper } from './StartCard.styles';

type Props = {
  categories: Categories[] | undefined;
  selectedCategory: {value: string};
  selectCategoryCallback: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  startQuizCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StartCard: React.FC<Props> = ({
  categories,
  selectedCategory,
  selectCategoryCallback,
  startQuizCallback
}) => {
  
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [showCategoryDetails, setCategoryDetails] = useState(false);

  const getCategoryDetails = async () => {

  }

  return (
  <div>
    <h1>Quiz Setup:</h1>
    <label htmlFor='categories'></label>
    <select name="category" id="categories" onChange={selectCategoryCallback} value={selectedCategory.value}>
      {
        categories?.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))
      }
    </select>
    <button className="category-details" disabled={isCategorySelected} onClick={getCategoryDetails}>
      View category details
    </button>
    <button className="start" onClick={startQuizCallback}>
        Start
    </button>

  </div>
);}

export default StartCard;