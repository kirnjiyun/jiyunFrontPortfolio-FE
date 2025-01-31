import React, { useState, useEffect } from "react";
import IntroductionSection from "../../components/aboutCompo/IntroductionSection";
import CertificationSection from "../../components/aboutCompo/CertificationSection";
import EducationSection from "../../components/aboutCompo/EducationSection";

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
import InfiniteScrollText from "@/components/aboutCompo/InfiniteScroll";
import TimelineComponent from "@/components/aboutCompo/TimeLineSection";

export async function getStaticProps() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const [introductionRes, educationRes, certificationRes] = await Promise.all(
        [
            fetch(`${baseUrl}/api/server/introductionData`),
            fetch(`${baseUrl}/api/server/educationData`),
            fetch(`${baseUrl}/api/server/certificationData`),
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
