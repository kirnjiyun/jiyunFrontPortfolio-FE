import styled, { css, keyframes } from 'styled-components';

/* ─── Animations ─────────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const pixelBob = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
`;

const activePulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(111,255,233,0.5), 3px 3px 0 #0d1321; }
  50%       { box-shadow: 0 0 0 6px rgba(111,255,233,0), 3px 3px 0 #0d1321; }
`;

/* ─── IntroButton ─────────────────────────────────────────────── */

export const IntroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 0.5rem;
`;

export const IntroBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  font-family: 'SBAggroB', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  color: var(--color-dark-blue);
  background: var(--color-brightest-blue);
  border: 2px solid var(--color-dark-blue);
  border-radius: 4px;
  cursor: pointer;
  /* pixel shadow */
  box-shadow: 3px 3px 0 var(--color-dark-blue);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  image-rendering: pixelated;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--color-dark-blue);
    background: #3de8d0;
  }
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--color-dark-blue);
  }
  &:focus-visible {
    outline: 3px solid var(--color-dark-blue);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* ─── Modal ──────────────────────────────────────────────────── */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(5, 10, 20, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: ${fadeIn} 0.18s ease;
  backdrop-filter: blur(2px);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  background: #080e1a;
  /* pixel-border effect */
  border: 2px solid var(--color-brightest-blue);
  box-shadow:
    0 0 0 1px #080e1a,
    0 0 0 3px var(--color-medium-blue),
    0 28px 60px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 1.8rem 2rem;
  color: var(--color-lightest-blue);

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 1.2rem 1rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(111, 255, 233, 0.15);
`;

export const ModalTitle = styled.h2`
  font-family: 'SBAggroB', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  color: var(--color-brightest-blue);
  margin: 0;
  /* blinking cursor decorative */
  &::after {
    content: '_';
    animation: ${blink} 1s step-start infinite;
    margin-left: 2px;
  }
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid #3e5c76;
  border-radius: 3px;
  color: #748cab;
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.12s, color 0.12s;

  &:hover {
    border-color: var(--color-brightest-blue);
    color: var(--color-brightest-blue);
  }
  &:focus-visible {
    outline: 2px solid var(--color-brightest-blue);
    outline-offset: 2px;
  }
`;

export const KeyboardHelpRow = styled.p`
  font-size: 0.7rem;
  color: #3e5c76;
  text-align: center;
  margin-top: 1rem;
  letter-spacing: 0.05em;
  font-family: monospace;

  span {
    display: inline-block;
    padding: 1px 5px;
    border: 1px solid #3e5c76;
    border-radius: 2px;
    margin: 0 2px;
    color: #748cab;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

/* ─── TimelineStage ──────────────────────────────────────────── */

interface StageWrapperProps {
  $blurred?: boolean;
}

export const StageWrapper = styled.div<StageWrapperProps>`
  position: relative;
  width: 100%;
  height: 200px;
  background:
    linear-gradient(180deg, #0a1628 0%, #0d1f35 70%, #112240 100%);
  border: 2px solid #1d3a5c;
  border-radius: 6px;
  overflow: visible;
  transition: filter 0.2s ease;
  filter: ${(p) => (p.$blurred ? 'blur(2px) brightness(0.6)' : 'none')};

  /* pixel-style ground line */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 28px;
    background: repeating-linear-gradient(
      90deg,
      #112240 0px,
      #112240 8px,
      #0d1f35 8px,
      #0d1f35 16px
    );
    border-top: 2px solid #1d3a5c;
    border-radius: 0 0 4px 4px;
  }

  @media (max-width: 600px) {
    height: 160px;
  }
`;

export const TrackRail = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: 3%;
  right: 3%;
  height: 3px;
  background: repeating-linear-gradient(
    90deg,
    #748cab 0px,
    #748cab 12px,
    transparent 12px,
    transparent 22px
  );
  border-radius: 2px;
  z-index: 1;
`;

/* ─── PlayerSprite ───────────────────────────────────────────── */

interface PlayerProps {
  $position: number;
  $isMoving: boolean;
}

export const PlayerWrapper = styled.div<PlayerProps>`
  position: absolute;
  top: calc(50% - 10px);
  left: ${(p) => p.$position}%;
  transform: translate(-50%, -100%);
  z-index: 10;
  transition: left 0.1s linear;

  animation: ${pixelBob} 0.7s ease-in-out infinite;
  animation-play-state: ${(p) => (p.$isMoving ? 'running' : 'paused')};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

/* pixel art character: 24×28px hand-crafted with box-shadows */
export const PixelCharacter = styled.div`
  width: 8px;
  height: 8px;
  image-rendering: pixelated;
  position: relative;

  /* Head: 4px block, teal */
  background: var(--color-brightest-blue);
  box-shadow:
    /* head row 1 */
    0px 0px 0 2px var(--color-brightest-blue),
    8px 0px 0 2px var(--color-brightest-blue),
    /* eyes */
    2px 4px 0 2px #0d1321,
    6px 4px 0 2px #0d1321,
    /* body */
    0px 12px 0 2px #1d2d44,
    8px 12px 0 2px #1d2d44,
    4px 12px 0 2px #1d2d44,
    /* legs */
    2px 18px 0 2px #748cab,
    6px 18px 0 2px #748cab;
