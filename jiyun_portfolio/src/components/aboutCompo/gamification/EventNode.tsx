import React from 'react';
import { TimelineEvent } from '../../../data/timelineEvents';
import {
  EventNodeWrapper,
  EventYearLabel,
} from '../../../styles/about/gamification.styles';
import { EventNodeStatus } from '../../../styles/about/gamification.styles';

interface Props {
  event: TimelineEvent;
  status: EventNodeStatus;
  onActivate: (id: string) => void;
}

export default function EventNode({ event, status, onActivate }: Props) {
  return (
    <EventNodeWrapper
      $position={event.position}
      $status={status}
      onClick={() => onActivate(event.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate(event.id);
        }
      }}
      aria-label={`${event.year}년 — ${event.title}. ${
        status === 'viewed' ? '확인한 이벤트' : '탭 또는 클릭으로 상세보기'
      }`}
      aria-pressed={status === 'active'}
    >
      {event.icon}
      <EventYearLabel aria-hidden="true">{event.year}</EventYearLabel>
    </EventNodeWrapper>
  );
}
