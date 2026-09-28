import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarWrapper, Logo, NavLinks, NavLink, NavActions, MobileMenuButton, MobileMenu, MobileNavLink } from "../../styles/Navbar.styles";

const menuItems = [{ label: "projects", path: "/projects" }, { label: "about", path: "/about" }];
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);
    const router = useRouter();
    useEffect(() => { setMobileOpen(false); }, [router.asPath]);
    useEffect(() => {
        const close = (event: KeyboardEvent) => {
            if (event.key === "Escape" && mobileOpen) { setMobileOpen(false); menuButton.current?.focus(); }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, [mobileOpen]);
    const active = (path: string) => router.pathname.startsWith(path);
    return (
        <>
            <NavbarWrapper aria-label="주 메뉴">
                <Link href="/" aria-label="김지윤 포트폴리오 홈"><Logo>kim jiyun</Logo></Link>
                <NavLinks>{menuItems.map(item => <NavLink key={item.path} href={item.path} aria-current={active(item.path) ? "page" : undefined}>{item.label}</NavLink>)}</NavLinks>
                <NavActions><MobileMenuButton ref={menuButton} onClick={() => setMobileOpen(open => !open)} aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? "close −" : "menu +"}</MobileMenuButton></NavActions>
            </NavbarWrapper>
            <MobileMenu id="mobile-navigation" $open={mobileOpen}>
                <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>home ↗</MobileNavLink>
                {menuItems.map(item => <MobileNavLink key={item.path} href={item.path} aria-current={active(item.path) ? "page" : undefined} onClick={() => setMobileOpen(false)}>{item.label} ↗</MobileNavLink>)}
            </MobileMenu>
        </>
    );
}
