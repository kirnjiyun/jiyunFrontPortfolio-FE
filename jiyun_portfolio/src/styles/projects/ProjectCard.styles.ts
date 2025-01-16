import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    margin: 15px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    background-color: var(--color-dark-blue);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const ProjectImage = styled.img`
    /* 이미지가 가득 차도록 설정 */
    width: 100%;
    border-radius: 8px 8px 0 0;
    height: 180px;
    object-fit: cover;
`;

export const ProjectDetails = styled.div`
    /* 텍스트 컨테이너 스타일 */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProjectTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-brightest-blue);
    transition: color 0.3s ease;
`;

export const ProjectDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    color: var(--color-lightest-blue);
    transition: color 0.3s ease;
`;
