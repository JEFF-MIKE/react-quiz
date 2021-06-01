import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #a6494f;
  border-radius: 10px;
  border: 2px solid #000000;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0,0,0,.25);

  p {
    font-size: 1rem;
    color: #FFFFFF;
  }
`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`

  button:hover {
    background: #4b2426;
  }

  button {
    transition: all 0.5s ease;
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct 
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
      background: #5c3032;
      color: #FFFFFF;
      font-family: 'Work Sans', serif;
      padding: 10px 5px;
      border-style: none;
  }
`