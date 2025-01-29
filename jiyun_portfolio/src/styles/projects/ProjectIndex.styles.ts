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
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    @media (max-width: 576px) {
        grid-template-columns: 1fr; /* 1개의 열 */
        margin: 0 16px; /* 양옆 마진 */
    }

    /* 태블릿: 한 줄에 2개 */
    @media (min-width: 577px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
        margin: 0 24px; /* 양옆 마진 */
    }

    /* 데스크탑: 최대 4개 */
    @media (min-width: 1025px) {
        grid-template-columns: repeat(4, 1fr); /* 최대 4개의 열 */
        margin: 0 120px; /* 양옆 마진 */
    }
    .project-enter {
        opacity: 0;
        transform: translateY(10px);
    }
    .project-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms, transform 300ms;
    }
    .project-exit {
        opacity: 1;
        transform: translateY(0);
    }
    .project-exit-active {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 300ms, transform 300ms;
    }
`;
export const ScrollSection = styled.div`
    min-width: 300px;
    margin-top: -100px;
`;
