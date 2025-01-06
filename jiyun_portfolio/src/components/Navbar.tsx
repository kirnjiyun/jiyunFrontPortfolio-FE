import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, useTrail, animated } from "react-spring";

const NavbarWrapper = styled(animated.nav)`
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
    padding: 1rem 0;
    z-index: 100;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-lightest-blue);
    cursor: pointer;
    margin-bottom: auto;
`;

const MenuButton = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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

const ModalCircle = styled(animated.div).attrs(
    (props: { isMenuOpen?: boolean }) => ({
        // isMenuOpen: any,
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

    box-shadow: ${(props: { isMenuOpen?: boolean }) =>
        props.isMenuOpen
            ? "0 0 20px 30px rgba(221, 230, 237, 1), 0 0 80px 40px rgba(221, 230, 237, 0.3)"
            : "none"};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const MenuItem = styled(animated.div)`
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
`;

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    // Modal Circle 애니메이션
    const modalCircleSpring = useSpring({
        width: isMenuOpen ? "50vw" : "0px",
        height: isMenuOpen ? "50vw" : "0px",
        config: { duration: 300 },
    });
    const backdropSpring = useSpring({
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? "auto" : "none",
    });

    // Navbar 애니메이션 (스크롤 시 나타남)
    const navbarSpring = useSpring({
        transform: isNavbarVisible ? "translateX(0)" : "translateX(-100%)",
        config: { tension: 200, friction: 20 },
    });
    const Backdrop = styled(animated.div)`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* 어두운 배경 */
        backdrop-filter: blur(10px); /* 흐릿하게 */
        z-index: 99; /* ModalCircle 아래, Navbar 위 */
        pointer-events: none; /* 클릭을 막지 않도록 설정 */
    `;
    // 메뉴 항목 애니메이션
    const menuItems = ["Home", "About", "Projects"];
    const trail = useTrail(menuItems.length, {
        opacity: isMenuOpen ? 1 : 0,
        transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
        config: { tension: 500 },
        delay: 400,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // 스크롤이 끝까지 내려갔을 때 Navbar 표시
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                setIsNavbarVisible(true);
            } else {
                setIsNavbarVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <NavbarWrapper style={navbarSpring}>
                {/* 로고 상단 배치 */}
                <Logo>Y</Logo>

                {/* 햄버거 버튼 중앙 배치 */}
                <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? "✕" : "☰"}
                </MenuButton>
            </NavbarWrapper>
            {/* Backdrop */}
            {isMenuOpen && <Backdrop style={backdropSpring} />}
            {/* Modal Circle */}
            <ModalCircle style={modalCircleSpring} isMenuOpen={isMenuOpen}>
                {trail.map((props, index) => (
                    <MenuItem key={index} style={props}>
                        {menuItems[index]}
                    </MenuItem>
                ))}
            </ModalCircle>
        </>
    );
};

export default Navbar;
