import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    padding: 20px;
    margin: 15px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
`;

export const ProjectDetails = styled.div`
    text-align: center;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #666;
        margin-bottom: 5px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    strong {
        font-weight: 600;
        color: #444;
    }
`;
