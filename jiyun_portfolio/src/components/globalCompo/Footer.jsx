import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const FooterWrap = styled.footer`
    width: 100vw;
    padding: 3.5rem 1rem 2.2rem;
    background: linear-gradient(135deg, #0d1321 0%, #1d2d44 100%);
    color: var(--color-lightest-blue);
    position: relative;
    margin-top: 3rem;
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
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`;

const SocialLink = styled(animated.a)`
    text-decoration: none;
    font-size: 0.95rem;
    color: var(--color-lightest-blue);
    display: inline-flex;
    align-items: center;
    transition: color 0.3s ease, transform 0.3s ease;
    padding: 0.55rem 0.8rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    &:hover {
        color: var(--color-brightest-blue);
        transform: translateY(-2px);
    }
`;

const MenuContainer = styled.nav`
    display: flex;
    gap: 2rem;
`;

const MenuLink = styled(animated.a)`
    text-decoration: none;
    font-size: 1rem;
    color: var(--color-lightest-blue);
    display: inline-block;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: var(--color-brightest-blue);
        transform: translateY(-2px);
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

const RenewalModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(8, 12, 24, 0.5);
    backdrop-filter: blur(2px);
    z-index: 1200;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    transition: opacity 0.3s ease;
`;

const RenewalModal = styled.div`
    position: fixed;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%)
        ${(props) => (props.$visible ? "translateY(0)" : "translateY(18px)")};
    width: min(92vw, 420px);
    padding: 1rem 1.1rem;
    border-radius: 14px;
    background: #ffffff;
    color: #1d2d44;
    border: 1px solid #d8e1ec;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
    z-index: 1201;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    transition: opacity 0.3s ease, transform 0.3s ease;
`;

const RenewalTitle = styled.h4`
    font-size: 1rem;
    margin-bottom: 0.35rem;
    color: #0d1321;
`;

const RenewalText = styled.p`
    font-size: 0.9rem;
    color: #3e5c76;
`;

const RenewalCloseButton = styled.button`
    margin-top: 0.7rem;
    padding: 0.45rem 0.65rem;
    border: 1px solid #d8e1ec;
    border-radius: 9px;
    background: #f7f9fc;
    color: #1d2d44;
`;

const Footer = () => {
    const [showRenewalModal, setShowRenewalModal] = useState(false);
    const [dismissed, setDismissed] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const atBottom = scrollTop + viewportHeight >= pageHeight - 2;

            if (atBottom && !dismissed) {
                setShowRenewalModal(true);
            }

            if (!atBottom) {
                setShowRenewalModal(false);
                setDismissed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dismissed]);

    return (
        <>
            <FooterWrap ref={ref}>
                <Line style={lineAnimation} />
                <Container>
                    <SocialContainer>
                        <SocialLink
                            style={fadeIn}
                            href="mailto:kimjiyunee@naver.com"
                            aria-label="이메일 주소"
                        >
                            <Icon
                                src="/images/mailbox.png"
                                alt="이메일 아이콘"
                            />
                        </SocialLink>
                        <SocialLink
                            style={fadeIn}
                            href="https://github.com/kirnjiyun"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="깃허브 주소"
                        >
                            <Icon
                                src="/images/github.png"
                                alt="깃허브 아이콘"
                            />
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
                            Projects
                        </MenuLink>
                        <MenuLink
                            style={fadeIn}
                            href="/about"
                            aria-label="About Me"
                        >
                            About Me
                        </MenuLink>
                    </MenuContainer>
                </Container>
                <FooterBottom>
                    <p>©2025 Kimjiyun. All Rights Reserved.</p>
                </FooterBottom>
            </FooterWrap>

            <RenewalModalBackdrop $visible={showRenewalModal} />
            <RenewalModal
                $visible={showRenewalModal}
                role="dialog"
                aria-live="polite"
            >
                <RenewalTitle>현재 사이트 리뉴얼중입니다.</RenewalTitle>
                <RenewalText>
                    더 나은 구성과 콘텐츠로 계속 개선하고 있습니다.
                </RenewalText>
                <RenewalCloseButton
                    onClick={() => {
                        setShowRenewalModal(false);
                        setDismissed(true);
                    }}
                >
                    닫기
                </RenewalCloseButton>
            </RenewalModal>
        </>
    );
};

export default Footer;
