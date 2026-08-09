import React, { useState, useEffect } from "react";
import {
    NavbarWrapper,
    Logo,
    NavLinks,
    NavLink,
    NavActions,
    ThemeToggle,
    MobileMenuButton,
    MobileMenu,
    MobileNavLink,
} from "../../styles/Navbar.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme, ENABLE_DARK_MODE } from "../../lib/ThemeContext";

const menuItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
];

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();

    useEffect(() => {
        setMobileOpen(false);
    }, [router.pathname]);

    useEffect(() => {
        const closeOnEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", closeOnEsc);
        return () => window.removeEventListener("keydown", closeOnEsc);
    }, []);

    return (
        <>
            <NavbarWrapper>
                <Link href="/">
                    <Logo>JY.</Logo>
                </Link>

                <NavLinks>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            href={item.path}
                            className={
                                router.pathname === item.path ? "active" : ""
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </NavLinks>

                <NavActions>
                    {ENABLE_DARK_MODE && (
                        <ThemeToggle
                            onClick={toggleTheme}
                            aria-label="테마 전환"
                            title={
                                theme === "light"
                                    ? "다크 모드로 전환"
                                    : "라이트 모드로 전환"
                            }
                        >
                            {theme === "light" ? "☽" : "☀"}
                        </ThemeToggle>
                    )}
                    <MobileMenuButton
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="메뉴 열기"
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </MobileMenuButton>
                </NavActions>
            </NavbarWrapper>

            <MobileMenu $open={mobileOpen}>
                {menuItems.map((item) => (
                    <MobileNavLink
                        key={item.label}
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                    >
                        {item.label}
                    </MobileNavLink>
                ))}
            </MobileMenu>
        </>
    );
};

export default Navbar;
