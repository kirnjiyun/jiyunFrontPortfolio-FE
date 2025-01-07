import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

export default function ScrollMoveText() {
    const [scrollY, setScrollY] = useState(0);
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    useEffect(() => {
        const handleScroll = () => {
            // 현재 스크롤 위치를 상태로 저장
            setScrollY(window.scrollY);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const leftScroll = useSpring({
        transform: `translateX(-${scrollY * (isMobile ? 0.3 : 1)}px)`,
        config: { tension: 200, friction: 20 },
    });

    const rightScroll = useSpring({
        transform: `translateX(${
            scrollY * (isMobile ? 0.3 : 1) -
            (typeof window !== "undefined" ? window.innerWidth : 0)
        }px)`,
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
    background-color: var(--color-brightest-blue, #dff0ff);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
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
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-dark-blue, #003366);
    white-space: nowrap;
    margin-right: 3rem;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ScrollTextLight = styled(animated.div)`
    display: inline-block;
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-light-blue, #88cfff);
    white-space: nowrap;
    margin-right: 3rem;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
