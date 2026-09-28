import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $sansFont?: string }>`
    :root {
        --background: 60 12% 97%;
        --foreground: 60 5% 9%;
        --card: 60 12% 97%;
        --card-foreground: 60 5% 9%;
        --popover: 60 12% 97%;
        --popover-foreground: 60 5% 9%;
        --primary: 60 5% 9%;
        --primary-foreground: 60 12% 97%;
        --secondary: 60 6% 92%;
        --secondary-foreground: 60 5% 9%;
        --muted: 60 6% 92%;
        --muted-foreground: 60 3% 39%;
        --accent: 60 6% 90%;
        --accent-foreground: 60 5% 9%;
        --destructive: 0 70% 42%;
        --destructive-foreground: 0 0% 100%;
        --border: 60 4% 80%;
        --input: 60 4% 80%;
        --ring: 60 5% 9%;
        --radius: 0px;
        --radius-lg: 0px;
        --font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
        --page-gutter: clamp(20px, 3vw, 48px);
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
        --color-dark-blue: var(--color-fg);
        --color-medium-blue: var(--color-muted-fg);
        --color-light-blue: hsl(60 3% 60%);
        --color-lightest-blue: var(--color-secondary);
        --color-brightest-blue: var(--color-fg);
        --color-surface: var(--color-card);
        --color-surface-soft: var(--color-muted);
        --color-text-primary: var(--color-fg);
        --color-text-secondary: var(--color-muted-fg);
        --shadow-sm: none;
        --shadow-md: none;
    }
    [data-theme="dark"] {
        --background: 60 5% 9%;
        --foreground: 60 12% 95%;
        --card: 60 5% 9%;
        --card-foreground: 60 12% 95%;
        --primary: 60 12% 95%;
        --primary-foreground: 60 5% 9%;
        --secondary: 60 3% 16%;
        --secondary-foreground: 60 12% 95%;
        --muted: 60 3% 16%;
        --muted-foreground: 60 3% 65%;
        --accent: 60 3% 20%;
        --accent-foreground: 60 12% 95%;
        --border: 60 3% 26%;
        --input: 60 3% 26%;
        --ring: 60 12% 95%;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 88px; }
    body {
        font-family: ${(p) => p.$sansFont ?? "Arial"}, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
        background-color: var(--color-bg);
        background-image: linear-gradient(to right, transparent calc(100% - 1px), hsl(var(--border) / 0.45) 0);
        background-size: 25% 100%;
        color: var(--color-fg);
        line-height: 1.6;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ::selection { background: var(--color-fg); color: var(--color-bg); }
    a { text-decoration: none; color: inherit; }
    button, input, select, textarea { font: inherit; }
    button, select { cursor: pointer; }
    a, button { -webkit-tap-highlight-color: transparent; }
    :focus-visible { outline: 2px solid var(--color-ring); outline-offset: 5px; }
    img, video { max-width: 100%; height: auto; display: block; }
    .skip-link { position: fixed; top: -100px; left: 20px; z-index: 1000; background: var(--color-fg); color: var(--color-bg); padding: 12px 18px; }
    .skip-link:focus { top: 10px; }
    @media (max-width: 700px) { body { background-size: 50% 100%; } }
    @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
    }
`;
export default GlobalStyle;
