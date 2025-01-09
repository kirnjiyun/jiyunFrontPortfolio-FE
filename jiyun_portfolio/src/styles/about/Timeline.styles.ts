import styled from "styled-components";

// 타임라인 전체 컨테이너
export const TimelineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 20px;
    background: var(--color-brightest-blue);
`;

// 타임라인
export const Timeline = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
        flex-direction: column; /* 모바일에서 세로 레이아웃 */
        align-items: center;
    }
`;
// 선(Line)
export const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--color-light-blue);
    z-index: 0;
`;

// 점(Point)
export const Point = styled.div`
    position: relative;
    top: -5px; /* 중앙에 위치하도록 조정 */
    width: 16px;
    height: 16px;
    background: var(--color-dark-blue);
    border: 4px solid var(--color-light-blue);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out,
        border 0.3s ease-in-out;

    &:hover {
        transform: scale(1.5);
        background: var(--color-medium-blue);
        border: 4px solid var(--color-dark-blue);
    }

    &:hover::after {
        content: attr(data-event);
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-dark-blue);
        color: var(--color-brightest-blue);
        padding: 5px 10px;
        border-radius: 5px;
        white-space: nowrap;
        font-size: 0.9rem;
    }
`;
// 날짜(DateLabel)
export const DateLabel = styled.div`
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-dark-blue);

    @media (max-width: 768px) {
        margin-top: 10px;
        margin-left: 10px;
    }
`;

export const TimelineItem = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    background-color: green;
    @media (max-width: 768px) {
        position: static;
        flex-direction: row;
        align-items: center;
        margin: 20px 0;
    }
`;
