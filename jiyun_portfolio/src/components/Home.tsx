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

const Home: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isAtBottom, setIsAtBottom] = useState(false);

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
        opacity: scrollProgress > 0.95 ? 1 : 0,
        transform: scrollProgress > 0.95 ? "translateY(0)" : "translateY(20px)",
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

                <AnimatedText>
                    <TypingText>{typedText}</TypingText>
                </AnimatedText>
                <PortfolioText style={portfolioSpring}>
                    김지윤의 포트폴리오입니다.
                </PortfolioText>
                <PromptText style={promptSpring}>
                    <Image
                        src="/images/down-left-arrow.png"
                        alt="arrow"
                        width={50}
                        height={50}
                        style={{ cursor: "pointer" }}
                    />
                    메뉴
                </PromptText>
            </HomeWrapper>
        </>
    );
};

export default Home;
