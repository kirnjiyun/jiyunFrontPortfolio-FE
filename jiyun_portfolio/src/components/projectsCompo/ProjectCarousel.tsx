import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled, { css, keyframes } from "styled-components";

const images = [
    "/images/projects/book.jpg",
    "/images/projects/deluxury.png",
    "/images/projects/feelmyrhythm.png",
    "/images/projects/yunflix.png",
];

export default function ProjectCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <CarouselContainer>
            <TransparentBackground />

            <StyledCarousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                customLeftArrow={<CustomArrow direction="left" />}
                customRightArrow={<CustomArrow direction="right" />}
            >
                {images.map((image, index) => (
                    <ImageWrapper key={index}>
                        <Image src={image} alt={`project-${index}`} />
                    </ImageWrapper>
                ))}
            </StyledCarousel>
        </CarouselContainer>
    );
}

// 왼쪽/오른쪽 화살표 커스텀 컴포넌트
const CustomArrow = ({ onClick, direction }: any) => (
    <ArrowContainer direction={direction} onClick={onClick}>
        <ArrowIcon direction={direction} />
    </ArrowContainer>
);

// 스타일 컴포넌트
const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--color-dark-blue);
`;

const TransparentBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const StyledCarousel = styled(Carousel)`
    position: relative;
    z-index: 2;
    .react-multi-carousel-dot button {
        background: rgba(var(--color--lightest-blue), 0.5);
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }

    .react-multi-carousel-dot--active button {
        background: var(--color--lightest-blue);
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 65%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const ArrowContainer = styled.div<{ direction: string }>`
    position: absolute;
    top: 50%;
    ${(props) => (props.direction === "left" ? "left: 20px;" : "right: 20px;")}
    transform: translateY(-50%);
    color: #fff;
    cursor: pointer;
    z-index: 3;

    &:hover svg {
        stroke: #ddd;
    }
`;

const ArrowIcon = styled.div<{ direction: string }>`
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "${(props) => (props.direction === "left" ? "◄" : "►")}";
        font-size: 2rem;
        font-weight: bold;
        color: white;
        transition: color 0.3s ease;
    }
`;
