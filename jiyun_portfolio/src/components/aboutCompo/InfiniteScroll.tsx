import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

export default function ScrollMoveText() {
    const [scrollY, setScrollY] = useState(0);
    // window 를 렌더 중에 읽으면 서버/클라이언트 결과가 달라 하이드레이션이 어긋난다.
    // 마운트 이후에 측정해 state 로 반영한다.
    const [viewport, setViewport] = useState({ width: 0, isMobile: false });

    useEffect(() => {
        const measure = () =>
            setViewport({
                width: window.innerWidth,
                isMobile: window.innerWidth <= 768,
            });
        measure();
        window.addEventListener("resize", measure, { passive: true });
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        // 스크롤 이벤트마다 setState 하면 리렌더 + 스프링 재계산이 몰려 버벅인다.
        // rAF 로 프레임당 한 번만 반영한다.
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setScrollY(window.scrollY);
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const speed = viewport.isMobile ? 0.3 : 1;

    const leftScroll = useSpring({
        transform: `translateX(-${scrollY * speed}px)`,
        config: { tension: 200, friction: 20 },
    });

    const rightScroll = useSpring({
        transform: `translateX(${scrollY * speed - viewport.width}px)`,
        config: { tension: 200, friction: 20 },
    });

    return (
        <ScrollContainer>
            <ScrollRow>
                <ScrollText style={leftScroll}>
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                </ScrollText>
            </ScrollRow>
            <ScrollRow>
                <ScrollTextLight style={rightScroll}>
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                </ScrollTextLight>
            </ScrollRow>
            <ScrollRow>
                <ScrollText style={leftScroll}>
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                </ScrollText>
            </ScrollRow>
            <ScrollRow>
                <ScrollTextLight style={rightScroll}>
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                </ScrollTextLight>
            </ScrollRow>
            <ScrollRow>
                <ScrollText style={leftScroll}>
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                    안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                </ScrollText>
            </ScrollRow>
            <ScrollRow>
                <ScrollTextLight style={rightScroll}>
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                    반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
                </ScrollTextLight>
            </ScrollRow>
        </ScrollContainer>
    );
}

// 스타일 정의
const ScrollContainer = styled.div`
    width: 100%;
    background-color: var(--color-muted);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const ScrollRow = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin: 2rem 0;
`;

const ScrollText = styled(animated.div)`
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--color-fg);
    white-space: nowrap;
    margin-right: 3rem;
    opacity: 0.06;
    letter-spacing: -0.02em;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ScrollTextLight = styled(animated.div)`
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--color-muted-fg);
    white-space: nowrap;
    margin-right: 3rem;
    opacity: 0.12;
    letter-spacing: -0.02em;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
