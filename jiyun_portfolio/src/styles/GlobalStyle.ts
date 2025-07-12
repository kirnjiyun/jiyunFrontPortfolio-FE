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
  --color-dark-blue: #0e0e0e;       /* 완전 검정에 가까운 어두운 톤 */
  --color-medium-blue: #333333;     /* 중간 톤 회색 */
  --color-light-blue: #888888;      /* 좀 더 진한 느낌의 밝은 회색 */
  --color-lightest-blue: #eaeaea;   /* #f5f5f5보다 조금 진함 */
  --color-brightest-blue: #39ff14;  /* 기존과 동일한 형광 연두 */
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

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    body {
      font-size: 1rem;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p, a, li, button {
      font-size: 1rem;
    }
    section, main, header, footer {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

export default GlobalStyle;
