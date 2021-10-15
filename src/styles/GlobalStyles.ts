import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
  }

  html {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`