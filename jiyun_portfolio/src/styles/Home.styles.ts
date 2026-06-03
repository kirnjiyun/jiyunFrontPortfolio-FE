import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";

// 전체 래퍼
export const HomeWrapper = styled(animated.div)`
    width: 100vw;
    min-height: 200vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    padding-left: 84px;
    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
        padding: 64px 0 2rem;
    }
    @media (max-width: 480px) {
        padding-bottom: 1rem;
    }
`;

// 배경
export const AnimatedBackground = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, #f8fbff 0%, #e7eef9 35%, #1d2d44 100%);
    z-index: -1;
`;

// 타이핑(혹은 글자) 영역
export const AnimatedText = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24vh;
    font-weight: normal;
    font-size: clamp(3rem, 10vw, 8rem);
    letter-spacing: 0.08em;

    @media (max-width: 768px) {
        font-size: 4rem;
        margin-top: 20vh;
    }
    @media (max-width: 480px) {
        font-size: 2.2rem;
        margin-top: 12vh;
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
        right: -24px;
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
    top: 145vh;
    width: 100%;
    text-align: center;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--color-lightest-blue);
    text-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
    @media (max-width: 768px) {
        font-size: 2rem;
    }
    @media (max-width: 480px) {
        position: absolute;
        top: unset;
        bottom: 60px;
        left: 0;
        right: 0;
        font-size: 2rem;
        padding: 0 8px;
    }
`;

export const PromptText = styled(animated.div)`
    position: absolute;
    bottom: 2rem;
    left: calc(84px + 2rem);
    width: auto;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 0.65rem 1rem;
    border-radius: 999px;
    color: var(--color-lightest-blue);
    background: rgba(13, 19, 33, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.24);

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
        left: 1rem;
        bottom: 1rem;
    }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(15px);}
`;

export const ArrowImage = styled.img`
    animation: ${bounce} 1.2s infinite;
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

export const ScrollGuideText = styled.div`
    position: absolute;
    top: 42px;
    left: calc(84px + 2rem);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    opacity: 0.85;
    z-index: 10;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    @media (max-width: 600px) {
        top: 84px;
        left: 16px;
        font-size: 0.78rem;
    }
`;

export const HeroSubText = styled.p`
    margin-top: 1.4rem;
    text-align: center;
    color: rgba(13, 19, 33, 0.72);
    font-size: clamp(1rem, 2.2vw, 1.35rem);
    letter-spacing: 0.04em;
`;
