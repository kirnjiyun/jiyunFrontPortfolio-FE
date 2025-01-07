import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

export default function InfiniteScrollText() {
    // 왼쪽으로 움직이는 애니메이션
    const leftScroll = useSpring({
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-100%)" },
        config: { duration: 5000 },
        loop: true,
    });

    // 오른쪽으로 움직이는 애니메이션
    const rightScroll = useSpring({
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(100%)" },
        config: { duration: 5000 },
        loop: true,
    });

    return (
        <ScrollContainer>
            <ScrollRow>
                <ScrollText style={leftScroll}>
                    안녕하세요 안녕하세요 안녕하세요
                </ScrollText>
                <ScrollText style={leftScroll}>
                    안녕하세요 안녕하세요 안녕하세요
                </ScrollText>
            </ScrollRow>
            <ScrollRow>
                <ScrollTextLight style={rightScroll}>
                    반갑습니다 반갑습니다 반갑습니다
                </ScrollTextLight>
                <ScrollTextLight style={rightScroll}>
                    반갑습니다 반갑습니다 반갑습니다
                </ScrollTextLight>
            </ScrollRow>
        </ScrollContainer>
    );
}

// 컨테이너
const ScrollContainer = styled.div`
    width: 100%;
    height: 100vh; /* 화면 전체 높이 */
    background-color: var(--color-lightest-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`;

// 텍스트가 움직이는 행
const ScrollRow = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

// 어두운 텍스트 스타일
const ScrollText = styled(animated.div)`
    display: inline-block;
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-dark-blue);
    white-space: nowrap;
    margin-right: 3rem;
`;

// 밝은 텍스트 스타일
const ScrollTextLight = styled(animated.div)`
    display: inline-block;
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-light-blue);
    white-space: nowrap;
    margin-right: 3rem;
`;
