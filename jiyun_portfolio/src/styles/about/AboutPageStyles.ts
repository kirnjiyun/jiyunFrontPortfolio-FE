import styled from "styled-components";
import Image from "next/image";

export const Title = styled.h1`
    font-size: clamp(2rem, 8vw, 6rem);
    color: var(--color-lightest-blue);
    margin: 0;
    white-space: nowrap;
    text-align: center;
    animation: zoomIn 1.5s ease-out forwards;

    @keyframes zoomIn {
        0% {
            transform: scale(0.5); /* 시작 크기 */
            opacity: 0; /* 시작 상태: 투명 */
        }
        70% {
            transform: scale(1.5); /* 최대 확대 */
            opacity: 1; /* 완전히 나타남 */
        }
        100% {
            transform: scale(1.2); /* 살짝 줄어든 상태로 멈춤 */
            opacity: 1;
        }
    }
`;

export const TypingText = styled.div`
    display: inline-block;
    position: relative;
    line-height: 1.2;
    white-space: nowrap; /* 줄바꿈 없이 가로로만 */

    &::after {
        content: "|";
        position: absolute;
        left: 100%;
        margin-left: 0.2em; /* 텍스트와 커서 사이 간격 */
        color: currentColor;
        font-size: inherit;
        animation: blink 0.8s steps(2, start) infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
`;

export const HeroSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(140deg, #0d1321 0%, #1d2d44 100%);
    height: 100vh;
`;

export const IconContainer = styled.div`
    margin-right: 20px;
`;

export const StyledImage = styled(Image)`
    /* 필요한 추가 스타일 */
`;

// 콘텐츠 영역
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 26px 40px;
    gap: 2rem;
    background-color: rgba(255, 255, 255, 0.92);
    color: var(--color-dark-blue);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    margin: 1.5rem auto 2.5rem;
    max-width: 1000px;
    box-shadow: var(--shadow-md);
`;

export const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
    color: var(--color-medium-blue);
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    line-height: 1.8;
    font-size: 16px;
`;
