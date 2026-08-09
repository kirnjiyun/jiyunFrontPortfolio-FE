import styled, { keyframes } from "styled-components";

export const MaintenanceWrapper = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    background-color: var(--color-bg);
    transition: background-color 0.3s ease;
`;

export const MaintenanceHeader = styled.div`
    text-align: center;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MaintenanceBadge = styled.span`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: calc(var(--radius) - 2px);
    background: var(--color-muted);
    color: var(--color-muted-fg);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    margin-bottom: 1.25rem;
    border: 1px solid var(--color-border);
`;

export const MaintenanceTitle = styled.h1`
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: 700;
    color: var(--color-fg);
    margin-bottom: 0.75rem;
    line-height: 1.3;
    letter-spacing: -0.03em;
`;

export const MaintenanceDescription = styled.p`
    font-size: 1rem;
    color: var(--color-muted-fg);
    line-height: 1.7;
    margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;
`;

export const DownloadButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 220px;
    white-space: nowrap;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-primary-fg);
    background: var(--color-primary);
    border: 1px solid transparent;
    border-radius: var(--radius);
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.9;
    }
`;

// 1. 깜빡임 효과 극대화 (투명도를 크게 왔다 갔다 하게 설정)
const blinks = keyframes`
    0%, 100% {
        opacity: 0.15; /* 평소에는 거의 안 보이게 */
    }
    50% {
        opacity: 0.55; /* 깜빡일 때만 선명하게 보이게 */
    }
`;

export const PreviewButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 220px;
    white-space: nowrap;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-fg);

    /* 2. 전체적으로 덜 보이게 배경과 테두리 색상 농도를 낮춤 */
    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-primary) 25%, transparent);
    border-radius: var(--radius);

    animation: ${blinks} 1.8s ease-in-out infinite;

    transition:
        opacity 0.15s ease,
        background-color 0.15s ease;

    &:hover {
        animation-play-state: paused;
        opacity: 1; /* 마우스를 올렸을 때는 선명하게 보이도록 유지 */
        background: color-mix(in srgb, var(--color-primary) 20%, transparent);
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;
