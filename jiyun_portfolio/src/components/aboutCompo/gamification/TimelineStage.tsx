import React from 'react';
import { TIMELINE_EVENTS } from '../../../data/timelineEvents';
import {
  StageWrapper,
  TrackRail,
} from '../../../styles/about/gamification.styles';
import PlayerSprite from './PlayerSprite';
import EventNode from './EventNode';
import InteractionHint from './InteractionHint';
import { TimelineState } from './useTimelineReducer';

interface Props {
  state: TimelineState;
  isMobile: boolean;
  onEventActivate: (id: string) => void;
}

export default function TimelineStage({ state, isMobile, onEventActivate }: Props) {
  const { playerPosition, isMoving, activeEventId, viewedEventIds, hintVisible, isDetailOpen } = state;

  function getStatus(eventId: string) {
    if (eventId === activeEventId) return 'active' as const;
    if (viewedEventIds.includes(eventId)) return 'viewed' as const;
    return 'inactive' as const;
  }

  return (
    <StageWrapper $blurred={isDetailOpen}>
      <InteractionHint visible={hintVisible} isMobile={isMobile} />
      <TrackRail aria-hidden="true" />
      <PlayerSprite position={playerPosition} isMoving={isMoving} />
      {TIMELINE_EVENTS.map((event) => (
        <EventNode
          key={event.id}
          event={event}
          status={getStatus(event.id)}
          onActivate={onEventActivate}
        />
      ))}
    </StageWrapper>
  );
}
