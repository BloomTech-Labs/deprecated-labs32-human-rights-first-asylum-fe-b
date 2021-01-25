import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #032854;
    --secondary: #AC4018;
    --font: #000000;
    --white: #ffffff;
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
