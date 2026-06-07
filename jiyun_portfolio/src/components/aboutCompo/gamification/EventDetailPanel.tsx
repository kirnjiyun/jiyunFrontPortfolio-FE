import React, { useEffect, useRef } from 'react';
import { TimelineEvent } from '../../../data/timelineEvents';
import { useFocusTrap } from './useFocusTrap';
import {
  DetailOverlay,
  DetailCard,
  DetailHeader,
  DetailYear,
  DetailTitle,
  DetailSubtitle,
  DetailDescription,
  TagList,
  Tag,
  DetailCloseBtn,
  TypeBadge,
} from '../../../styles/about/gamification.styles';

const TYPE_LABEL: Record<TimelineEvent['type'], string> = {
  work: '💼 경력',
  education: '🎓 학력',
  project: '🚀 프로젝트',
  award: '🏆 수상',
};

interface Props {
  event: TimelineEvent;
  onClose: () => void;
}

export default function EventDetailPanel({ event, onClose }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(cardRef, true);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  return (
    <DetailOverlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <DetailCard ref={cardRef}>
        <DetailHeader>
          <div>
            <TypeBadge>{TYPE_LABEL[event.type]}</TypeBadge>
            <DetailYear>{event.year}{event.month ? `.${String(event.month).padStart(2, '0')}` : ''}</DetailYear>
            <DetailTitle id="detail-title">{event.title}</DetailTitle>
            <DetailSubtitle>{event.subtitle}</DetailSubtitle>
          </div>
          <DetailCloseBtn
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="상세보기 닫기 (ESC)"
          >
            ✕
          </DetailCloseBtn>
        </DetailHeader>

        <DetailDescription>{event.description}</DetailDescription>

        <TagList>
          {event.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      </DetailCard>
    </DetailOverlay>
  );
}
