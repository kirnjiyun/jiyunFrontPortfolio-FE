import IntroductionSection from "../../components/IntroductionSection";
import CertificationSection from "../../components/CertificationSection";
import EducationSection from "../../components/EducationSection";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
export default function AboutPage() {
    const [typedText, setTypedText] = useState("");
    const fullText = "ABOUT ME";
    const typingSpeed = 150; // 타이핑 속도 (밀리초)

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval); // 타이핑 완료 후 Interval 제거
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval); // 컴포넌트 언마운트 시 정리
    }, [fullText]);

    return (
        <>
            <HeroSection>
                <IconContainer>
                    <StyledImage
                        src="/images/me.png"
                        alt="me icon"
                        width={150}
                        height={150}
                    />
                </IconContainer>
                <Title>ABOUT ME</Title>
            </HeroSection>

            <Section>
                <IntroductionSection />
            </Section>

            <Section>
                <EducationSection />
                <SectionTitle>Education</SectionTitle>
                <List>
                    <li>
                        <strong>중앙대학교</strong>
                        <br />
                        공공인재학부 (2018.03 ~ 2024.02)
                    </li>
                    <li>
                        <strong>국비지원교육 수료</strong>
                        <ul>
                            <li>
                                멋쟁이사자처럼 프론트엔드 스쿨 (2023.07 ~
                                2023.11)
                            </li>
                            <li>
                                코드잇 스프린트 FE 단기심화 트랙 (2025.01 ~
                                2025.03)
                            </li>
                        </ul>
                    </li>
                </List>
            </Section>

            <Section>
                <CertificationSection />
            </Section>
        </>
    );
}

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;
const HeroSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark-blue);
    height: 100vh;
`;

const IconContainer = styled.div`
    margin-right: 20px;
`;

const StyledImage = styled(Image)``;

const Title = styled.h1`
    font-size: 6rem;
    color: var(--color-lightest-blue);
`;

const Cursor = styled.span`
    font-weight: normal;
    animation: ${blink} 1s steps(2, start) infinite;
`;

const Section = styled.div`
    padding: 40px 20px;
    background-color: var(--color-lightest-blue);
    color: var(--color-dark-blue);
    border-radius: 12px;
    margin: 20px auto;
    max-width: 900px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
    color: var(--color-medium-blue);
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    line-height: 1.8;
    font-size: 16px;
`;
