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
  --color-dark-blue: #0d1321;
  --color-medium-blue: #1d2d44;
  --color-light-blue: #748cab;
  --color-lightest-blue: #f7f9fc;
  --color-brightest-blue: #6fffe9;
  --color-surface: #ffffff;
  --color-surface-soft: #edf2fb;
  --color-border: #d8e1ec;
  --color-text-primary: #0d1321;
  --color-text-secondary: #3e5c76;
  --shadow-sm: 0 8px 20px rgba(13, 19, 33, 0.06);
  --shadow-md: 0 14px 34px rgba(13, 19, 33, 0.1);
  --radius-lg: 18px;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'S-CoreDream-3Light', 'SBAggroB','Pretendard', sans-serif;
    background: radial-gradient(circle at 0% 0%, #ffffff 0%, #edf2fb 45%, #d9e4f5 100%);
    color: var(--color-text-primary);
    line-height: 1.6;
    min-height: 100vh;
  }

  ::selection {
    background: rgba(111, 255, 233, 0.28);
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

  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #748cab, #3e5c76);
    border-radius: 10px;
    border: 2px solid #edf2fb;
  }

  ::-webkit-scrollbar-track {
    background: #edf2fb;
  }

  @media (max-width: 768px) {
    html {
      font-size: 15px;
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
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

export default GlobalStyle;
