import styled from "styled-components";
interface ButtonProps {
    isActive: boolean;
}
export const GalleryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column; /* 모바일에서는 세로 배치 */
        align-items: stretch;
    }
`;

export const ScreenshotDisplay = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    height: auto;
    background: var(--color-brightest-blue); /* 밝은 파란색 배경 */
    padding: 5%; /* 이미지의 10% 여백 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        height: auto; /* 모바일에서는 높이를 자동으로 조정 */
    }
`;

export const ScreenshotImage = styled.img`
    width: 90%; /* 배경 여백을 위해 90% 크기로 조정 */
    height: auto;
    object-fit: contain;
    border-radius: 10px; /* 이미지 모서리 둥글게 */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05); /* 호버 시 확대 효과 */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 강화 */
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: row; /* 모바일에서는 버튼을 가로로 배치 */
        justify-content: center;
    }
`;

export const NavButton = styled.button<ButtonProps>`
    padding: 10px 15px;
    background: ${(props) =>
        props.isActive
            ? "var(--color-medium-blue)"
            : "var(--color-light-blue)"};
    color: ${(props) => (props.isActive ? "#fff" : "var(--color-dark-blue)")};
    border: 1px solid
        ${(props) =>
            props.isActive
                ? "var(--color-medium-blue)"
                : "var(--color-lightest-blue)"};
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, transform 0.2s;

    &:hover {
        background: var(--color-dark-blue);
        color: var(--color-brightest-blue);
        transform: scale(1.05); /* 버튼 호버 시 확대 */
    }

    @media (max-width: 768px) {
        padding: 5px 10px; /* 모바일에서는 크기 줄이기 */
    }
`;
