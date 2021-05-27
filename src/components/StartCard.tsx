import React from 'react';

import { Categories } from '../API';

type Props = {
  categories: Categories[] | undefined;
}

const StartCard: React.FC<Props> = ({
  categories
}) => (
  <div>
    <h1>Quiz Setup:</h1>
    <label htmlFor='categories'></label>
    <select name="category" id="categories">
      {
        categories?.map(category => (
          <option value={category.id}>{category.name}</option>
        ))
      }
    </select>
    
  </div>
);

export default StartCard;