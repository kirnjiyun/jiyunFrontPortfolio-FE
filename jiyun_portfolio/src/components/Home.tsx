import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

/* --- styled-components는 컴포넌트 함수 밖에서 선언 --- */

// 전체 래퍼
const HomeWrapper = styled(animated.div)`
    width: 100vw;
    height: 200vh; /* 스크롤 가능 높이 */
    overflow-x: hidden;
    position: relative;
`;

// 배경
const AnimatedBackground = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        var(--color-lightest-blue) 50%,
        var(--color-dark-blue) 50%
    );
    z-index: -1;
`;

// 타이핑(혹은 글자) 영역
const AnimatedText = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30vh;
    font-weight: normal;
    font-size: 6rem;

    /* 반응형 예시 */
    @media (max-width: 768px) {
        font-size: 3rem;
        margin-top: 20vh;
    }
`;

// 실제 텍스트가 들어갈 div
const TypingText = styled.div`
    line-height: 1.2;
    display: inline-block;
    position: relative;
    &::after {
        content: "|";
        position: absolute;
        right: -40px; /* 텍스트 바로 뒤에 위치 */
        animation: blink 1s steps(2, start) infinite;
        color: currentColor; /* 텍스트 색상과 동일하게 */
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

// 화살표
const ArrowIndicator = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: bounce 1.5s infinite;
    pointer-events: none;

    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
    }
`;

// 스크롤 후 보여줄 텍스트
const PortfolioText = styled(animated.div)`
    position: absolute;
    top: 150vh; /* 스크롤을 내리면 나타나는 위치 */
    width: 100%;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;

    /* 모바일 반응형 */
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
const PromptText = styled(animated.div)`
    position: absolute;
    bottom: 1vh;
    left: 80px;
    width: 200px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: lighter;

    /* 깜박이는 효과 */
    @keyframes blinkText {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
    animation: blinkText 1.2s infinite;

    /* 반응형 */
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

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
            // (1) 전체 스크롤 진행도 (기존)
            const progress = Math.min(
                1,
                window.scrollY / (window.innerHeight * 0.5)
            );
            setScrollProgress(progress);

            // (2) 스크롤 위치가 맨 아래 도달했는지 여부
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 1;

            setIsAtBottom(scrolledToBottom);

            // (3) 기존 화살표 on/off 로직
            if (window.scrollY > 100) {
                setShowArrow(false);
            } else {
                setShowArrow(typedText.length === fullText.length);
            }
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
        opacity: scrollProgress > 0.9 ? 1 : 0,
        transform: scrollProgress > 0.9 ? "translateY(0)" : "translateY(20px)",
        config: { tension: 100, friction: 20 },
    });

    // (중요) 맨 아래 도달 시에만 깜빡이며 표시할 화살표 애니메이션
    //   -> isAtBottom === true 면 나타남
    //   -> opacity와 transform을 이용해 페이드 인
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
            {/* 스크롤 후 "김지윤의 포트폴리오입니다." */}
            <PortfolioText style={portfolioSpring}>
                김지윤의 포트폴리오입니다.
            </PortfolioText>{" "}
            <PromptText style={promptSpring}>
                <img src="/images/down-left-arrow.png" alt="arrow" />
                메뉴
            </PromptText>
        </HomeWrapper>
    );
};

export default Home;
