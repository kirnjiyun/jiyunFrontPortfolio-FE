import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const FooterWrap = styled.footer`
    width: 100vw;
    padding: 4rem 1rem;
    background-color: var(--color-dark-blue); /* Global CSS 변수 사용 */
    color: var(--color-lightest-blue);
    position: relative;
`;

const Line = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-light-blue);
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SocialLink = styled(animated.a)`
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--color-lightest-blue);
    display: inline-block;
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-light-blue);
        text-decoration: underline;
    }
`;

const MenuContainer = styled.nav`
    display: flex;
    gap: 2rem;
`;

const MenuLink = styled(animated.a)`
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--color-lightest-blue);
    display: inline-block;
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-light-blue);
        text-decoration: underline;
    }
`;

const FooterBottom = styled.div`
    width: 100%;
    margin-top: 2rem;
    text-align: center;
    border-top: 1px solid var(--color-light-blue);
    padding-top: 1rem;

    p {
        font-size: 0.9rem;
        color: var(--color-light-blue);
    }
`;

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // 애니메이션 정의
    const lineAnimation = useSpring({
        width: inView ? "100%" : "0%",
        config: { tension: 200, friction: 20 },
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(10px)",
        config: { tension: 200, friction: 20 },
    });

    return (
        <FooterWrap ref={ref}>
            <Line style={lineAnimation} />
            <Container>
                <SocialContainer>
                    <SocialLink
                        style={fadeIn}
                        href="mailto:kimjiyunee@naver.com"
                        aria-label="이메일 주소"
                    >
                        kimjiyunee@naver.com
                    </SocialLink>
                    <SocialLink
                        style={fadeIn}
                        href="https://github.com/kirnjiyun"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="깃허브 주소"
                    >
                        https://github.com/kirnjiyun
                    </SocialLink>
                </SocialContainer>
                <MenuContainer>
                    <MenuLink style={fadeIn} href="/" aria-label="Home">
                        Home
                    </MenuLink>
                    <MenuLink
                        style={fadeIn}
                        href="/projects"
                        aria-label="Projects"
                    >
                        Project
                    </MenuLink>
                    <MenuLink style={fadeIn} href="/about" aria-label="About">
                        About
                    </MenuLink>
                </MenuContainer>
            </Container>
            <FooterBottom>
                <p>©2025 Kimjiyun. All Rights Reserved.</p>
            </FooterBottom>
        </FooterWrap>
    );
};

export default Footer;
