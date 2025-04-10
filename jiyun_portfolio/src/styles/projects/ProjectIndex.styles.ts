import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    background-color: var(--color-lightest-blue);
    border-radius: 8px;
    margin: 1.5rem 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 576px) {
        flex-direction: column;
        gap: 1rem;
        margin: 1rem;
    }
`;

export const FilterLabel = styled.label`
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-dark-blue);
`;

export const FilterSelect = styled.select`
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-light-blue);
    border-radius: 4px;
    font-size: 1rem;
    color: var(--color-medium-blue);
    background-color: var(--color-brightest-blue);
    transition: border-color 0.3s;

    &:hover {
        border-color: var(--color-medium-blue);
    }

    &:focus {
        outline: none;
        border-color: var(--color-dark-blue);
    }
`;

export const FilterCheckbox = styled.input`
    accent-color: var(--color-dark-blue);
    width: 18px;
    height: 18px;
    cursor: pointer;
`;

export const ProjectTransitionStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(400px, 1fr)
    ); /* 카드 가로 크기에 맞게 조정 */
    gap: 16px;
    margin: 0 100px;
    padding: 1rem;
    justify-items: center;

    /* 화면 너비 1220px 이하 → 2열 */
    @media (max-width: 1220px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin: 0 50px;
    }

    /* 화면 너비 900px 이하 → 1열 */
    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin: 0 30px;
    }

    /* 화면 너비 576px 이하 → 1열 */
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        margin: 0 15px;
        gap: 12px;
    }

    .project-enter {
        opacity: 0;
    }
    .project-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in-out;
    }
    .project-exit {
        opacity: 1;
    }
    .project-exit-active {
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    }
`;

export const ScrollSection = styled.div`
    min-width: 300px;
    margin-top: -100px;
`;
