import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
:root {
    --color-dark-blue: #27374D;
    --color-medium-blue: #526D82;
    --color-light-blue: #9DB2BF;
    --color-lightest-blue: #DDE6ED;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden; /* 좌우 스크롤 제거 */
  }

  body {
    font-family: 'S-CoreDream-3Light', 'Pretendard', sans-serif;
    background-color: var(--color-lightest-blue); 
    color: var(--color-dark-blue); 
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
