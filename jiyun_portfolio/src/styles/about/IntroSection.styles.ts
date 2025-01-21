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
`;

// 밝은 텍스트 스타일
export const ScrollTextLight = styled(animated.div)`
    font-size: 5rem;
    font-weight: bold;
    color: ${colors.brightestBlue};
    white-space: nowrap;
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
`;

// 이미지 컨테이너 스타일
export const ImageContainer = styled.div`
    margin-bottom: 24px;

    @media (min-width: 769px) {
        flex: 0 0 200px;
        margin-right: 32px;
        margin-bottom: 0;
    }
`;

// 프로필 이미지 스타일
export const ProfileImage = styled.img`
    width: 180px;
    height: 240px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 4px solid ${colors.mediumBlue};
    transition: all 0.3s ease;
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
`;

// 본문 텍스트 스타일
export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 24px;
    color: ${colors.mediumBlue};
`;
