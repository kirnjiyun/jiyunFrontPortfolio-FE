import React, { useRef, useState } from 'react';
import {
  IntroButtonWrapper,
  IntroBtn,
} from '../../../styles/about/gamification.styles';
import TimelineModal from './TimelineModal';

export default function IntroButton() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IntroButtonWrapper>
        <IntroBtn
          ref={btnRef}
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          ▶ 간단소개 보기
        </IntroBtn>
      </IntroButtonWrapper>

      {isOpen && (
        <TimelineModal
          onClose={() => setIsOpen(false)}
          triggerRef={btnRef}
        />
      )}
    </>
  );
}
