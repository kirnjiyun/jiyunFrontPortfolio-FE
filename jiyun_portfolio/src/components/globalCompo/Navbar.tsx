import React, { useState, useEffect } from "react";
import { useSpring, useTrail } from "react-spring";
import {
    NavbarWrapper,
    Logo,
    MenuButton,
    ModalCircle,
    MenuItem,
    Backdrop,
} from "../../styles/Navbar.styles";
import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
    const [ismenuopen, setismenuopen] = useState(false);

    // Modal Circle 애니메이션
    const modalCircleSpring = useSpring({
        width: ismenuopen ? "min(92vw, 680px)" : "0px",
        height: ismenuopen ? "min(92vw, 680px)" : "0px",
        config: { duration: 300 },
    });
    const backdropSpring: any = useSpring({
        opacity: ismenuopen ? 1 : 0,
        pointerEvents: ismenuopen ? "auto" : "none",
    });

    // Navbar 애니메이션 (스크롤 시 나타남)
    const navbarSpring = useSpring({
        opacity: 1,
        transform: "translate3d(0,0,0)",
        config: { tension: 200, friction: 20 },
    });

    // 메뉴 항목 애니메이션
    // 메뉴 항목 애니메이션
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "About Me", path: "/about" },
    ];
    const trail = useTrail(menuItems.length || 1, {
        opacity: ismenuopen ? 1 : 0,
        transform: ismenuopen ? "translateY(0)" : "translateY(20px)",
        config: { tension: 500 },
        delay: 400,
    });

    useEffect(() => {
        const closeOnEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setismenuopen(false);
            }
        };

        window.addEventListener("keydown", closeOnEsc);
        return () => window.removeEventListener("keydown", closeOnEsc);
    }, []);

    return (
        <>
            {/* Navbar */}
            <NavbarWrapper style={navbarSpring}>
                <Logo>
                    <Link href="/">
                        <Image
                            src="/images/house.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            style={{ objectFit: "contain", cursor: "pointer" }}
                        />
                    </Link>
                </Logo>

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
