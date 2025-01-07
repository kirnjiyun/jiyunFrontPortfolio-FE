import React, { useState, useEffect } from "react";
import { useSpring, useTrail } from "react-spring";
import {
    NavbarWrapper,
    Logo,
    MenuButton,
    ModalCircle,
    MenuItem,
    Backdrop,
} from "./Navbar.styles";
import Link from "next/link";
const Navbar: React.FC = () => {
    const [ismenuopen, setismenuopen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    // Modal Circle 애니메이션
    const modalCircleSpring = useSpring({
        width: ismenuopen ? "50vw" : "0px",
        height: ismenuopen ? "50vw" : "0px",
        config: { duration: 300 },
    });
    const backdropSpring: any = useSpring({
        opacity: ismenuopen ? 1 : 0,
        pointerEvents: ismenuopen ? "auto" : "none",
    });

    // Navbar 애니메이션 (스크롤 시 나타남)
    const navbarSpring = useSpring({
        transform: isNavbarVisible ? "translateX(0)" : "translateX(-100%)",
        config: { tension: 200, friction: 20 },
    });

    // 메뉴 항목 애니메이션
    // 메뉴 항목 애니메이션
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Project", path: "/project" },
    ];
    const trail = useTrail(menuItems.length || 1, {
        opacity: ismenuopen ? 1 : 0,
        transform: ismenuopen ? "translateY(0)" : "translateY(20px)",
        config: { tension: 500 },
        delay: 400,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // 스크롤이 끝까지 내려갔을 때 Navbar 표시
            if (scrollTop + clientHeight >= scrollHeight - 20) {
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
                {/* 로고 */}
                <Logo>🏠</Logo>

                {/* 햄버거 버튼 */}
                <MenuButton onClick={() => setismenuopen(!ismenuopen)}>
                    {ismenuopen ? "✕" : "☰"}
                </MenuButton>
            </NavbarWrapper>

            {/* Backdrop */}
            {ismenuopen && <Backdrop style={backdropSpring} />}

            {/* Modal Circle */}
            <ModalCircle style={modalCircleSpring} ismenuopen={ismenuopen}>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={item.label}
                        style={trail[index]}
                        onClick={() => setismenuopen(false)}
                    >
                        <Link href={item.path}>{item.label}</Link>
                    </MenuItem>
                ))}
            </ModalCircle>
        </>
    );
};

export default Navbar;
