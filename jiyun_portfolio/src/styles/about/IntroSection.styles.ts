import styled from "styled-components";
import { animated } from "react-spring";

// 공통 색상 정의
const colors = {
    darkBlue: "var(--color-dark-blue)",
    mediumBlue: "var(--color-medium-blue)",
    lightestBlue: "var(--color-lightest-blue)",
    brightestBlue: "var(--color-brightest-blue)",
};

export const MainSection = styled.div`
    width: 100%;
    height: 200%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.lightestBlue};
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
        height: auto;
        padding: 1.5rem 0.5rem;
    }
    @media (max-width: 480px) {
        padding: 1rem 0.2rem;
    }
`;

// 스크롤 텍스트 컨테이너
export const ScrollTextContainer = styled.div`
    position: absolute;
    top: 30%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// 어두운 텍스트 스타일
export const ScrollText = styled(animated.div)`
    font-size: 5rem;
    font-weight: bold;
    color: ${colors.darkBlue};
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

// 밝은 텍스트 스타일
export const ScrollTextLight = styled(animated.div)`
    font-size: 5rem;
    font-weight: bold;
    color: ${colors.brightestBlue};
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

// 아래 일반 섹션
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    margin: 16px 0;
    border-radius: 12px;
    background: var(--color-lightest-blue);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    @media (min-width: 769px) {
        flex-direction: row;
        padding: 48px;
    }
    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
    @media (max-width: 768px) {
        padding: 16px 4px;
        margin: 8px 0;
    }
    @media (max-width: 480px) {
        padding: 8px 2px;
    }
`;

// 텍스트 컨테이너
export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// 섹션 제목 스타일
export const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${colors.darkBlue};
    font-family: "SBAggroB";
    text-align: center;
`;

// 본문 텍스트 스타일
export const Paragraph = styled.p`
    margin: 24px 12px;
    font-size: 18px;
    line-height: 1.8;

    color: ${colors.mediumBlue};
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-top: 12px;
        margin-bottom: 12px;
    }
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;
// 추가된 스타일 (기본 스타일 파일 하단에 추가)
export const InfoContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const InfoItem = styled.p`
    font-size: 16px;
    color: ${colors.darkBlue};
`;

export const InfoLink = styled.a`
    color: ${colors.darkBlue};
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

export const TechStack = styled.p`
    font-size: 16px;
    color: ${colors.mediumBlue};
    margin-top: 8px;
`;
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        gap: 12px;
        padding: 16px;
    }
`;
