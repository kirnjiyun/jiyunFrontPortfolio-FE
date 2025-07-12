import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff; /* 흰색 유지 */
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ScreenshotButton = styled.button`
    width: 100%;
    padding: 12px 20px; /* 패딩 증가로 버튼 크기 키움 */
    font-size: 1rem;
    font-weight: 600; /* 텍스트 굵게 */
    color: var(--color-dark-blue); /* #0e0e0e */
    background-color: var(--color-lightest-blue); /* #eaeaea */
    border: 1px solid var(--color-medium-blue); /* #333333 테두리 추가 */
    border-radius: 0; /* 직선 디자인 유지 */
    cursor: pointer;
    margin-top: 1rem;
    text-align: center;
    transition: all 0.3s ease; /* opacity뿐만 아니라 전체 속성에 부드러운 전환 적용 */

    &:hover {
        background-color: var(
            --color-light-blue
        ); /* #888888으로 약간 어두워짐 */
        color: white;
        opacity: 1; /* 투명도 변화 대신 색상으로 강조 */
    }
`;
export const BackButton = styled.button`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 40px;
    height: 40px;
    background-color: var(--color-medium-blue); /* #333333 */
    border: none;
    border-radius: 0;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--color-light-blue); /* #888888 */
    }

    @media (max-width: 600px) {
        top: 1rem;
        left: 1rem;
        width: 36px;
        height: 36px;
    }
`;

export const ArrowSymbol = styled.span`
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 6rem auto 2rem;
    background-color: #ffffff;
    padding: 3rem;
    position: relative;

    @media (max-width: 600px) {
        margin: 5rem auto 1.5rem;
        padding: 1.5rem;
    }
`;

export const ProjectHeader = styled.div`
    text-align: center; /* 가운데 정렬 */
    margin-bottom: 3rem;
`;

export const ProjectTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: var(--color-dark-blue); /* #0e0e0e */
    margin-bottom: 0.5rem;
    text-align: center; /* 가운데 정렬 */

    @media (max-width: 600px) {
        font-size: 1.8rem;
    }
`;

export const ProjectSubtitle = styled.div`
    color: var(--color-light-blue); /* #888888 */
    margin-bottom: 0.5rem;
    font-size: 1rem;

    @media (max-width: 500px) {
        margin-bottom: 0;
    }
`;

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
    object-fit: cover;
    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.95;
    }
`;

export const InfoSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    min-width: 0;
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    min-width: 0;
`;

export const Description = styled.p`
    font-size: 1.1rem;
    color: var(--color-medium-blue); /* #333333 */
    line-height: 1.6;
    margin: 0;
`;

export const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const InfoLabel = styled.div`
    color: var(--color-light-blue); /* #888888 */
    margin-bottom: 0.5rem;
    font-weight: 600;

    @media (max-width: 500px) {
        margin-bottom: 0;
    }
`;

export const InfoValue = styled.div`
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    color: var(--color-medium-blue); /* #333333 */

    &:last-child {
        margin-bottom: 0;
    }
`;

export const BadgesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TechBadge = styled.span`
    background-color: var(--color-lightest-blue); /* #eaeaea */
    color: var(--color-medium-blue); /* #333333 */
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
    display: inline-block;
    white-space: nowrap;
`;

export const FeaturesCard = styled.div`
    background-color: var(--color-lightest-blue); /* #eaeaea */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;

export const FeaturesTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--color-dark-blue); /* #0e0e0e */
    font-weight: bold;
    text-align: left;
    margin-bottom: 1rem;
`;

export const FeaturesList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FeatureItem = styled.li`
    font-size: 1rem;
    color: var(--color-medium-blue); /* #333333 */
    padding: 0.8rem 0;
`;

export const LinkCard = styled.div`
    background-color: var(--color-lightest-blue); /* #eaeaea */
    padding: 2rem;
    width: 100%;
`;

export const LinksTitle = styled.h3`
    font-size: 1.1rem;
    color: var(--color-dark-blue); /* #0e0e0e */
    margin-bottom: 0.75rem;
`;

export const LinkRow = styled.div`
    margin-bottom: 0.5rem;
`;

export const LinkLabel = styled.span`
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-light-blue); /* #888888 */
    margin-right: 0.5rem;
`;

export const LinkAnchor = styled.a`
    font-size: 0.95rem;
    color: var(--color-darkest-blue); /* #39ff14 */
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const SkeletonTitle = styled.div`
    width: 60%;
    height: 32px;
    background-color: var(--color-lightest-blue); /* #eaeaea */
    animation: pulse 1.5s infinite ease-in-out;
`;

export const SkeletonText = styled.div`
    width: 100%;
    height: 16px;
    background-color: var(--color-lightest-blue); /* #eaeaea */
    animation: pulse 1.5s infinite ease-in-out;

    & + & {
        margin-top: 0.5rem;
    }
`;

export const SkeletonButton = styled.div`
    width: 120px;
    height: 32px;
    background-color: var(--color-light-blue); /* #888888 */
    animation: pulse 1.5s infinite ease-in-out;
`;

const pulseKeyframes = `
  @keyframes pulse {
    0% { background-color: var(--color-lightest-blue); }
    50% { background-color: #f0f0f0; }
    100% { background-color: var(--color-lightest-blue); }
  }
`;

const GlobalStyles = styled.div`
    ${pulseKeyframes}
`;

export default GlobalStyles;
