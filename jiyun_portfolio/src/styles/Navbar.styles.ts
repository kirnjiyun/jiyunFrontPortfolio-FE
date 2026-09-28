import styled from "styled-components";
import Link from "next/link";

export const NavbarWrapper = styled.nav`
    position: fixed;
    inset: 0 0 auto;
    height: 72px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    z-index: 200;
    padding: 0 var(--page-gutter);
    background: hsl(var(--background) / 0.94);
    border-bottom: 1px solid var(--color-border);
    font-family: var(--font-mono);
    @media (max-width: 700px) { height: 64px; grid-template-columns: 1fr auto; }
`;
export const Logo = styled.span`
    font-size: 13px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    &::before { content: ''; width: 8px; height: 8px; background: currentColor; }
`;
export const NavLinks = styled.div`
    display: contents;
    @media (max-width: 700px) { display: none; }
`;
export const NavLink = styled(Link)`
    justify-self: start;
    padding: 12px 0;
    font-size: 12px;
    text-transform: lowercase;
    &::after { content: ' ↗'; opacity: 0; transition: opacity 150ms ease; }
    &:hover::after, &[aria-current='page']::after { opacity: 1; }
    &[aria-current='page'] { text-decoration: underline; text-underline-offset: 5px; }
`;
export const NavActions = styled.div`
    display: none;
    @media (max-width: 700px) { display: flex; align-items: center; gap: 10px; }
`;
export const ThemeToggle = styled.button`
    background: transparent;
    color: var(--color-fg);
    border: 0;
    padding: 10px;
`;
export const MobileMenuButton = styled.button`
    padding: 10px 0 10px 12px;
    border: 0;
    background: transparent;
    color: var(--color-fg);
    font: 12px var(--font-mono);
`;
export const MobileMenu = styled.div<{ $open: boolean }>`
    display: none;
    @media (max-width: 700px) {
        display: ${({ $open }) => $open ? "flex" : "none"};
        flex-direction: column;
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        padding: 18px var(--page-gutter);
        z-index: 199;
    }
`;
export const MobileNavLink = styled(Link)`
    padding: 15px 0;
    font: 18px var(--font-mono);
    border-bottom: 1px solid var(--color-border);
    &:last-child { border-bottom: 0; }
    &:hover { text-decoration: underline; text-underline-offset: 5px; }
`;
