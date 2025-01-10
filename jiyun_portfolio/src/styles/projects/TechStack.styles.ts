import styled from "styled-components";

export const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
`;

export const TechBadge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 8px; /* 덜 동그랗게 */
    color: var(--color-brightest-blue); /* 글씨 색상 */
    background-color: var(--color-dark-blue); /* 배경 색상 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    cursor: default;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }
`;
