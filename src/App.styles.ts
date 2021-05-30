import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/space_night_sky.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    // background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding; 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .next {
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`

export const HeaderTag = styled.h1`
  font-family: 'Barlow Semi Condensed', sans-serif;
  background: linear-gradient(to right, rgba(52, 36, 48, 0.74) 0%, rgba(52, 36, 48, 0.78) 30%, rgba(52, 36, 48, 0.82) 46%, rgba(52, 36, 48, 0.92) 69%, rgba(52, 36, 48, 0.97) 100%);
  color: #FFFFFF;
  font-size: 70px;
  font-weight: 400;
  text-align: center;
  display: block;
  margin: 0;
  padding: 8px 0;
`