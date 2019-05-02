import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pokemon_GB';
    src: url('/Pokemon_GB.ttf') format('truetype');
  }

  body {
    font-family: ${props => 'Pokemon_GB'};
  }
`;

export default GlobalStyle;
