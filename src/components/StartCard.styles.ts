import styled from 'styled-components';

export const StartMenuWrapper = styled.div`
  max-width: 1100px;
  background: #a6494f;
  padding: 10px 50px;
  font-family: 'Work Sans', sans-serif;
  display: flex;
  flex-direction: column;


  h1 {
    font-family: 'Neuton', serif;
    color: #FFFFFF;
    text-align: center;
    margin: 10px 0;
  }

  .categories-dropdown-label {
    color: #FFFFFF;
  }

  #categories {
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

  .category-details {
    display: flex;
    flex-direction: column;
    background: #833A3F;
    padding: 0 10px;
  }

  .category-details p {
    color: #FCE3E5;
    margin-left: 5px;
    font-size: 16px;
  }

  strong {
    color: #FFFFFF;
    padding: 3px 0;
  }

  .difficulty-selector {
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
    color: #FCE3E5;
  }

  .start {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;