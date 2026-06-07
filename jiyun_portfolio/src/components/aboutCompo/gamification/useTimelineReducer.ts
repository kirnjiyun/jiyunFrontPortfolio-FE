import { useReducer } from 'react';
import { TIMELINE_EVENTS } from '../../../data/timelineEvents';

const REACH_THRESHOLD = 5; // % distance to trigger event activation

export type EventStatus = 'inactive' | 'active' | 'viewed';

export interface TimelineState {
  isModalOpen: boolean;
  playerPosition: number;         // 0–100
  activeEventId: string | null;
  viewedEventIds: string[];
  isDetailOpen: boolean;
  hintVisible: boolean;
  isMoving: boolean;
}

export type Action =
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'MOVE_PLAYER_BY'; payload: number }   // delta
  | { type: 'SNAP_TO_EVENT'; payload: number }     // absolute position
  | { type: 'OPEN_DETAIL' }
  | { type: 'CLOSE_DETAIL' }
  | { type: 'SET_MOVING'; payload: boolean }
  | { type: 'HIDE_HINT' };

const initialState: TimelineState = {
  isModalOpen: false,
  playerPosition: 0,
  activeEventId: null,
  viewedEventIds: [],
  isDetailOpen: false,
  hintVisible: false,
  isMoving: false,
};

function applyMovement(state: TimelineState, nextPos: number): TimelineState {
  const clipped = Math.max(0, Math.min(100, nextPos));
  const nearEvent = TIMELINE_EVENTS.find(
    (e) => Math.abs(e.position - clipped) <= REACH_THRESHOLD
  );

  if (nearEvent && nearEvent.id !== state.activeEventId) {
    return {
      ...state,
      playerPosition: clipped,
      activeEventId: nearEvent.id,
      hintVisible: !state.viewedEventIds.includes(nearEvent.id),
      isDetailOpen: false,
    };
  }

  if (!nearEvent && state.activeEventId !== null) {
    return {
      ...state,
      playerPosition: clipped,
      activeEventId: null,
      hintVisible: false,
    };
  }

  return { ...state, playerPosition: clipped };
}

function reducer(state: TimelineState, action: Action): TimelineState {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...initialState, isModalOpen: true };

    case 'CLOSE_MODAL':
      return { ...initialState };

    case 'SET_MOVING':
      return { ...state, isMoving: action.payload };

    case 'MOVE_PLAYER_BY':
      return applyMovement(state, state.playerPosition + action.payload);

    case 'SNAP_TO_EVENT':
      return applyMovement(state, action.payload);

    case 'OPEN_DETAIL': {
      if (!state.activeEventId) return state;
      return {
        ...state,
        isDetailOpen: true,
        hintVisible: false,
        viewedEventIds: state.viewedEventIds.includes(state.activeEventId)
          ? state.viewedEventIds
          : [...state.viewedEventIds, state.activeEventId],
      };
    }

    case 'CLOSE_DETAIL':
      return { ...state, isDetailOpen: false };

    case 'HIDE_HINT':
      return { ...state, hintVisible: false };

    default:
      return state;
  }
}

export function useTimelineReducer() {
  return useReducer(reducer, initialState);
}
