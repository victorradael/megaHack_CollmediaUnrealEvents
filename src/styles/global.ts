import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    background: #252594;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
