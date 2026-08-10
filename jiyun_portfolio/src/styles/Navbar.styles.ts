// 이 파일은 _app 에 렌더되는 Navbar 가 쓰므로 공통 청크에 포함된다.
// 무거운 라이브러리(react-spring 등)를 import 하지 않도록 주의할 것.
import styled from "styled-components";
import Link from "next/link";

export const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    z-index: 200;
    backdrop-filter: blur(12px);
    background: hsl(var(--background) / 0.8);
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 0 1rem;
        height: 56px;
    }
`;

export const Logo = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-fg);
    letter-spacing: -0.02em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(Link)`
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-muted-fg);
    border-radius: calc(var(--radius) - 2px);
    transition: color 0.15s ease, background-color 0.15s ease;
    cursor: pointer;

    &:hover {
        color: var(--color-fg);
        background-color: var(--color-accent);
    }

    &.active {
        color: var(--color-fg);
        background-color: var(--color-accent);
    }
`;

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const ThemeToggle = styled.button`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    color: var(--color-muted-fg);
    cursor: pointer;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
    font-size: 1rem;
    line-height: 1;

    &:hover {
        color: var(--color-fg);
        background-color: var(--color-accent);
        border-color: var(--color-border);
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    color: var(--color-muted-fg);
    cursor: pointer;
    font-size: 1.1rem;
    transition: color 0.15s ease, background-color 0.15s ease;

    &:hover {
        color: var(--color-fg);
        background-color: var(--color-accent);
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 56px;
        left: 0;
        right: 0;
        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        padding: ${({ $open }) => ($open ? "0.5rem" : "0")};
        max-height: ${({ $open }) => ($open ? "300px" : "0")};
        overflow: hidden;
        transition: max-height 0.25s ease, padding 0.25s ease;
        z-index: 199;
    }
`;

export const MobileNavLink = styled(Link)`
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-muted-fg);
    border-radius: calc(var(--radius) - 2px);
    transition: color 0.15s ease, background-color 0.15s ease;
    cursor: pointer;

    &:hover {
        color: var(--color-fg);
        background-color: var(--color-accent);
    }
`;

