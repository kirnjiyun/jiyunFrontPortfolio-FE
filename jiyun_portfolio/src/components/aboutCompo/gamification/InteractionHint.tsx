import React from 'react';
import { HintBadge } from '../../../styles/about/gamification.styles';

interface Props {
  visible: boolean;
  isMobile: boolean;
}

export default function InteractionHint({ visible, isMobile }: Props) {
  if (!visible) return null;

  return (
    <HintBadge role="status" aria-live="polite" aria-atomic="true">
      {isMobile ? (
        <>이벤트를 탭해서 상세보기</>
      ) : (
        <>
          <span>SPACE</span> 로 상세보기
        </>
      )}
    </HintBadge>
  );
}
