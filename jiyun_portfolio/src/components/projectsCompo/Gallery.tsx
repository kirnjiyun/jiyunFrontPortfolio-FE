import React from "react";
import styled from "styled-components";
import { useScroll, animated } from "@react-spring/web";

/** 1) 부모 컨테이너 (Gallery 전체 구간 높이) */
const GallerySection = styled.section`
    /* 예: 600vh 구간에서 
     0%~80% (480vh) : sticky로 가로 슬라이드
     80%~100% (120vh): 일반 세로 스크롤 */
    height: 600vh;
    position: relative;
    background: #f0f0f0;
`;

/** 2) Gallery가 sticky로 고정될 Wrapper */
const StickyGallery = styled.div`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #222;
`;

const Header = styled.header`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TitleH1 = styled.h1`
    font-size: 48px;
    margin: 0;
    color: #fff;
    font-family: "JetBrains Mono", monospace;
`;

const SlideArea = styled.div`
    width: 100%;
    height: 80vh; /* 전체 100vh 중 헤더 20vh 제외한 나머지 */
    position: relative;
`;

const AnimatedImgGroup = styled(animated.ul)`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`;

const ImgContainer = styled.li`
    flex: 0 0 100vw; /* 화면폭 한 장씩 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;

    img {
        width: 300px;
        height: 400px;
        object-fit: cover;
        border: 3px solid #fff;
    }

    h3 {
        margin-top: 1rem;
        font-family: "JetBrains Mono", monospace;
        font-size: 2rem;
        text-shadow: 1px 1px 2px #000;
    }
`;

const ProgressBar = styled(animated.div)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40px;
    height: 5px;
    background: #ff1199;
    transform-origin: left center;
    transform: scaleX(0);
    z-index: 9999;
`;

function Gallery() {
    const items = [
        { src: "https://i.imgur.com/yp0DD8g.jpg", label: "#001" },
        { src: "https://i.imgur.com/5Ch79KR.jpg", label: "#002" },
        { src: "https://i.imgur.com/M1Jz2I6.jpg", label: "#003" },
        { src: "https://i.imgur.com/rCx63Pl.jpg", label: "#004" },
        { src: "https://i.imgur.com/68m8b8O.jpg", label: "#005" },
    ];
    const totalSlides = items.length; // 예: 5개

    // scrollYProgress : 전체 스크롤(0 ~ 1)
    const { scrollYProgress } = useScroll();

    /**
     * 1) 수평 슬라이드
     *    스크롤 0 ~ 80% (0 ~ 0.8) 구간에서
     *    0 -> -(totalSlides-1)*100 (예: -400vw) 이동
     */
    const translateX = scrollYProgress.to({
        range: [0, 0.8],
        output: [0, -(totalSlides - 1) * 100],
        extrapolate: "clamp",
    });

    /**
     * 2) 진행 바
     *    0~80%에서 scaleX(0~1)
     */
    const scaleX = scrollYProgress.to({
        range: [0, 0.8],
        output: [0, -(totalSlides - 1) * 100],
        extrapolate: "clamp",
    });
    return (
        <GallerySection>
            {/* Sticky 로 고정된 영역 */}
            <StickyGallery>
                <Header>
                    <TitleH1>Pinned Horizontal Gallery</TitleH1>
                </Header>

                <SlideArea>
                    <AnimatedImgGroup
                        style={{
                            transform: translateX.to(
                                (x) => `translateX(${x}vw)`
                            ),
                        }}
                    >
                        {items.map((item, idx) => (
                            <ImgContainer key={idx}>
                                <img src={item.src} alt={`Slide #${idx + 1}`} />
                                <h3>{item.label}</h3>
                            </ImgContainer>
                        ))}
                    </AnimatedImgGroup>
                </SlideArea>
            </StickyGallery>

            {/* 진행 바 (스크롤 위치 표시) */}
            <ProgressBar
                style={{
                    transform: scaleX.to((s) => `scaleX(${s})`),
                }}
            />

            {/* 이 아래 20% 구간(높이 120vh)은 일반 세로 스크롤 */}
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>갤러리 끝! 이제 세로 스크롤 영역</h2>
            </div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>갤러리 끝! 이제 세로 스크롤 영역</h2>
            </div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>갤러리 끝! 이제 세로 스크롤 영역</h2>
            </div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>갤러리 끝! 이제 세로 스크롤 영역</h2>
            </div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>갤러리 끝! 이제 세로 스크롤 영역</h2>
            </div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>갤러리 끝! 이제 세로 스크롤 영역</h2>
            </div>
        </GallerySection>
    );
}

export default Gallery;
