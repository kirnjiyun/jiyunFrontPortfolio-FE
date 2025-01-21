import styled from "styled-components";
/** ================================
 *   styled-components 정의 영역
 *  ================================ */
export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-lightest-blue);
    display: flex;
    flex-direction: column;
    position: relative;
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
    padding-top: 100vh;
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
    font-weight: 600;
    color: var(--color-medium-blue);
    margin-right: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 500px) {
        margin-bottom: 0;
    }
`;

/** 이미지(갤러리) 섹션 */
export const GallerySection = styled.div`
    margin-bottom: 2rem;
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
    font-size: 1rem;
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
    font-weight: 600;
    color: var(--color-medium-blue);
    margin-right: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 500px) {
        margin-bottom: 0;
    }
`;

export const InfoValue = styled.div`
    font-size: 0.95rem;
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
    background-color: #ffffff; /* Clean white background */
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6ecf1;
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Larger gap for clear separation */
`;

/** 제목 스타일 */
export const FeaturesTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--color-dark-blue);
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

/** Subsection Title (e.g., Team Features, Individual Features) */
export const FeaturesSubtitle = styled.h4`
    font-size: 1.2rem;
    color: var(--color-medium-blue);
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase; /* All caps for emphasis */
    letter-spacing: 0.05em;
    text-align: left; /* Left-aligned for cleaner layout */
`;

/** 리스트 스타일 */
export const FeaturesList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Larger spacing for clean look */
`;

/** 개별 항목 스타일 */
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
    background-color: var(--color-lightest-blue);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
