import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'BMDOHYEON', 'Pretendard', sans-serif;
    background-color: white;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit; 
    cursor: pointer;
  }
`;

export default GlobalStyle;
