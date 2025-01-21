import React, { useRef } from "react";
import styled from "styled-components";
import { useScroll, animated } from "@react-spring/web";

/* ===== 1) styled-components ===== */

// (A) 전체 페이지/부모 컨테이너
const Container = styled.section`
    /* 브라우저가 실제로 500vh 스크롤 가능 */
    height: 500vh;
    margin: 0;
    padding: 0;
    position: relative;
    background: #f0f0f0; /* 배경색(임의) */
`;

// (B) StickyWrapper: 화면 1개 높이만큼 차지, 세로 고정
const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden; /* 가로로 넘치는 사진 감추기 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #222; /* 임의 배경 */

    /*
    여기에 pointer-events: none; 을 주면
    내부에 버튼/링크 등 상호작용이 어려워지므로
    필요에 따라 조정하세요.
  */
`;

// (C) 헤더 부분 (상단 타이틀 등)
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

// (D) 슬라이드 영역 (StickyWrapper 내 아래 부분)
const SlideArea = styled.div`
    flex: 1;
    width: 100%;
    height: 80vh; /* 100vh 중 헤더(20vh) 빼고 나머지 */
    position: relative;
`;

// (E) 실제 가로 슬라이드(UL)
const AnimatedImgGroup = styled(animated.ul)`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
`;

// (F) 개별 슬라이드(LI)
const ImgContainer = styled.li`
    flex: 0 0 100vw; /* 한 화면씩 차지 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    h3 {
        margin-top: 1rem;
        font-family: "JetBrains Mono", monospace;
        font-size: 2rem;
        text-shadow: 1px 1px 2px #000;
    }

    img {
        width: 300px;
        height: 400px;
        object-fit: cover;
        border: 3px solid #fff;
    }
`;

// (G) 진행 바
const ProgressBar = styled(animated.div)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40px;
    height: 5px;
    background: #ff1199;
    transform-origin: left center;
    transform: scaleX(0);
`;

function App() {
    const myRef = useRef();
    // 예시 데이터
    const items = [
        { src: "https://i.imgur.com/yp0DD8g.jpg", label: "#001" },
        { src: "https://i.imgur.com/5Ch79KR.jpg", label: "#002" },
        { src: "https://i.imgur.com/M1Jz2I6.jpg", label: "#003" },
        { src: "https://i.imgur.com/rCx63Pl.jpg", label: "#004" },
        { src: "https://i.imgur.com/68m8b8O.jpg", label: "#005" },
    ];
    const totalSlides = items.length; // 5

    // useScroll 훅 - 윈도우 스크롤 0~1
    const { scrollYProgress } = useScroll();

    const translateX = scrollYProgress.to((val) => {
        const max = (totalSlides - 1) * 100; // 4*100=400
        return `translateX(${-max * val}vw)`;
    });

    // 진행 바: scaleX(0→1)
    const scaleX = scrollYProgress.to((val) => val);
    return (
        <div>
            {" "}
            <Container ref={myRef}>
                {/* StickyWrapper: 화면을 덮고 세로로는 고정 */}
                <StickyWrapper>
                    <Header>
                        <TitleH1>Pinned Horizontal Gallery</TitleH1>
                    </Header>

                    <SlideArea>
                        <AnimatedImgGroup style={{ transform: translateX }}>
                            {items.map((item, idx) => (
                                <ImgContainer key={idx}>
                                    <img
                                        src={item.src}
                                        alt={`Slide #${idx + 1}`}
                                    />
                                    <h3>{item.label}</h3>
                                </ImgContainer>
                            ))}
                        </AnimatedImgGroup>
                    </SlideArea>
                </StickyWrapper>

                {/* 진행 바 (화면 하단) */}
                <ProgressBar
                    style={{
                        transform: scaleX.to((s) => `scaleX(${s})`),
                    }}
                />
            </Container>
            <div
                style={{
                    backgroundColor: "white",
                    height: "500px",
                }}
            ></div>
        </div>
    );
}
export default App;
