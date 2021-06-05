import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/kingfisher.jpg';

/*
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
    align-items: center;
    width: 100%;
  }

  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`
*/
export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    background-image: url(${BGImage});
    background-size: cover;
  }

  body > #root{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "header header header"
                         ". main ."
                         "footer footer footer";
    grid-template-rows: 12.5% 75% 12.5%;
    grid-template-columns: 5% 90% 5%;
  }
`
export const Wrapper = styled.main`
  grid-area: main;
  // background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .next, .finish {
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`

export const HeaderTag = styled.header`
  grid-area: header;
  background: linear-gradient(to right, rgba(52, 36, 48, 0.74) 0%, rgba(52, 36, 48, 0.78) 30%, rgba(52, 36, 48, 0.82) 46%, rgba(52, 36, 48, 0.92) 69%, rgba(52, 36, 48, 0.97) 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    flex: 1;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    display: block;
    margin: 0;
    padding: 5px 0;
    color: #FFFFFF;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`

export const FooterTag = styled.footer`
  grid-area: footer;
  background-color: black;
`