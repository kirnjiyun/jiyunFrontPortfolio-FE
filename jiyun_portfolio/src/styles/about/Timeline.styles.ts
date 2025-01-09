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
    @media (max-width: 768px) {
        top: 0;
        left: 50%;
        width: 4px;
        height: 100%;
        transform: translateX(-50%);
    }
`;
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
        transform: scale(1.2);
        background: var(--color-medium-blue);
        border: 4px solid var(--color-dark-blue);
    }

    &:hover::after {
        content: attr(data-event);
        position: absolute;
        top: -40px; /* 툴팁 위치 조정 */
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-dark-blue);
        color: var(--color-brightest-blue);
        padding: 5px 10px;
        border-radius: 5px;
        white-space: nowrap;
        font-size: 0.8rem; /* 툴팁 글자 크기 */
    }

    @media (max-width: 768px) {
        top: auto;
        left: 50%; /* 중앙 정렬 */
        transform: translateX(-50%); /* 점을 세로선 중심에 맞춤 */
    }
`;

// 날짜(DateLabel)
export const DateLabel = styled.div`
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-dark-blue);

    @media (max-width: 768px) {
        margin-top: 0;
        margin-left: 10px; /* 점과 날짜 간격 추가 */
        white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    }
`;

export const TimelineItem = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    @media (max-width: 768px) {
        position: relative;
        flex-direction: row; /* 세로 레이아웃에서는 점과 날짜를 가로 정렬 */
        align-items: flex-start; /* 점과 날짜 정렬 */
        margin: 20px 0; /* 항목 간 간격 추가 */
        transform: translateX(-50%); /* 가운데 정렬 */
    }
`;
