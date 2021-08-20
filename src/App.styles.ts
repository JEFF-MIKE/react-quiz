import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/kingfisher.jpg';

// import { colors } from './colors';

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

  body > #root {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "header header header"
                         ". main ."
                         "footer footer footer";
    grid-template-rows: 12.5% 75% 12.5%;
    grid-template-columns: 5% 90% 5%;
  }
@media screen and (max-height: 767px), (max-width: 500px) {
    body > #root {
      grid-template-areas: "header"
                           "main"
                           "footer";
    grid-template-rows: 10% 80% 10%;
    grid-template-columns: 100%;
    }
  }

  @media screen and (max-height: 499px)
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
    background: #cfe0e3;
    border: none;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    width: 100%;
    cursor: pointer;
  }

  .next:hover, .finish:hover {
    transition: opacity 0.4s;
    opacity: 0.6;
  }

  @media screen and (max-height: 500px){
    
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

  @media screen and (max-height: 760px) {
    h1 {
      font-size: 35px;
      padding: 0;
    }
  }
`

export const FooterTag = styled.footer`
  grid-area: footer;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  small {
    color: #FFFFFF;
  }
`