import { createGlobalStyle } from 'styled-components';
// import CovidImg from '@src/assets/images/covid.jpg';

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: linear-gradient(45deg, rgba(17,13,83,1) 15%, rgba(60,60,184,1) 35%, rgba(0,212,255,1) 80%);
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }
  
  .cursor {
    cursor: pointer;
  }
`

export default globalStyle;
