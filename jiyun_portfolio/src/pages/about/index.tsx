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
    const [introductionRes, educationRes, certificationRes] = await Promise.all(
        [
            fetch("/api/server/introductionData"),
            fetch("/api/server/educationData"),
            fetch("/api/server/certificationData"),
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
