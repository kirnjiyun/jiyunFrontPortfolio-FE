import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px; /* 가로 크기 증가 */
    height: 350px; /* 세로 크기 약간 줄임 */
    @media (max-width: 576px) {
        max-width: 300px; /* 모바일에서는 조금 작게 */
        height: 300px;
    }
    margin: 0 auto;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease,
        background-color 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.8); /* 투명도 0.8로 설정 */
        border: 2px solid #fff;
    }
`;

export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: 160px; /* 이미지 높이 조정 */
    object-fit: cover;
    border-radius: 12px 12px 0 0;
    transition: opacity 0.3s ease;

    ${ProjectCardContainer}:hover & {
        opacity: 0;
    }
`;

export const ProjectDetails = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
    height: calc(100% - 160px); /* 이미지 높이에 맞게 조정 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: opacity 0.3s ease;

    ${ProjectCardContainer}:hover & {
        opacity: 0;
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-dark-blue);
    margin: 0;
`;

export const ProjectDescription = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    color: #666;
    flex-grow: 1;
`;

export const TechStackContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${ProjectCardContainer}:hover & {
        opacity: 1;
        transform: scale(1);
    }
`;

export const TechStackTag = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2); /* 뱃지 배경 색상 */
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5); /* 뱃지 테두리 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
