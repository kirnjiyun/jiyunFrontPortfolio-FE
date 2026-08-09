import styled from "styled-components";

interface ButtonProps {
    isActive: boolean;
}

export const GalleryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const ScreenshotDisplay = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    overflow: hidden;
    height: auto;
    background: var(--color-muted);
    padding: 5%;
    border: 1px solid var(--color-border);
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const ScreenshotImage = styled.img`
    width: 90%;
    height: auto;
    object-fit: contain;
    border-radius: calc(var(--radius) - 2px);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const NavButton = styled.button<ButtonProps>`
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    background: ${(props) => (props.isActive ? "var(--color-primary)" : "var(--color-bg)")};
    color: ${(props) => (props.isActive ? "var(--color-primary-fg)" : "var(--color-fg)")};
    border: 1px solid ${(props) => (props.isActive ? "transparent" : "var(--color-border)")};
    border-radius: calc(var(--radius) - 2px);
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;

    &:hover {
        background: ${(props) => (props.isActive ? "var(--color-primary)" : "var(--color-accent)")};
    }

    @media (max-width: 768px) {
        padding: 0.375rem 0.625rem;
    }
`;
