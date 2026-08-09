import React, { useCallback, useEffect, useRef } from "react";
import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalTitleGroup,
    ModalTitle,
    ModalSubtitle,
    CloseButton,
} from "../../../styles/about/gamification.styles";
import { useFocusTrap } from "./useFocusTrap";
import TimelineChart from "./TimelineChart";

interface Props {
    onClose: () => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function TimelineModal({ onClose, triggerRef }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleId = "timeline-modal-title";

    useFocusTrap(containerRef, true);

    useEffect(() => {
        containerRef.current?.focus();
    }, []);

    const handleClose = useCallback(() => {
        onClose();
        setTimeout(() => triggerRef.current?.focus(), 0);
    }, [onClose, triggerRef]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                e.preventDefault();
                handleClose();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClose]);

    return (
        <ModalOverlay
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
        >
            <ModalContainer
                ref={containerRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
            >
                <ModalHeader>
                    <ModalTitleGroup>
                        <ModalTitle id={titleId}>타임라인</ModalTitle>
                        <ModalSubtitle>
                            경험들을 시간순으로 정리했습니다.
                        </ModalSubtitle>
                    </ModalTitleGroup>
                    <CloseButton
                        onClick={handleClose}
                        aria-label="타임라인 닫기 (ESC)"
                    >
                        ✕
                    </CloseButton>
                </ModalHeader>

                <TimelineChart />
            </ModalContainer>
        </ModalOverlay>
    );
}
