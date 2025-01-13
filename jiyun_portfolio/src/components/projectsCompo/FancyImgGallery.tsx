import React from "react";
import styled, { keyframes } from "styled-components";

export default function Fancy16to9Gallery() {
    // 안내 문구 (배너)
    // 필요 없으면 <HoverBanner> 부분만 지우면 됩니다.

    // 테스트용 이미지 4장
    const images = [
        "/images/projects/yunflix/1.png",
        "/images/projects/yunflix/2.png",
        "/images/projects/yunflix/3.png",
        "/images/projects/yunflix/4.png",
    ];

    return (
        <Container>
            {/* 안내 배너 */}
            <HoverBanner>마우스를 올려보세요!</HoverBanner>

            {/* 갤러리 */}
            <GalleryContainer>
                {images.map((src, idx) => (
                    <ImageItem key={idx}>
                        <ImageWrapper>
                            <StyledImg src={src} alt={`gallery-${idx}`} />
                        </ImageWrapper>
                    </ImageItem>
                ))}
            </GalleryContainer>
        </Container>
    );
}

/** ================================
 *      styled-components
 *  ================================ */

/**
 * 전체 페이지 감싸는 래퍼
 */
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    background-color: var(--color-brightest-blue);
`;

/**
 * 안내 문구 (배너)
 * keyframes로 살짝 위아래로 둥실둥실 떠오르는 애니메이션
 */
const floatAnim = keyframes`
  0% { transform: translateY(0);}
  50% { transform: translateY(-10px);}
  100% { transform: translateY(0);}
`;

const HoverBanner = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: var(--color-light-blue);
    color: #fff;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    animation: ${floatAnim} 2s ease-in-out infinite;
`;

/**
 * 전체 갤러리: 2x2 그리드
 * overflow: visible => hover 시 확대된 이미지가 잘리지 않도록
 */
const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    overflow: visible;

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* 모바일: 1열 */
    }
`;

/**
 * 각 셀
 * position: relative & overflow: visible
 * => 자식이 확대될 때 넘치더라도 보이도록
 */
const ImageItem = styled.div`
    position: relative;
    overflow: visible;
`;

/**
 * 16:9 래퍼
 * aspect-ratio로 어떤 해상도에서도 16:9 비율 유지
 */
const ImageWrapper = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: visible;
    transition: transform 0.3s, z-index 0.3s;

    /* hover 시 다른 이미지보다 위로 나오도록 */
    &:hover {
        z-index: 10;
    }
`;

/**
 * 실제 이미지
 * 기본: blur + 어둡게(brightness)
 * hover 시: 확대(scale) + 필터 해제
 */
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    filter: blur(3px) brightness(0.6);
    transform: scale(1);
    transition: filter 0.3s ease, transform 0.3s ease;

    /* 부모가 hover일 때(Wrapper: &:hover), 이미지 자체를 크게 + 필터 제거 */
    ${ImageWrapper}:hover & {
        filter: none; /* blur, 어둡기 해제 */
        transform: scale(1.2); /* 더 크게 */
    }
`;
