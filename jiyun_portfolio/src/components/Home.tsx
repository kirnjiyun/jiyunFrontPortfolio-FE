import React, { useState, useEffect } from "react";
import {
    HomeWrapper,
    AnimatedText,
    TypingText,
    HeroSubText,
    HeroActions,
    HeroPrimaryButton,
    HeroSecondaryButton,
} from "../styles/Home.styles";
import Head from "next/head";

const Home: React.FC = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "WELCOME";
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;
        setTypedText("");

        const typingInterval = setInterval(() => {
            index += 1;
            // slice로 매번 전체 문자열을 계산해 StrictMode 이중 호출에도 안전하게 처리
            setTypedText(fullText.slice(0, index));
            if (index >= fullText.length) {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <>
            <Head>
                <title>프론트엔드 개발자 포트폴리오 - 김지윤</title>
                <meta
                    name="description"
                    content="프론트엔드 개발자 김지윤의 포트폴리오 사이트입니다. React, Next.js, UI/UX 최적화 프로젝트 소개."
                />
                <meta
                    name="keywords"
                    content="프론트엔드 포트폴리오, 개발자 포트폴리오, React 포트폴리오, Next.js 개발자, 웹 개발 포트폴리오"
                />
                <meta
                    property="og:title"
                    content="프론트엔드 개발자 포트폴리오 - 김지윤"
                />
                <meta
                    property="og:description"
                    content="React와 Next.js로 구현한 김지윤의 프론트엔드 포트폴리오 사이트입니다."
                />
                <meta
                    property="og:image"
                    content="/images/portfolio-thumbnail.jpg"
                />
                <meta property="og:url" content="https://kimjiyun.site" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <HomeWrapper>
                <AnimatedText>
                    <TypingText>{typedText}</TypingText>
                </AnimatedText>
                <HeroSubText>
                    사용자 경험을 설계하고 구현하는 프론트엔드 개발자, 김지윤입니다.
                </HeroSubText>
                <HeroActions>
                    <HeroPrimaryButton href="/projects">
                        프로젝트 보기
                    </HeroPrimaryButton>
                    <HeroSecondaryButton href="/about">
                        소개
                    </HeroSecondaryButton>
                </HeroActions>
            </HomeWrapper>
        </>
    );
};

export default Home;
