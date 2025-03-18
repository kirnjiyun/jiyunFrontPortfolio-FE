import React, { useState, useEffect } from "react";
import IntroductionSection from "../../components/aboutCompo/IntroductionSection";
import CertificationSection from "../../components/aboutCompo/CertificationSection";
import EducationSection from "../../components/aboutCompo/EducationSection";
import Head from "next/head";
import {
    HeroSection,
    Title,
    Section,
} from "../../styles/about/AboutPageStyles";
import InfiniteScrollText from "@/components/aboutCompo/InfiniteScroll";
// import TimelineComponent from "@/components/aboutCompo/TimeLineSection";
export async function getStaticProps() {
    const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5050";

    const [introductionRes, educationRes, certificationRes] = await Promise.all(
        [
            fetch(`${baseUrl}/api/introductions`),
            fetch(`${baseUrl}/api/educations`),
            fetch(`${baseUrl}/api/certifications`),
        ]
    );

    // 응답 상태 확인 및 오류 처리
    if (!introductionRes.ok || !educationRes.ok || !certificationRes.ok) {
        console.error("❌ API 호출 실패:", {
            introductions: introductionRes.status,
            educations: educationRes.status,
            certifications: certificationRes.status,
        });
        return {
            props: {
                introductionData: null,
                educationData: null,
                certificationData: null,
            },
        };
    }

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
            {" "}
            <Head>
                <title>About Me | 김지윤 포트폴리오</title>
                <meta
                    name="description"
                    content="프론트엔드 개발자 김지윤의 소개 페이지입니다. 개발 경력, 교육 이력 및 자격증 정보를 확인하세요."
                />
                <meta
                    name="keywords"
                    content="프론트엔드 개발자, 포트폴리오, 자격증, 교육, 소개"
                />
                <meta name="author" content="김지윤" />
            </Head>
            <HeroSection>
                <Title>ABOUT ME</Title>
            </HeroSection>
            <InfiniteScrollText />
            <Section>
                <IntroductionSection introductionData={introductionData} />
                {/* <TimelineComponent /> */}
                <EducationSection educationData={educationData} />
                <CertificationSection certificationData={certificationData} />
            </Section>
        </>
    );
}
