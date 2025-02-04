import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-lightest-blue);
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const ScreenshotButton = styled.button`
    width: 100%;
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    background-color: var(--color-dark-blue);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1rem;
    text-align: center;
    transition: 0.3s ease;

    &:hover {
        background-color: var(--color-medium-blue);
    }
`;

/** 모바일 느낌의 '뒤로가기' 화살표 버튼 (왼쪽 상단) */
export const BackButton = styled.button`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 40px;
    height: 40px;
    background-color: var(--color-dark-blue);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    z-index: 10; /* 위에 표시 */

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #1c2f45; /* 조금 더 진하게 */
    }

    @media (max-width: 600px) {
        top: 1rem;
        left: 1rem;
        width: 36px;
        height: 36px;
    }
`;

/** 화살표 기호 */
export const ArrowSymbol = styled.span`
    color: #fff;
    font-size: 1.2rem;
    line-height: 1;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 4rem auto 2rem;
    background-color: var(--color-lightest-blue);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    position: relative;

    @media (max-width: 600px) {
        margin: 5rem auto 1.5rem;
        padding: 1.5rem;
    }
`;

/** 프로젝트 헤더 (타이틀, 서브타이틀) */
export const ProjectHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

/** 더 크고 세련된 타이틀 */
export const ProjectTitle = styled.h1`
    font-size: 3rem;
    font-weight: bolder;
    letter-spacing: 1px;
    color: var(--color-dark-blue);
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        font-size: 1.8rem;
    }
`;

export const ProjectSubtitle = styled.div`
    min-width: 60px;

    color: var(--color-dark-blue);
    margin-right: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 500px) {
        margin-bottom: 0;
    }
`;

/** 이미지(썸네일) 섹션 */
export const ThumbnailWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`;

/** 2컬럼 레이아웃 */
export const InfoSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

/** 왼쪽 컬럼 */
export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

/** 오른쪽 컬럼 */
export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

/** 프로젝트 설명 */
export const Description = styled.p`
    font-size: 1.1rem;
    color: var(--color-dark-blue);
    line-height: 1.6;
    margin: 0;
`;

/** 인포(기간, 역할, TechStack 등) */
export const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
`;

/** Label / Value 짝 (예: '기간: 2023-01 ~ 2023-03') */
export const InfoLabel = styled.div`
    min-width: 60px;

    color: var(--color-dark-blue);
    margin-right: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 500px) {
        margin-bottom: 0;
    }
`;

export const InfoValue = styled.div`
    font-size: 0.95rem;
    margin-bottom: 0.3rem; /* 추가: 역할들이 붙지 않도록 간격 조정 */

    &:last-child {
        margin-bottom: 0; /* 마지막 요소는 여백 제거 */
    }
    color: var(--color-dark-blue);
`;

/** Tech Stack Badges */
export const BadgesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TechBadge = styled.span`
    background-color: var(--color-dark-blue);
    color: #fff;
    font-size: 0.85rem;
    border-radius: 4px;
    padding: 0.4rem 0.6rem;
    display: inline-block;
    white-space: nowrap;
`;

/** 주요 기능 카드 */
export const FeaturesCard = styled.div`
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6ecf1;
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Larger gap for clear separation */
`;

export const FeaturesTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--color-dark-blue);
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

export const FeaturesSubtitle = styled.h4`
    font-size: 1.2rem;
    color: var(--color-medium-blue);
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase; /* All caps for emphasis */
    letter-spacing: 0.05em;
    text-align: left; /* Left-aligned for cleaner layout */
`;

export const FeaturesList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Larger spacing for clean look */
`;

export const FeatureItem = styled.li`
    font-size: 1rem;
    color: #4a4a4a;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    background-color: #f9fbfc; /* Subtle background */
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-light-blue); /* Highlight hover */
        color: #ffffff;
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Hover shadow */
    }
`;

/** 링크 섹션 */
export const LinkCard = styled.div`
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6ecf1;
`;

export const LinksTitle = styled.h3`
    font-size: 1.1rem;
    color: var(--color-medium-blue);
    margin-bottom: 0.75rem;
`;

export const LinkRow = styled.div`
    margin-bottom: 0.5rem;
`;

export const LinkLabel = styled.span`
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-dark-blue);
    margin-right: 0.5rem;
`;

export const LinkAnchor = styled.a`
    font-size: 0.95rem;
    color: var(--color-light-blue);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
/** Skeleton 스타일 */
export const SkeletonThumbnail = styled.div`
    width: 100%;
    max-width: 600px;
    height: 0;
    padding-top: 56.25%; /* 16:9 비율 유지 */
    background-color: #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% {
            background-color: #e0e0e0;
        }
        50% {
            background-color: #f0f0f0;
        }
        100% {
            background-color: #e0e0e0;
        }
    }
`;
