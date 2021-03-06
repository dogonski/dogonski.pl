import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;
}
body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1 {
    font-family: 'Advent Pro';
    font-weight: 400;
}
`;

export default GlobalStyle;
