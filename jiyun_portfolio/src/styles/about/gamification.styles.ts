import styled, { css, keyframes } from "styled-components";
import type { TimelineEventType } from "../../data/timelineEvents";

/* ─── Animations ─────────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`;

const tooltipIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -100%) translateY(4px); }
  to   { opacity: 1; transform: translate(-50%, -100%) translateY(0); }
`;

const tooltipInBelow = keyframes`
  from { opacity: 0; transform: translate(-50%, 0) translateY(-4px); }
  to   { opacity: 1; transform: translate(-50%, 0) translateY(0); }
`;

/* ─── 타입별 색상 ─────────────────────────────────────────────── */

const TYPE_HEX: Record<TimelineEventType, string> = {
    education: "#1e71c0",
    work: "#b84869",
    etc: "#a68a00",
};

export const typeColor = (type: TimelineEventType, alpha = 1) =>
    `color-mix(in srgb, ${TYPE_HEX[type]} ${alpha * 100}%, transparent)`;

/* ─── 차트 레이아웃 상수 (컴포넌트와 공유) ────────────────────── */

export const LANE_HEIGHT = 52;
export const BAR_HEIGHT = 16;
export const AXIS_HEIGHT = 32;
/** 막대 끝/‘현재’ 라벨이 잘리지 않도록 좌우로 확보하는 여백 */
export const CHART_SIDE_PADDING = 40;

/* ─── IntroButton ─────────────────────────────────────────────── */

export const IntroButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const IntroBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 220px;
    white-space: nowrap;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-primary-fg);
    background: var(--color-primary);
    border: 1px solid transparent;
    border-radius: var(--radius);
    cursor: pointer;
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.9;
    }

    &:focus-visible {
        outline: none;
        box-shadow:
            0 0 0 2px var(--color-bg),
            0 0 0 4px var(--color-ring);
    }
`;

/* ─── Modal ──────────────────────────────────────────────────── */

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: hsl(240 10% 3.9% / 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    animation: ${fadeIn} 0.15s ease;
    backdrop-filter: blur(4px);

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

export const ModalContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 940px;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    overscroll-behavior: contain;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    padding: 1.5rem;
    color: var(--color-fg);
    animation: ${scaleIn} 0.18s ease;
    transition:
        background-color 0.3s ease,
        border-color 0.3s ease;

    &:focus {
        outline: none;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }

    @media (max-width: 600px) {
        padding: 1.125rem 1rem;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.875rem;
    border-bottom: 1px solid var(--color-border);
`;

export const ModalTitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

export const ModalTitle = styled.h2`
    margin: 0;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--color-fg);
`;

export const ModalSubtitle = styled.p`
    font-size: 0.78rem;
    color: var(--color-muted-fg);
    margin: 0;
`;

export const CloseButton = styled.button`
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    color: var(--color-muted-fg);
    font-size: 0.875rem;
    line-height: 1;
    cursor: pointer;
    transition:
        background-color 0.15s ease,
        color 0.15s ease;

    &:hover {
        background: var(--color-accent);
        color: var(--color-fg);
    }

    &:focus-visible {
        outline: none;
        box-shadow:
            0 0 0 2px var(--color-bg),
            0 0 0 4px var(--color-ring);
    }
`;

/* ─── Legend ─────────────────────────────────────────────────── */

export const Legend = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
    margin-bottom: 0.25rem;
`;

export const LegendItem = styled.span<{ $type: TimelineEventType }>`
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: ${(p) => (p.$type === "work" ? "0.864rem" : "0.72rem")};
    color: var(--color-muted-fg);
`;

export const LegendSwatch = styled.span<{ $type: TimelineEventType }>`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: ${(p) => typeColor(p.$type, 0.85)};
`;

/* ─── Chart ──────────────────────────────────────────────────── */

export const ChartScroll = styled.div`
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;

    /* 모바일에서 가로 스크롤로 전체 기간 확인 */
    @media (max-width: 700px) {
        padding-bottom: 0.5rem;
    }
`;

export const ChartWrapper = styled.div`
    position: relative;
    width: 100%;
    min-width: 660px;
    padding: 0.5rem ${CHART_SIDE_PADDING}px 0;
`;

export const ChartBody = styled.div`
    position: relative;
    width: 100%;
`;

export const GridLine = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--color-border);
    opacity: 0.7;
`;

export const NowLine = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--color-muted-fg);
    opacity: 0.55;
`;

/* 한 이벤트(레인) 그룹 */
export const BarRow = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    height: ${LANE_HEIGHT}px;
`;

export const BarLabel = styled.div`
    position: absolute;
    bottom: ${BAR_HEIGHT + 6}px;
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    white-space: nowrap;
    pointer-events: none;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--color-fg);
`;

