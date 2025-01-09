import React, { useState, useEffect } from "react";
import IntroductionSection from "../../components/IntroductionSection";
import CertificationSection from "../../components/CertificationSection";
import EducationSection from "../../components/EducationSection";

import {
    HeroSection,
    IconContainer,
    StyledImage,
    Title,
    TypingText,
    Section,
    SectionTitle,
    List,
} from "../../styles/about/AboutPageStyles";
import InfiniteScrollText from "@/components/InfiniteScroll";
import TimelineComponent from "@/components/\bTimeLineSection";

export async function getStaticProps() {
    // json-server API에서 데이터 가져오기
    const baseUrl = "http://localhost:4000"; // json-server 주소
    const [introductionRes, educationRes, certificationRes] = await Promise.all(
        [
            fetch(`${baseUrl}/introductionData`),
            fetch(`${baseUrl}/educationData`),
            fetch(`${baseUrl}/certificationData`),
        ]
    );

    const introductionData = await introductionRes.json();
    const educationData = await educationRes.json();
    const certificationData = await certificationRes.json();

    return {
        props: {
            introductionData,
            educationData,
            certificationData,
        },
    };
}

export default function AboutPage({
    introductionData,
    educationData,
    certificationData,
}) {
    return (
        <>
            <HeroSection>
                <Title>ABOUT ME</Title>
            </HeroSection>
            <InfiniteScrollText />
            <Section>
                <IntroductionSection introductionData={introductionData} />
                <TimelineComponent />
                <EducationSection educationData={educationData} />
                <CertificationSection certificationData={certificationData} />
            </Section>
        </>
    );
}
