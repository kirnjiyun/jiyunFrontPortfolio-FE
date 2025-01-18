import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column; /* 위아래로 정렬 */
    align-items: center; /* Title을 가운데 정렬 */
    gap: 1rem; /* Title과 카드 사이 간격 */
    padding: 24px;
    border-radius: 12px;
    background: linear-gradient(
        135deg,
        var(--color-lightest-blue),
        var(--color-brightest-blue)
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    min-height: 240px;
    width: 100%;

    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-dark-blue);
    text-align: center;
    margin-bottom: 1rem;
    font-family: "SBAggroB";
`;

export const CardGrid = styled.div`
    display: grid; /* 카드들을 그리드 레이아웃으로 */
    gap: 0.5rem; /* 카드 간 간격 */
    width: 100%;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr); /* 태블릿 이상에서는 네 개 */
    }
`;

export const Card = styled.div`
    width: 200px;
    height: 200px;
    perspective: 1000px;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    position: relative; /* 안내 문구 배치를 위해 필요 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &:hover .hover-text {
        opacity: 1;
        visibility: visible;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    border-radius: 8px;
`;

export const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
`;

export const HoverText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(221, 230, 237, 1);
    color: var(--color-dark-blue);
    padding: 8px;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    opacity: 0; /* 기본 상태에서는 보이지 않음 */
    visibility: hidden;
    transition: opacity 0.3s ease;
`;