export const LabelChip = styled.span<{ $type: TimelineEventType }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    font-size: 0.7rem;
    line-height: 1;
    background: ${(p) => typeColor(p.$type, 0.16)};
    border: 1px solid ${(p) => typeColor(p.$type, 0.45)};
`;

export const LabelPeriod = styled.span`
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--color-muted-fg);
`;

/* 기간 막대 */
export const Bar = styled.button<{
    $type: TimelineEventType;
    $active: boolean;
}>`
    position: absolute;
    bottom: 0;
    height: ${BAR_HEIGHT}px;
    min-width: 10px;
    padding: 0;
    border-radius: 5px;
    border: 1px solid ${(p) => typeColor(p.$type, 0.55)};
    background: ${(p) => typeColor(p.$type, p.$active ? 0.95 : 0.55)};
    cursor: pointer;
    transition:
        background-color 0.15s ease,
        transform 0.15s ease,
        box-shadow 0.15s ease;

    ${(p) =>
        p.$active &&
        css`
            transform: scaleY(1.16);
            box-shadow: 0 2px 10px ${typeColor(p.$type, 0.35)};
        `}

    &:focus-visible {
        outline: none;
        box-shadow:
            0 0 0 2px var(--color-bg),
            0 0 0 4px var(--color-ring);
    }
`;

/* 기간이 없는 시점 이벤트 */
export const PointMarker = styled.button<{
    $type: TimelineEventType;
    $active: boolean;
}>`
    position: absolute;
    bottom: 0;
    width: ${BAR_HEIGHT}px;
    height: ${BAR_HEIGHT}px;
    padding: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 2px solid ${(p) => typeColor(p.$type, 0.75)};
    background: ${(p) =>
        p.$active ? typeColor(p.$type, 0.95) : "var(--color-card)"};
    cursor: pointer;
    transition:
        background-color 0.15s ease,
        transform 0.15s ease;

    ${(p) =>
        p.$active &&
        css`
            transform: translateX(-50%) scale(1.15);
        `}

    &:focus-visible {
        outline: none;
        box-shadow:
            0 0 0 2px var(--color-bg),
            0 0 0 4px var(--color-ring);
    }
`;

/* ─── Axis ───────────────────────────────────────────────────── */

export const Axis = styled.div`
    position: relative;
    height: ${AXIS_HEIGHT}px;
    border-top: 1px solid var(--color-border);
`;

export const AxisTick = styled.span`
    position: absolute;
    top: 8px;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: var(--color-muted-fg);
    white-space: nowrap;
`;

export const NowTick = styled.span`
    position: absolute;
    top: 6px;
    transform: translateX(-50%);
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--color-fg);
    background: var(--color-muted);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    padding: 1px 7px;
    white-space: nowrap;
`;

/* ─── Tooltip ────────────────────────────────────────────────── */

export const Tooltip = styled.div<{ $below: boolean }>`
    position: absolute;
    z-index: 40;
    width: max-content;
    max-width: 340px;
    transform: ${(p) =>
        p.$below ? "translate(-50%, 0)" : "translate(-50%, -100%)"};
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    padding: 0.75rem 0.875rem;
    pointer-events: none;
    animation: ${(p) => (p.$below ? tooltipInBelow : tooltipIn)} 0.13s ease;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

export const TooltipHead = styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 0.3rem;
`;

export const TypeBadge = styled.span<{ $type: TimelineEventType }>`
    display: inline-block;
    font-size: ${(p) => (p.$type === "work" ? "0.78rem" : "0.65rem")};
    font-weight: 600;
    letter-spacing: 0.02em;
    color: ${(p) => typeColor(p.$type)};
    background: ${(p) => typeColor(p.$type, 0.12)};
    border: 1px solid ${(p) => typeColor(p.$type, 0.35)};
    padding: 1px 7px;
    border-radius: 999px;
`;

export const TooltipPeriod = styled.span`
    font-size: 0.7rem;
    color: var(--color-muted-fg);
    letter-spacing: 0.02em;
`;

export const TooltipTitle = styled.h3`
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-fg);
    letter-spacing: -0.01em;
    margin: 0 0 0.1rem;
    line-height: 1.35;
`;

export const TooltipSubtitle = styled.p`
    font-size: 0.75rem;
    color: var(--color-muted-fg);
    margin: 0 0 0.45rem;
`;

export const TooltipDescription = styled.p`
    font-size: 0.78rem;
    line-height: 1.65;
    color: var(--color-muted-fg);
    margin: 0 0 0.55rem;
    white-space: normal;
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
`;

export const Tag = styled.span`
    font-size: 0.68rem;
    font-weight: 500;
    padding: 1px 6px;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 4px);
    color: var(--color-muted-fg);
    background: var(--color-muted);
`;

export const HelpText = styled.p`
    margin-top: 0.875rem;
    font-size: 0.72rem;
    color: var(--color-muted-fg);
    text-align: center;
`;
