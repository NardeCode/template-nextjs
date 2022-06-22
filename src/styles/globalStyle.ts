import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%; /* 1rem = 10px */
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
`
