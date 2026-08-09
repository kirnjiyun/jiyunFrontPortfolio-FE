import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Container = styled.div`
    margin: 100px auto;
    max-width: 500px;
    padding-bottom: 100px;
    width: 100%;
`;

export const CardContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 10px;
    margin-bottom: -100px;
`;

export const Splash = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.18;
    clip-path: path(
        "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
    );
`;

export const EmojiCard = styled(animated.div)`
    font-size: 164px;
    width: 300px;
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    background: var(--color-card);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    transform-origin: 10% 60%;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;
