import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
@font-face {
    font-family: 'SBAggroB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
:root {
  /* 거의 검정에 가까운 어두운 톤 */
  --color-dark-blue: #141414;

  /* 중간 정도의 회색 */
  --color-medium-blue: #555555;

  /* 조금 더 밝은 회색 */
  --color-light-blue: #aaaaaa;

  /* 거의 흰색에 가까운 밝은 회색 */
  --color-lightest-blue: #f5f5f5;

  /* 포인트: 형광 연두 (네온 그린) */
  --color-brightest-blue: #39ff14;
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
    font-family: 'S-CoreDream-3Light', 'SBAggroB','Pretendard', sans-serif;
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
