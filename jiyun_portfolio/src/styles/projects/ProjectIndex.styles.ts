import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1.05rem 1.4rem;
    background-color: rgba(255, 255, 255, 0.86);
    border: 1px solid var(--color-border);
    border-radius: 14px;
    margin: 1.5rem auto;
    max-width: 900px;
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(10px);

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
    color: var(--color-text-primary);
`;

export const FilterSelect = styled.select`
    padding: 0.55rem 0.95rem;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    font-size: 1rem;
    color: var(--color-text-secondary);
    background-color: var(--color-surface);
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
    margin: 0 auto;
    padding: 1rem;
    max-width: 1280px;
    justify-items: center;

    /* 화면 너비 1220px 이하 → 2열 */
    @media (max-width: 1220px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin: 0 auto;
    }

    /* 화면 너비 900px 이하 → 1열 */
    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin: 0 auto;
    }

    /* 화면 너비 576px 이하 → 1열 */
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        margin: 0 15px;
        gap: 12px;
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const ScrollSection = styled.div`
    min-width: 300px;
    margin-top: -40px;
`;
