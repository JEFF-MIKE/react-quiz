import styled from 'styled-components';
import { colors } from '../colors';
export const StartMenuWrapper = styled.div`
  flex: 1;
  display: flex;
  max-width: 900px;
  max-height: 600px;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;

  .inner-div {
    width: 100%;
    background: ${colors.main_color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
  }


  h1 {
    font-family: 'Neuton', serif;
    color: ${colors.primary_text_color};
    text-align: center;
    margin: 10px 0;
    width: 100%;
  }

  .categories-dropdown-label, .question-quantity-label {
    color: ${colors.primary_text_color};
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
    background: ${colors.button_primary_color};
    color: ${colors.primary_text_color};
    font-family: 'Work Sans', serif;
    padding: 10px 5px;
    border-style: none;
  }

  .category-details, .global-category-details, .loading-panel {
    display: flex;
    height: 180px;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${colors.secondary_color};
    padding: 0 10px;
  }

  .selected-category-item {
    background-color: #00FF00;
  }

  .category-details p, .global-category-details p, .loading-panel p {
    color: ${colors.secondary_text_color};
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
    color: ${colors.primary_text_color};
    padding: 3px 0;
    margin: 4px 0;
  }

  .difficulty-selector {
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
    color: ${colors.secondary_text_color};
  }

  .start {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .start:hover {
    background: ${colors.button_secondary_color};
  }
`;