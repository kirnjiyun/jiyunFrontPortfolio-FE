import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import {
    HomeWrapper,
    AnimatedBackground,
    AnimatedText,
    TypingText,
    PortfolioText,
    PromptText,
} from "../styles/Home.styles";
import Image from "next/image";
import Head from "next/head";
import { ScrollGuideText } from "../styles/Home.styles";

const Home: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isAtBottom, setIsAtBottom] = useState(false);

    // 마우스 hover/좌표/스크롤 방향 상태 추가
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollDir, setScrollDir] = useState("down");
    const [prevScrollY, setPrevScrollY] = useState(0);

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
            }
        }, typingSpeed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [fullText]);

    useEffect(() => {
        let ticking = false;

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const scrollHeight = document.documentElement.scrollHeight;
                    const clientHeight = document.documentElement.clientHeight;

                    const progress = scrollTop / (scrollHeight - clientHeight);
                    setScrollProgress(progress);

                    const scrolledToBottom =
                        scrollTop + clientHeight >= scrollHeight - 1;
                    setIsAtBottom(scrolledToBottom);

                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // 스크롤 방향 감지
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY) {
                setScrollDir("down");
            } else if (currentScrollY < prevScrollY) {
                setScrollDir("up");
            }
            setPrevScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    // 마우스 핸들러
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const { backgroundColor, color } = useSpring({
        backgroundColor:
            scrollProgress > 0.4
                ? "var(--color-dark-blue)"
                : "var(--color-lightest-blue)",
        color:
            scrollProgress > 0.4
                ? "var(--color-lightest-blue)"
                : "var(--color-dark-blue)",
        config: { tension: 200, friction: 20 },
    });

    const portfolioSpring = useSpring({
        opacity: scrollProgress > 0.9 ? 1 : 0,
        transform: scrollProgress > 0.9 ? "translateY(0)" : "translateY(20px)",
        config: { tension: 100, friction: 20 },
    });

    const promptSpring = useSpring({
        opacity: isAtBottom ? 1 : 0,
        transform: isAtBottom ? "translateY(0)" : "translateY(20px)",
        config: { tension: 200, friction: 20 },
    });

    return (
        <>
            <Head>
                <title>프론트엔드 개발자 포트폴리오 - 김지윤</title>
                <meta
                    name="description"
                    content="프론트엔드 개발자 김지윤의 포트폴리오 사이트입니다. React, Next.js, UI/UX 최적화 프로젝트 소개."
                />
                <meta
                    name="keywords"
                    content="프론트엔드 포트폴리오, 개발자 포트폴리오, React 포트폴리오, Next.js 개발자, 웹 개발 포트폴리오"
                />
                <meta
                    property="og:title"
                    content="프론트엔드 개발자 포트폴리오 - 김지윤"
                />
                <meta
                    property="og:description"
                    content="React와 Next.js로 구현한 김지윤의 프론트엔드 포트폴리오 사이트입니다."
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
                <ScrollGuideText>아래로 스크롤</ScrollGuideText>
                <AnimatedText>
                    <TypingText>{typedText}</TypingText>
                </AnimatedText>
                <PortfolioText style={portfolioSpring}>
                    김지윤의 포트폴리오입니다.
                </PortfolioText>
                <PromptText
                    style={promptSpring}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    {isHovering && (
                        <Image
                            src="/images/down-left-arrow.png"
                            alt="arrow"
                            width={100}
                            height={100}
                            style={{
                                position: "fixed",
                                top: mousePos.y + 10,
                                left: mousePos.x + 10,
                                pointerEvents: "none",
                                transform: `translate(-50%, -50%) rotate(${
                                    scrollDir === "down" ? 0 : 180
                                }deg)`,
                                transition: "transform 0.3s ease",
                                zIndex: 9999,
                            }}
                        />
                    )}
                </PromptText>
            </HomeWrapper>
        </>
    );
};

export default Home;
