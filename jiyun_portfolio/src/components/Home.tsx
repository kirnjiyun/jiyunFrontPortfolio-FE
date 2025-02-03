import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import {
    HomeWrapper,
    AnimatedBackground,
    AnimatedText,
    TypingText,
    ArrowIndicator,
    PortfolioText,
    PromptText,
} from "../styles/Home.styles";
import Image from "next/image";
import Head from "next/head";

const Home: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showArrow, setShowArrow] = useState(false);
    const [typedText, setTypedText] = useState("");

    const fullText = "  WELCOME";
    const typingSpeed = 120;

    // ----------------------
    // 1. 텍스트 타이핑 효과
    // ----------------------
    useEffect(() => {
        let index = 0;
        setTypedText(""); // 초기화

        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
                setShowArrow(true);
            }
        }, typingSpeed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [fullText]);

    // ----------------------
    // 2. 마우스 위치 추적
    // ----------------------
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // --------------------------
    // 3. React Spring 애니메이션 (배경색 전환만 유지)
    // --------------------------
    const { backgroundColor, color } = useSpring({
        backgroundColor:
            window.scrollY > 400
                ? "var(--color-dark-blue)"
                : "var(--color-lightest-blue)",
        color:
            window.scrollY > 400
                ? "var(--color-lightest-blue)"
                : "var(--color-dark-blue)",
        config: { tension: 200, friction: 20 },
    });

    return (
        <>
            <Head>
                <title>프론트엔드 개발자 포트폴리오 - 김지윤</title>
                <meta
                    name="description"
                    content="프론트엔드 개발자 김지윤의 포트폴리오 사이트입니다. React, Next.js, Express 프로젝트 소개."
                />
                <meta
                    name="keywords"
                    content="프론트엔드 포트폴리오, 개발자 포트폴리오, React 포트폴리오, Next.js 개발자, 웹개발 포트폴리오"
                />
                <meta
                    property="og:title"
                    content="프론트엔드 개발자 포트폴리오 - 김지윤"
                />
                <meta
                    property="og:description"
                    content=" Next.js, TypeScript, Express로 구현한 김지윤의 프론트엔드 포트폴리오 사이트입니다."
                />
                <meta
                    property="og:image"
                    content="/images/portfolio-thumbnail.jpg"
                />
                <meta property="og:url" content="https://kimjiyun.site" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <HomeWrapper style={{ backgroundColor, color }}>
                <AnimatedBackground />
                <AnimatedText>
                    <TypingText>{typedText}</TypingText>
                </AnimatedText>
                {showArrow && (
                    <ArrowIndicator>
                        <Image
                            width={100}
                            height={100}
                            style={{
                                position: "fixed",
                                top: mousePosition.y + 10,
                                left: mousePosition.x + 10,
                                width: "100px",
                                pointerEvents: "none",
                                transform: "translate(-50%, -50%)",
                                zIndex: 9999,
                            }}
                            src="/images/down-arrow.png"
                            alt="downarrow"
                        />
                    </ArrowIndicator>
                )}
                <PortfolioText>김지윤의 포트폴리오입니다.</PortfolioText>
            </HomeWrapper>
        </>
    );
};

export default Home;
