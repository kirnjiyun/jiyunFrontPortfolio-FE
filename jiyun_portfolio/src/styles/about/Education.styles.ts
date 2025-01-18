import styled from "styled-components";

// 공통 색상 정의
const colors = {
    darkBlue: "var(--color-dark-blue)",
    mediumBlue: "var(--color-medium-blue)",
    lightestBlue: "var(--color-lightest-blue)",
    brightestBlue: "var(--color-brightest-blue)",
};

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    margin: 16px 0;
    border-radius: 12px;
    background: linear-gradient(
        135deg,
        ${colors.lightestBlue},
        ${colors.brightestBlue}
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    min-height: 300px;
    width: 100%;

    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.darkBlue};
    margin-bottom: 20px;
    text-align: center;
    font-family: "SBAggroB";
`;

export const List = styled.ul`
    list-style: none;

    li {
        color: ${colors.mediumBlue};
        margin: 1rem;
        font-size: 1rem;
    }

    strong {
        color: ${colors.darkBlue};
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 20px;
    border-radius: 12px;
    background: linear-gradient(
        135deg,
        ${colors.lightestBlue},
        ${colors.brightestBlue}
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
`;
