import styled from 'styled-components';

import { colors } from '../colors';

export const Wrapper = styled.div`
flex: 1;
display: flex;
max-width: 900px;
max-height: 600px;
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
    color: #FFFFFF;
    padding: 3px 0;
    border-bottom: 3px solid black;
  }

  p {
    font-size: 1rem;
    color: #FFFFFF;
  }
`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const BottomButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

// #666362 = ash black.
export const ButtonWrapper = styled.div<ButtonWrapperProps>`

  button:hover {
    background:
  }

  button {
    transition: all 0.5s ease;
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background-color: ${({ correct, userClicked }) =>
    correct 
        ? 'green'
        : !correct && userClicked
        ? 'red'
        : colors.button_primary_color};
      color: #FFFFFF;
      font-family: 'Work Sans', serif;
      padding: 10px 5px;
      border-style: none;
  }
`