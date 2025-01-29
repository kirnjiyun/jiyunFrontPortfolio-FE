import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative; /* 자식 요소(.mac-window-bar)를 absolute로 배치하기 위해 필요 */
    width: 320px; /* 카드 폭 */
    margin: 15px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    /* 맥 창 상단 바 */
    .mac-window-bar {
        position: absolute; /* 카드 상단에 고정 */
        top: 0;
        left: 0;
        width: 100%;
        height: 26px;
        z-index: 10; /* 이미지보다 앞으로 보이도록 */
        display: flex;
        align-items: center;
        padding-left: 12px;
        background-color: #f5f5f5;
        border-radius: 8px 8px 0 0; /* 상단 모서리만 둥글게 */
    }

    /* 왼쪽 위 점(트래픽 라이트) 3개 */
    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;

        &.red {
            background-color: #ff5f57; /* 빨간색 */
        }
        &.yellow {
            background-color: #ffbd2e; /* 노란색 */
        }
        &.green {
            background-color: #28c940; /* 초록색 */
        }
    }
`;

export const ProjectImage = styled.img`
    /* 바가 26px 높이 + 약간의 여백을 주기 위해 margin-top 값 조절 */
    margin-top: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto; /* 가로 가운데 정렬 */
    width: 80%; /* 카드 내부에서 적절히 축소해서 표시 */
    height: auto;
    border-radius: 8px; /* 모서리를 둥글게 */
`;

export const ProjectDetails = styled.div`
    margin-top: 1rem; /* 이미지 아래에 간격 추가 */
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center; /* 내용도 가운데 정렬을 원하면 추가 */
`;

export const ProjectTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    color: #00ff00; /* 예시: 연두색 계열 */
    margin: 0;
`;

export const ProjectDescription = styled.p`
    font-size: 0.95rem;
    line-height: 1.4;
    margin: 0;
    color: #ccc; /* 예시: 옅은 회색 */
`;
