import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const FooterWrap = styled.footer`
    width: 100%;
    padding: 3rem 2rem 2rem;
    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg);
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    color: var(--color-muted-fg);
    font-size: 0.9rem;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;

    &:hover {
        color: var(--color-fg);
        background-color: var(--color-accent);
    }

    img {
        width: 18px;
        height: 18px;
        opacity: 0.6;
        transition: opacity 0.15s ease;
    }

    &:hover img {
        opacity: 1;
    }
`;

const MenuContainer = styled.nav`
    display: flex;
    gap: 0.25rem;
`;

const MenuLink = styled(Link)`
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-muted-fg);
    border-radius: calc(var(--radius) - 2px);
    transition: color 0.15s ease, background-color 0.15s ease;
    cursor: pointer;

    &:hover {
        color: var(--color-fg);
        background-color: var(--color-accent);
    }
`;

const FooterBottom = styled.div`
    width: 100%;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
    text-align: center;

    p {
        font-size: 0.8rem;
        color: var(--color-muted-fg);
    }
`;

const Footer = () => {
    return (
        <FooterWrap>
            <Container>
                <SocialContainer>
                    <SocialLink
                        href="mailto:kimjiyunee@naver.com"
                        aria-label="이메일"
                        title="이메일"
                    >
                        <Image
                            src="/images/mailbox.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                    </SocialLink>
                    <SocialLink
                        href="https://github.com/kirnjiyun"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="깃허브"
                        title="깃허브"
                    >
                        <Image
                            src="/images/github.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                    </SocialLink>
                </SocialContainer>
                <MenuContainer>
                    <MenuLink href="/">Home</MenuLink>
                    <MenuLink href="/projects">Projects</MenuLink>
                    <MenuLink href="/about">About</MenuLink>
                </MenuContainer>
            </Container>
            <FooterBottom>
                <p>&copy; 2025 Kimjiyun. All Rights Reserved.</p>
            </FooterBottom>
        </FooterWrap>
    );
};

export default Footer;
