import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

// 다크 모드 임시 비활성화 (기본값 light 고정).
// 다시 켜려면 true 로 바꾸고 _document.tsx 의 themeScript 주석도 해제하면 된다.
export const ENABLE_DARK_MODE = false;

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!ENABLE_DARK_MODE) {
            document.documentElement.removeAttribute("data-theme");
            setMounted(true);
            return;
        }

        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "dark" || stored === "light") {
            setTheme(stored);
            document.documentElement.setAttribute("data-theme", stored);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setMounted(true);
    }, []);

    const toggleTheme = useCallback(() => {
        if (!ENABLE_DARK_MODE) return;

        setTheme((prev) => {
            const next = prev === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            return next;
        });
    }, []);

    if (!mounted) return <>{children}</>;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
