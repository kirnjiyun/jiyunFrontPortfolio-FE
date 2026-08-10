import { createGlobalStyle } from "styled-components";

// 폰트 정책
// - 라틴: Inter 를 next/font 로 self-host ($sansFont 로 주입)
// - 한글: 시스템 폰트 스택 (다운로드 0KB, 굵기별 실제 웨이트 제공)
//   기존 S-CoreDream-3Light 는 woff 351KB 로 JS 전체보다 무거웠고,
//   Light 단일 웨이트라 굵은 글씨가 합성돼 뭉개졌다.
//   SBAggroB(236KB)는 선언만 있고 쓰이는 곳이 없어 제거했다.
// 주의: @import 는 createGlobalStyle 안에서 쓰지 않는다
// (styled-components 의 CSSOM API 가 프로덕션에서 제대로 처리하지 못함)
const GlobalStyle = createGlobalStyle<{ $sansFont?: string }>`

/* ── shadcn/ui inspired design tokens ── */
:root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;

    /* semantic aliases */
    --color-bg: hsl(var(--background));
    --color-fg: hsl(var(--foreground));
    --color-card: hsl(var(--card));
    --color-card-fg: hsl(var(--card-foreground));
    --color-primary: hsl(var(--primary));
    --color-primary-fg: hsl(var(--primary-foreground));
    --color-secondary: hsl(var(--secondary));
    --color-secondary-fg: hsl(var(--secondary-foreground));
    --color-muted: hsl(var(--muted));
    --color-muted-fg: hsl(var(--muted-foreground));
    --color-accent: hsl(var(--accent));
    --color-accent-fg: hsl(var(--accent-foreground));
    --color-border: hsl(var(--border));
    --color-input: hsl(var(--input));
    --color-ring: hsl(var(--ring));

    /* legacy compatibility */
    --color-dark-blue: hsl(var(--foreground));
    --color-medium-blue: hsl(var(--muted-foreground));
    --color-light-blue: hsl(240 5% 65%);
    --color-lightest-blue: hsl(var(--secondary));
    --color-brightest-blue: hsl(172 100% 70%);
    --color-surface: hsl(var(--card));
    --color-surface-soft: hsl(var(--muted));
    --color-text-primary: hsl(var(--foreground));
    --color-text-secondary: hsl(var(--muted-foreground));
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --radius-lg: var(--radius);
}

[data-theme="dark"] {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;

    --color-bg: hsl(var(--background));
    --color-fg: hsl(var(--foreground));
    --color-card: hsl(var(--card));
    --color-card-fg: hsl(var(--card-foreground));
    --color-primary: hsl(var(--primary));
    --color-primary-fg: hsl(var(--primary-foreground));
    --color-secondary: hsl(var(--secondary));
    --color-secondary-fg: hsl(var(--secondary-foreground));
    --color-muted: hsl(var(--muted));
    --color-muted-fg: hsl(var(--muted-foreground));
    --color-accent: hsl(var(--accent));
    --color-accent-fg: hsl(var(--accent-foreground));
    --color-border: hsl(var(--border));
    --color-input: hsl(var(--input));
    --color-ring: hsl(var(--ring));

    --color-dark-blue: hsl(var(--foreground));
    --color-medium-blue: hsl(var(--muted-foreground));
    --color-light-blue: hsl(240 5% 55%);
    --color-lightest-blue: hsl(var(--secondary));
    --color-brightest-blue: hsl(172 60% 50%);
    --color-surface: hsl(var(--card));
    --color-surface-soft: hsl(var(--muted));
    --color-text-primary: hsl(var(--foreground));
    --color-text-secondary: hsl(var(--muted-foreground));
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3);
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
    font-family: ${(p) => p.$sansFont ?? "'Inter'"}, -apple-system, BlinkMacSystemFont,
        'Apple SD Gothic Neo', 'Pretendard', 'Malgun Gothic', 'Noto Sans KR',
        'Segoe UI', Roboto, sans-serif;
    background-color: var(--color-bg);
    color: var(--color-fg);
    line-height: 1.6;
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

::selection {
    background: hsl(240 5.9% 10% / 0.12);
    color: var(--color-fg);
}

[data-theme="dark"] ::selection {
    background: hsl(0 0% 98% / 0.15);
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

/* Minimal scrollbar */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-thumb {
    background: hsl(var(--muted-foreground) / 0.3);
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--muted-foreground) / 0.5);
}
::-webkit-scrollbar-track {
    background: transparent;
}

@media (max-width: 768px) {
    html {
        font-size: 15px;
    }
}
`;

export default GlobalStyle;
