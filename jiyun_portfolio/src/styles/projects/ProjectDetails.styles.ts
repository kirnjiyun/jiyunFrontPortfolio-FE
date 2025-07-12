import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    background: linear-gradient(
        120deg,
        var(--color-lightest-blue),
        var(--color-brightest-blue)
    );
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
export const HeroSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark-blue);
    height: 100vh;
`;

export const Title = styled.h1`
    font-size: clamp(2rem, 8vw, 6rem);
    background-color: var(--color-dark-blue);
    color: var(--color-lightest-blue);
    margin: 0;
    white-space: nowrap;
    text-align: center;
    animation: zoomIn 1.5s ease-out forwards; /* forwards로 애니메이션 마지막 상태 유지 */

    @keyframes zoomIn {
        0% {
            transform: scale(0.5); /* 시작 크기 */
            opacity: 0; /* 시작 상태: 투명 */
        }
        70% {
            transform: scale(1.5); /* 최대 확대 */
            opacity: 1; /* 완전히 나타남 */
        }
        100% {
            transform: scale(1.2); /* 살짝 줄어든 상태로 멈춤 */
            opacity: 1;
        }
    }
`;

export const Info = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.6;
    strong {
        color: var(--color-medium-blue);
        font-size: 1.2rem;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const StyledLink = styled.a`
    color: var(--color-medium-blue);
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        display: inline-block;
        text-align: center;
        margin: 0 auto;
    }
`;

export const Features = styled.div`
    margin-top: 20px;
    ul {
        margin-top: 10px;
        padding-left: 20px;
        @media (max-width: 768px) {
            padding-left: 0;
            text-align: center;
            list-style-position: inside;
        }
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const FeatureItem = styled.li`
    font-size: 1rem;
    margin-bottom: 5px;
    list-style: disc;
    color: #555;
    &:hover {
        color: var(--color-medium-blue);
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
    }
    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    }
`;

export const Screenshots = styled.div`
    margin-top: 30px;
`;

export const ScreenshotTitle = styled.h2`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;

export const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
`;

export const Screenshot = styled.img`
    width: 200px;
    height: auto;
    display: block;
    border: 2px solid #ccc;
    border-radius: 8px;
`;
import { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const ScreenshotImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    animation: ${slideIn} 0.5s ease-in-out;
`;
