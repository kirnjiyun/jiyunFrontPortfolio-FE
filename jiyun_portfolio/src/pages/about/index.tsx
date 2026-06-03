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
import {
    fetchAboutDataForSSG,
    SSG_REVALIDATE_SECONDS,
} from "@/lib/api";
// import TimelineComponent from "@/components/aboutCompo/TimeLineSection";
export async function getStaticProps() {
    const { introductionData, educationData, certificationData } =
        await fetchAboutDataForSSG();

    return {
        props: {
            introductionData,
            educationData,
            certificationData,
        },
        revalidate: SSG_REVALIDATE_SECONDS,
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
