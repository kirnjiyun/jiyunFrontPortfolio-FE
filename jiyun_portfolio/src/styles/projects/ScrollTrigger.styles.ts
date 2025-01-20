// ScrollTriggeredStyles.ts
import styled from "styled-components";
import { animated } from "@react-spring/web";

/**
 * 전체 컨테이너
 */
export const Container = styled.div`
    margin: 100px auto;
    max-width: 500px;
    padding-bottom: 100px;
    width: 100%;
`;

/**
 * 카드 컨테이너
 *  - 카드(이모지)를 감싸고 있는 영역
 */
export const CardContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 20px;
    margin-bottom: -120px;
`;

/**
 * 뒷배경 Splash
 *  - clip-path로 특정 모양을 잘라 배경을 만들고 있음
 */
export const Splash = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: path(
        "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
    );
`;

/**
 * 이모지 카드
 *  - 여기서 실제로 이모지를 표시
 *  - animated.div를 상속하여 스프링 변환을 수용할 수 있음
 */
export const EmojiCard = styled(animated.div)`
    font-size: 164px;
    width: 300px;
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #f5f5f5;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
        0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
        0 0 16px hsl(0deg 0% 0% / 0.075);
    transform-origin: 10% 60%;
`;
