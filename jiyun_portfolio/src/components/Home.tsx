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

const Home: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showArrow, setShowArrow] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [typedText, setTypedText] = useState("");

    // 스크롤이 맨 아래에 도달했는지 여부
    const [isAtBottom, setIsAtBottom] = useState(false);

    const fullText = " WELCOME";
    const typingSpeed = 150;

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

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            const progress = scrollTop / (scrollHeight - clientHeight); // 스크롤 진행도 계산
            setScrollProgress(progress);

            const scrolledToBottom =
                scrollTop + clientHeight >= scrollHeight - 1; // 맨 아래 여부
            setIsAtBottom(scrolledToBottom);

            setShowArrow(
                scrollTop <= 100 && typedText.length === fullText.length
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [typedText]);

    // (기존) 색상 전환 애니메이션
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

    // (기존) 마우스를 따라다니는 화살표 위치
    const arrowSpring = useSpring({
        top: mousePosition.y + 10,
        left: mousePosition.x + 10,
        config: { tension: 200, friction: 20 },
    });

    // (기존) “김지윤의 포트폴리오입니다.” 애니메이션
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
        <HomeWrapper style={{ backgroundColor, color }}>
            <AnimatedBackground />
            <AnimatedText>
                <TypingText>{typedText}</TypingText>
            </AnimatedText>
            {showArrow && (
                <ArrowIndicator style={arrowSpring}>
                    <img src="/images/down-arrow.png" alt="downarrow" />
                </ArrowIndicator>
            )}
            <PortfolioText style={portfolioSpring}>
                김지윤의 포트폴리오입니다.
            </PortfolioText>
            <PromptText style={promptSpring}>
                <img src="/images/down-left-arrow.png" alt="arrow" />
                메뉴
            </PromptText>
        </HomeWrapper>
    );
};

export default Home;
