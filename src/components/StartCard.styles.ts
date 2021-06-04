import styled from 'styled-components';

export const StartMenuWrapper = styled.div`
  flex: 1;
  display: flex;
  max-width: 900px;
  max-height: 600px;
  background: #a6494f;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;

  .inner-div {
    width: 100%;
    background: #a6494f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
  }


  h1 {
    font-family: 'Neuton', serif;
    color: #FFFFFF;
    text-align: center;
    margin: 10px 0;
    width: 100%;
  }

  .categories-dropdown-label, .question-quantity-label {
    color: #FFFFFF;
    margin: 4px 0;
    flex: 1;
  }

  #categories, #question-quantity {
    padding-left: 3px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 4px;
  }

  .category-details-button, .start {
    background: #5c3032;
    color: #FFFFFF;
    font-family: 'Work Sans', serif;
    padding: 10px 5px;
    border-style: none;
  }

  .category-details, .global-category-details, .loading-panel {
    display: flex;
    height: 180px;
    flex-direction: column;
    justify-content: space-evenly;
    background: #833A3F;
    padding: 0 10px;
  }

  .selected-category-item {
    background-color: #00FF00;
  }

  .category-details p, .global-category-details p, .loading-panel p {
    color: #FCE3E5;
    margin-left: 5px;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .loading-panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  strong {
    color: #FFFFFF;
    padding: 3px 0;
    margin: 4px 0;
  }

  .difficulty-selector {
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
    color: #FCE3E5;
  }

  .start {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .start:hover {
    background: #4b2426;
  }
`;