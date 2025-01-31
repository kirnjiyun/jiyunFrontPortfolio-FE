import React, { useState } from "react";
import styled from "styled-components";

export default function FancyGallery({ images }: { images: string[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    if (!images || images.length === 0) return null;

    return (
        <GalleryContainer>
            {images.map((src, idx) => (
                <ImageItem
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    isHovered={hoveredIndex === idx}
                >
                    <ImageWrapper isHovered={hoveredIndex === idx}>
                        <StyledImg
                            src={src}
                            alt={`gallery-${idx}`}
                            isHovered={hoveredIndex === idx}
                        />
                    </ImageWrapper>
                </ImageItem>
            ))}
        </GalleryContainer>
    );
}

/** ================================
 *      styled-components
 *  ================================ */

/** 갤러리 컨테이너 (Masonry 스타일) */
const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

/** ✅ 개별 이미지 아이템 */
interface ImageItemProps {
    isHovered: boolean;
}

const ImageItem = styled.div<ImageItemProps>`
    position: relative;
    overflow: visible;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;

    /* 호버 시 부모 컨테이너가 커지는 효과 */
    transform: ${({ isHovered }) => (isHovered ? "scale(1.05)" : "scale(1)")};
    z-index: ${({ isHovered }) =>
        isHovered ? "10" : "1"}; /* 호버된 이미지가 위로 올라옴 */
`;

/** ✅ 이미지 감싸는 래퍼 */
interface ImageWrapperProps {
    isHovered: boolean;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;

    /* 확대 시 부모 요소가 따라 커지도록 */
    transform: ${({ isHovered }) => (isHovered ? "scale(1.05)" : "scale(1)")};
    transition: transform 0.3s ease-in-out;
`;

/** ✅ 이미지 스타일 */
interface StyledImgProps {
    isHovered: boolean;
}

const StyledImg = styled.img<StyledImgProps>`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

    /* 기본 상태: 어둡고 블러 효과 */
    filter: ${({ isHovered }) =>
        isHovered ? "brightness(1) blur(0px)" : "brightness(0.6) blur(2px)"};

    /* 확대 효과 적용 */
    transform: ${({ isHovered }) => (isHovered ? "scale(1.05)" : "scale(1)")};
`;
