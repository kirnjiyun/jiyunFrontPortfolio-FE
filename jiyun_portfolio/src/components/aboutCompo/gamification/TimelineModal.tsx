import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TIMELINE_EVENTS } from '../../../data/timelineEvents';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  MoveButtonRow,
  MoveBtn,
  KeyboardHelpRow,
} from '../../../styles/about/gamification.styles';
import { useTimelineReducer } from './useTimelineReducer';
import { useFocusTrap } from './useFocusTrap';
import TimelineStage from './TimelineStage';
import EventDetailPanel from './EventDetailPanel';

const MOVE_STEP = 3;

interface Props {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function TimelineModal({ onClose, triggerRef }: Props) {
  const [state, dispatch] = useTimelineReducer();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleId = 'timeline-modal-title';

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useFocusTrap(containerRef, !state.isDetailOpen);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => triggerRef.current?.focus(), 0);
  }, [onClose, triggerRef]);

  // 키 1회 = 1칸 이동 (e.repeat 무시로 연속입력 차단)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (state.isDetailOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          dispatch({ type: 'CLOSE_DETAIL' });
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          dispatch({ type: 'SET_MOVING', payload: true });
          dispatch({ type: 'MOVE_PLAYER_BY', payload: MOVE_STEP });
          break;
        case 'ArrowLeft':
          e.preventDefault();
          dispatch({ type: 'SET_MOVING', payload: true });
          dispatch({ type: 'MOVE_PLAYER_BY', payload: -MOVE_STEP });
          break;
        case ' ':
          if ((e.target as HTMLElement).tagName === 'BUTTON') break;
          e.preventDefault();
          dispatch({ type: 'OPEN_DETAIL' });
          break;
        case 'Escape':
          e.preventDefault();
          handleClose();
          break;
        default:
          break;
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        dispatch({ type: 'SET_MOVING', payload: false });
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [state.isDetailOpen, dispatch, handleClose]);

  useEffect(() => {
    if (!state.hintVisible) return;
    const t = setTimeout(() => dispatch({ type: 'HIDE_HINT' }), 3000);
    return () => clearTimeout(t);
  }, [state.hintVisible, dispatch]);

  function handleEventActivate(id: string) {
    const event = TIMELINE_EVENTS.find((e) => e.id === id);
    if (!event) return;
    dispatch({ type: 'SNAP_TO_EVENT', payload: event.position });
    dispatch({ type: 'OPEN_DETAIL' });
  }

  function handleMove(direction: 'left' | 'right') {
    const delta = direction === 'right' ? MOVE_STEP * 5 : -MOVE_STEP * 5;
    dispatch({ type: 'SET_MOVING', payload: true });
    dispatch({ type: 'MOVE_PLAYER_BY', payload: delta });
    setTimeout(() => dispatch({ type: 'SET_MOVING', payload: false }), 180);
  }

  const activeEvent = TIMELINE_EVENTS.find((e) => e.id === state.activeEventId) ?? null;

  return (
    <ModalOverlay
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <ModalContainer
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <ModalHeader>
          <ModalTitle id={titleId}>커리어 타임라인</ModalTitle>
          <CloseButton onClick={handleClose} aria-label="타임라인 닫기 (ESC)">
            ✕
          </CloseButton>
        </ModalHeader>

        <div style={{ position: 'relative' }}>
          <TimelineStage
            state={state}
            isMobile={isMobile}
            onEventActivate={handleEventActivate}
          />
          {state.isDetailOpen && activeEvent && (
            <EventDetailPanel
              event={activeEvent}
              onClose={() => dispatch({ type: 'CLOSE_DETAIL' })}
            />
          )}
        </div>

        <MoveButtonRow aria-label="캐릭터 이동 버튼">
          <MoveBtn onPointerDown={() => handleMove('left')} aria-label="왼쪽으로 이동">
            ◀ 이전
          </MoveBtn>
          <MoveBtn onPointerDown={() => handleMove('right')} aria-label="오른쪽으로 이동">
            다음 ▶
          </MoveBtn>
        </MoveButtonRow>

        <KeyboardHelpRow aria-label="키보드 단축키 안내">
          <span>←</span> <span>→</span> 이동&nbsp;&nbsp;
          <span>SPACE</span> 상세보기&nbsp;&nbsp;
          <span>ESC</span> 닫기
        </KeyboardHelpRow>
      </ModalContainer>
    </ModalOverlay>
  );
}
