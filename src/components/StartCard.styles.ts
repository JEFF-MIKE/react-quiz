import styled from 'styled-components';
import { colors } from '../colors';
export const StartMenuWrapper = styled.div`
  flex: 1;
  display: flex;
  max-width: 900px;
  min-height: 570px;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  border: 5px solid black;

  .inner-div {
    width: 100%;
    background: ${colors.main_color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 10%;
  }


  h1 {
    font-family: 'Neuton', serif;
    color: ${colors.heading_text_color};
    text-align: center;
    vertical-align: middle;
    width: 100%;
    border-bottom: 3px solid black;
    border-top: 3px solid black;
    padding: 8px 0;
    margin: 5px 0;
  }

  .categories-dropdown-label, .question-quantity-label {
    color: ${colors.primary_text_color};
    margin: 4px 0;
    font-size: 20px;
    flex: 1;
  }

  #categories, #question-quantity {
    background-color: ${colors.dropdown_selector_color};
    padding-left: 3px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 4px;
    border: 3px solid black;
  }

  #categories {
    border-bottom: none;
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
    border: 3px solid black;
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
    font-size: 20px;
    padding: 3px 0;
    margin: 4px 0;
  }

  .difficulty-selector {
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
    color: ${colors.primary_text_color};
  }

  .start {
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${colors.button_text_color}
  }

  .start:hover {
    background: ${colors.button_secondary_color};
  }

  @media screen and (max-height: 767px), (max-width: 500px)
  {
    min-height: 300px;

    .inner-div {
      padding: 20px 8%;
    }

    h1 {
      font-size: 20px;
      padding: 4px 0;
    }

    .categories-dropdown-label {
      font-size: 16px;
    }

    #categories, strong, .question-quantity-label {
      font-size: 16px;
    }

    .category-details, .global-category-details, .loading-panel {
      height: 120px;
    }

    .category-details p, .global-category-details p, loading-panel p {
      font-size: 12px;
      margin: 3px 0;
      margin-left: 5px;
    }

    .difficulty-selector label {
      font-size: 12px;
    }
  }
`;