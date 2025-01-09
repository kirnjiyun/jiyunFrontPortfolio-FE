import styled from "styled-components";
import { animated } from "react-spring";

// 전체 래퍼
export const HomeWrapper = styled(animated.div)`
    width: 100vw;
    height: 200vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
`;

// 배경
export const AnimatedBackground = styled(animated.div)`
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
export const AnimatedText = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30vh;
    font-weight: normal;
    font-size: 6rem;

    @media (max-width: 768px) {
        font-size: 3rem;
        margin-top: 20vh;
    }
`;

// 실제 텍스트
export const TypingText = styled.div`
    line-height: 1.2;
    display: inline-block;
    position: relative;
    &::after {
        content: "|";
        position: absolute;
        right: -40px;
        animation: blink 1s steps(2, start) infinite;
        color: currentColor;
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
export const ArrowIndicator = styled(animated.div)`
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

// 포트폴리오 텍스트
export const PortfolioText = styled(animated.div)`
    position: absolute;
    top: 150vh;
    width: 100%;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const PromptText = styled(animated.div)`
    position: absolute;
    bottom: 1vh;
    left: 80px;
    width: 200px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: lighter;

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

    @media (max-width: 768px) {
        display: none;
    }
`;
