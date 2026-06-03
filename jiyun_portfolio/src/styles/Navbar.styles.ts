import styled from "styled-components";
import { animated } from "react-spring";

// Navbar 전체 래퍼
export const NavbarWrapper = styled(animated.nav)`
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    width: 84px;
    height: calc(100vh - 2.5rem);
    background: rgba(13, 19, 33, 0.86);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(14px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    z-index: 200;
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);

    @media (max-width: 768px) {
        top: 0;
        left: 0;
        width: 100%;
        height: 64px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        border-radius: 0;
        border-left: 0;
        border-right: 0;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 480px) {
        height: 56px;
        padding: 0 0.8rem;
    }
`;

// 로고
export const Logo = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
    @media (max-width: 480px) {
        width: 24px;
        height: 24px;
    }
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
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
        font-size: 1.5rem;
    }
    @media (max-width: 480px) {
        width: 24px;
        height: 24px;
        font-size: 1.2rem;
    }
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
    background: rgba(247, 249, 252, 0.95);
    border: 1px solid var(--color-border);
    border-radius: 28px;
    box-shadow: 0 26px 60px rgba(13, 19, 33, 0.3);
    transform: translate(-50%, -50%);
    z-index: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* box-shadow: ${(props) =>
        props.ismenuopen
            ? "0 0 20px 30px rgba(221, 230, 237, 1), 0 0 80px 40px rgba(221, 230, 237, 0.3)"
            : "none"}; */
`;
export const MenuItem = styled(animated.div)`
    margin: 1rem 0;
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: bold;
    color: var(--color-dark-blue);
    opacity: 0;
    transform: translateY(20px);
    transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out,
        text-shadow 0.3s ease-in-out;

    &:hover {
        text-shadow: 0 0 12px rgba(111, 255, 233, 0.65);
    }

    @media (max-width: 768px) {
        margin: 0.8rem 0;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color-dark-blue);
        opacity: 0;
        transform: translateY(20px);
        /* 모바일에서도 동일하게 트랜지션 적용 */
        transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out,
            text-shadow 0.3s ease-in-out;

        &:hover {
            text-shadow: 0 0 5px var(--color-brightest-blue);
        }
    }
    @media (max-width: 480px) {
        font-size: 1rem;
        margin: 0.5rem 0;
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
    z-index: 250;
    pointer-events: none;
`;
