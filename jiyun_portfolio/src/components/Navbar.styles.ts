import styled from "styled-components";
import { animated } from "react-spring";

// Navbar 전체 래퍼
export const NavbarWrapper = styled(animated.nav)`
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100vh;
    background-color: var(--color-dark-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10rem 1rem;
    z-index: 100;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        width: 100%;
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }
`;

// 로고
export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-lightest-blue);
    cursor: pointer;
`;

// 햄버거 버튼
export const MenuButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--color-lightest-blue);
    font-size: 2rem;
    background: none;
`;
export const ModalCircle = styled(animated.div).attrs(
    (props: { ismenuopen?: boolean }) => ({
        ismenuopen: undefined,
    })
)`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    background-color: var(--color-lightest-blue);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: ${(props) =>
        props.ismenuopen
            ? "0 0 20px 30px rgba(221, 230, 237, 1), 0 0 80px 40px rgba(221, 230, 237, 0.3)"
            : "none"};
`;

// 메뉴 항목
export const MenuItem = styled(animated.div)`
    margin: 1rem 0;
    font-size: 3rem;
    font-weight: bold;
    color: var(--color-dark-blue);
    opacity: 0;
    transform: translateY(20px);
    transition: font-size 0.3s ease-in-out;

    &:hover {
        font-size: 3.5rem;
    }

    @media (max-width: 768px) {
        margin: 1rem 0;
        font-size: 1rem;
        font-weight: bold;
        color: var(--color-dark-blue);
        opacity: 0;
        transform: translateY(20px);
        transition: font-size 0.3s ease-in-out;

        &:hover {
            font-size: 1.5rem;
        }
    }
`;

// Backdrop
export const Backdrop = styled(animated.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    z-index: 99;
    pointer-events: none;
`;