`;

/* ─── EventNode ──────────────────────────────────────────────── */

export type EventNodeStatus = 'inactive' | 'active' | 'viewed';

interface EventNodeProps {
  $position: number;
  $status: EventNodeStatus;
}

export const EventNodeWrapper = styled.button<EventNodeProps>`
  position: absolute;
  top: calc(50% - 10px);
  left: ${(p) => p.$position}%;
  transform: translate(-50%, -50%);
  width: 38px;
  height: 38px;
  border-radius: 4px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 5;
  background: transparent;
  transition: transform 0.12s ease;
  /* pixel shadow */
  box-shadow: 3px 3px 0 #0d1321;

  ${(p) =>
    p.$status === 'active' &&
    css`
      border-color: var(--color-brightest-blue);
      background: rgba(111, 255, 233, 0.12);
      box-shadow: 3px 3px 0 #0d1321;
      animation: ${activePulse} 1.6s ease infinite;
    `}

  ${(p) =>
    p.$status === 'viewed' &&
    css`
      border-color: #748cab;
      background: rgba(116, 140, 171, 0.15);
      opacity: 0.75;
    `}

  ${(p) =>
    p.$status === 'inactive' &&
    css`
      border-color: #1d3a5c;
      background: #0a1628;
      color: #3e5c76;
      filter: grayscale(60%);
    `}

  &:hover,
  &:focus-visible {
    transform: translate(-50%, -65%);
    filter: grayscale(0%);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brightest-blue);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const EventYearLabel = styled.span`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.62rem;
  font-family: monospace;
  white-space: nowrap;
  color: #748cab;
  letter-spacing: 0.05em;
  pointer-events: none;
`;

/* ─── InteractionHint ────────────────────────────────────────── */

export const HintBadge = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  background: #080e1a;
  border: 1px solid var(--color-brightest-blue);
  color: var(--color-brightest-blue);
  font-size: 0.7rem;
  font-family: monospace;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 3px;
  white-space: nowrap;
  z-index: 20;
  pointer-events: none;
  animation: ${fadeIn} 0.2s ease;
  box-shadow: 2px 2px 0 var(--color-dark-blue);

  span {
    background: rgba(111, 255, 233, 0.15);
    padding: 1px 5px;
    border-radius: 2px;
    border: 1px solid rgba(111, 255, 233, 0.3);
    margin: 0 1px;
  }

  /* blinking dot indicator */
  &::before {
    content: '▶';
    margin-right: 6px;
    animation: ${blink} 0.8s step-start infinite;
    font-size: 0.6rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    &::before {
      animation: none;
    }
  }
`;

/* ─── MoveButtons ────────────────────────────────────────────── */

export const MoveButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.2rem;
`;

export const MoveBtn = styled.button`
  padding: 0.45rem 1.4rem;
  font-family: monospace;
  font-size: 0.85rem;
  background: #0d1f35;
  color: #748cab;
  border: 2px solid #1d3a5c;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  box-shadow: 2px 2px 0 #080e1a;
  transition: background 0.1s, border-color 0.1s, color 0.1s, transform 0.1s;

  &:hover,
  &:focus-visible {
    background: #1d2d44;
    border-color: var(--color-brightest-blue);
    color: var(--color-brightest-blue);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0 #080e1a;
  }
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 0px 0px 0 #080e1a;
  }
  &:focus-visible {
    outline: 2px solid var(--color-brightest-blue);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* ─── EventDetailPanel ───────────────────────────────────────── */

export const DetailOverlay = styled.div`
  position: absolute;
  inset: -2px;
  background: rgba(8, 14, 26, 0.75);
  display: flex;
  align-items: flex-end;
  border-radius: 6px;
  z-index: 30;
  animation: ${fadeIn} 0.15s ease;
  backdrop-filter: blur(1px);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const DetailCard = styled.div`
  width: 100%;
  background: #080e1a;
  border: 2px solid var(--color-brightest-blue);
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  padding: 1.2rem 1.4rem 1rem;
  animation: ${slideUp} 0.18s ease;
  /* pixel inner glow */
  box-shadow: inset 0 1px 0 rgba(111, 255, 233, 0.08);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 600px) {
    padding: 1rem 0.9rem 0.8rem;
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.7rem;
`;

export const TypeBadge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-family: monospace;
  letter-spacing: 0.06em;
  color: var(--color-brightest-blue);
  background: rgba(111, 255, 233, 0.1);
  border: 1px solid rgba(111, 255, 233, 0.25);
  padding: 1px 7px;
  border-radius: 2px;
  margin-bottom: 4px;
`;

export const DetailYear = styled.div`
  font-family: monospace;
  font-size: 0.72rem;
  color: #748cab;
  letter-spacing: 0.1em;
  margin-bottom: 2px;
`;

export const DetailTitle = styled.h3`
  font-family: 'SBAggroB', sans-serif;
  font-size: 1rem;
  color: var(--color-lightest-blue);
  margin: 0 0 0.1rem;
  line-height: 1.3;
`;

export const DetailSubtitle = styled.p`
  font-size: 0.78rem;
  color: #748cab;
  margin: 0 0 0.6rem;
`;

export const DetailDescription = styled.p`
  font-size: 0.83rem;
  line-height: 1.75;
  color: #8fa8c0;
  margin: 0 0 0.8rem;
  border-left: 2px solid rgba(111, 255, 233, 0.2);
  padding-left: 0.8rem;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Tag = styled.span`
  font-size: 0.68rem;
  font-family: monospace;
  padding: 2px 8px;
  border: 1px solid #1d3a5c;
  border-radius: 2px;
  color: #748cab;
  background: #0d1f35;
  letter-spacing: 0.04em;
`;

export const DetailCloseBtn = styled.button`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid #1d3a5c;
  border-radius: 3px;
  color: #748cab;
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 0.1s, color 0.1s;

  &:hover {
    border-color: var(--color-brightest-blue);
    color: var(--color-brightest-blue);
  }
  &:focus-visible {
    outline: 2px solid var(--color-brightest-blue);
    outline-offset: 2px;
  }
`;
