import styled from "styled-components";

export const GalleryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ScreenshotDisplay = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    height: 400px; // 원하는 크기로 설정
    background: #f9f9f9;
`;

export const ScreenshotImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const NavButton = styled.button`
    padding: 10px 15px;
    background: ${(props) => (props.isActive ? "#007bff" : "#f0f0f0")};
    color: ${(props) => (props.isActive ? "#fff" : "#000")};
    border: 1px solid ${(props) => (props.isActive ? "#007bff" : "#ddd")};
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover {
        background: #007bff;
        color: #fff;
    }
`;
