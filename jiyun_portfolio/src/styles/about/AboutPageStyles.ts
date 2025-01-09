import styled from "styled-components";
import Image from "next/image";

export const Title = styled.h1`
    font-size: clamp(2rem, 8vw, 6rem);
    color: var(--color-lightest-blue);
    margin: 0;
    white-space: nowrap;
    text-align: center;
    animation: zoomIn 1.5s ease-out forwards; /* forwards로 애니메이션 마지막 상태 유지 */

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
    background-color: var(--color-dark-blue);
    height: 100vh;

    /* 모바일 최적화: 세로 높이 확보가 어려울 경우, 
     min-height 지정 정도로만 조절하는 것도 방법입니다 */
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
    padding: 20px 40px;
    gap: 2rem;
    background-color: var(--color-lightest-blue);
    color: var(--color-dark-blue);
    border-radius: 12px;
    margin: 1rem auto;
    max-width: 900px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
