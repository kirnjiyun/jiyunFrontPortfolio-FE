// import React, { useState, useEffect } from "react";
// import { useSpring, animated, useTrail } from "react-spring";
// import styled from "styled-components";

// const HomeWrapper = styled(animated.div)`
//     width: 100vw;
//     height: 200vh; /* 충분한 높이로 설정해 스크롤 가능 */
//     overflow-x: hidden;
//     position: relative;
// `;

// const AnimatedBackground = styled(animated.div)`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//         135deg,
//         var(--color-lightest-blue) 50%,
//         var(--color-dark-blue) 50%
//     );
//     z-index: -1;
// `;

// const AnimatedText = styled.div`
//     display: flex;
//     font-size: 6rem;
//     font-weight: bold;
//     justify-content: center;
//     margin-top: 30vh;
// `;

// const AnimatedLetter = styled(animated.span)`
//     margin: 0 4px;
// `;

// const ArrowIndicator = styled(animated.div)`
//     position: absolute;
//     font-size: 2rem;
//     animation: bounce 1.5s infinite;
//     pointer-events: none;

//     @keyframes bounce {
//         0%,
//         100% {
//             transform: translateY(0);
//         }
//         50% {
//             transform: translateY(10px);
//         }
//     }
// `;

// const PortfolioText = styled(animated.div)`
//     position: absolute;
//     top: 150vh; /* 스크롤을 내리면 나타나는 위치 */
//     width: 100%;
//     text-align: center;
//     font-size: 4rem;
//     font-weight: bold;
// `;

// const Home: React.FC = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [showArrow, setShowArrow] = useState(false);
//     const [scrollProgress, setScrollProgress] = useState(0);

//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         };

//         const handleScroll = () => {
//             const progress = Math.min(
//                 1,
//                 window.scrollY / (window.innerHeight * 0.5)
//             );
//             setScrollProgress(progress);

//             if (window.scrollY > 100) {
//                 setShowArrow(false);
//             } else {
//                 setShowArrow(true);
//             }
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     // 배경 및 텍스트 색상 애니메이션
//     const { backgroundColor, color } = useSpring({
//         backgroundColor:
//             scrollProgress > 0.5
//                 ? "var(--color-dark-blue)"
//                 : "var(--color-lightest-blue)",
//         color:
//             scrollProgress > 0.5
//                 ? "var(--color-lightest-blue)"
//                 : "var(--color-dark-blue)",
//         config: { tension: 200, friction: 20 },
//     });

//     // "안녕하세요" 텍스트 애니메이션
//     const helloLetters = "안녕하세요".split("");
//     const helloTrail = useTrail(helloLetters.length, {
//         from: { opacity: 0, transform: "translateY(20px)" },
//         to: { opacity: 1, transform: "translateY(0)" },
//         config: { tension: 200, friction: 20 },
//         delay: 2000,
//         onRest: () => setShowArrow(true), // 텍스트 애니메이션 끝난 후 화살표 표시
//     });

//     // 화살표 위치 애니메이션
//     const arrowSpring = useSpring({
//         top: mousePosition.y + 10, // 마우스 아래에 위치
//         left: mousePosition.x + 10,
//         config: { tension: 200, friction: 20 },
//     });

//     // "김지윤의 포트폴리오입니다." 텍스트 애니메이션
//     const portfolioSpring = useSpring({
//         opacity: scrollProgress > 0.5 ? 1 : 0,
//         transform: scrollProgress > 0.5 ? "translateY(0)" : "translateY(20px)",
//         config: { tension: 200, friction: 20 },
//     });

//     return (
//         <HomeWrapper style={{ backgroundColor, color }}>
//             {/* 배경 애니메이션 */}
//             <AnimatedBackground />

//             {/* "안녕하세요" 텍스트 애니메이션 */}
//             <AnimatedText>
//                 {helloTrail.map((props, index) => (
//                     <AnimatedLetter key={index} style={props}>
//                         {helloLetters[index]}
//                     </AnimatedLetter>
//                 ))}
//             </AnimatedText>

//             {/* 화살표 애니메이션 */}
//             {showArrow && (
//                 <ArrowIndicator style={arrowSpring}>↓</ArrowIndicator>
//             )}

//             {/* "김지윤의 포트폴리오입니다." 텍스트 애니메이션 */}
//             <PortfolioText style={portfolioSpring}>
//                 김지윤의 포트폴리오입니다.
//             </PortfolioText>
//         </HomeWrapper>
//     );
// };

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
    font-size: 2rem;
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

/* --- 실제 Home 컴포넌트 --- */
const Home: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showArrow, setShowArrow] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const [typedText, setTypedText] = useState("");

    const fullText = " WELCOME";
    const typingSpeed = 150;
    useEffect(() => {
        let index = 0; // 타이핑 위치 초기화
        setTypedText(""); // 타이핑 텍스트 초기화 (중복 방지)

        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval); // 타이핑이 끝났으면 정리
                setShowArrow(true); // 화살표 표시
            }
        }, typingSpeed);

        return () => {
            clearInterval(typingInterval); // 컴포넌트 언마운트 시 Interval 정리
        };
    }, [fullText]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            const progress = Math.min(
                1,
                window.scrollY / (window.innerHeight * 0.5)
            );
            setScrollProgress(progress);

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

    // 화살표 위치 (마우스 따라다니기)
    const arrowSpring = useSpring({
        top: mousePosition.y + 10, // 마우스 커서 아래쪽
        left: mousePosition.x + 10,
        config: { tension: 200, friction: 20 },
    });

    // "김지윤의 포트폴리오입니다." 텍스트 애니메이션
    const portfolioSpring = useSpring({
        opacity: scrollProgress > 0.5 ? 1 : 0,
        transform: scrollProgress > 0.5 ? "translateY(0)" : "translateY(20px)",
        config: { tension: 200, friction: 20 },
    });

    // ==========================
    // 렌더
    // ==========================
    return (
        <HomeWrapper style={{ backgroundColor, color }}>
            <AnimatedBackground />
            <AnimatedText>
                <TypingText>{typedText}</TypingText>
            </AnimatedText>
            {showArrow && (
                <ArrowIndicator style={arrowSpring}>↓</ArrowIndicator>
            )}

            {/* 스크롤 후 "김지윤의 포트폴리오입니다." */}
            <PortfolioText style={portfolioSpring}>
                김지윤의 포트폴리오입니다.
            </PortfolioText>
        </HomeWrapper>
    );
};

export default Home;
