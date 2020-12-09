import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #d6e4ff;
    --font: #1f1f1f;
    --white: #fff;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    background: var(--white);
  }
  
  img {
    max-height: 100%;
    max-width: 100%;
  }
  
`;

export default GlobalStyles;
