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
            {/* Hero Section */}
            <HeroSection>
                {/* <IconContainer>
                    <StyledImage
                        src="/images/me.png"
                        alt="me icon"
                        width={150}
                        height={150}
                    />
                </IconContainer> */}
                <Title>ABOUT ME</Title>
            </HeroSection>
            <InfiniteScrollText />
            {/* Introduction Section */}
            <Section>
                <IntroductionSection data={introductionData} />
            </Section>

            {/* Education Section */}
            <Section>
                <EducationSection data={educationData} />
            </Section>

            {/* Certification Section */}
            <Section>
                <CertificationSection data={certificationData} />
            </Section>
        </>
    );
}
// export default function AboutPage() {
//     const [typedText, setTypedText] = useState("");
//     const fullText = "ABOUT ME";
//     const typingSpeed = 150;
//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             if (index < fullText.length) {
//                 // 1) 한 글자씩 추가하기 직전에 콘솔 찍기
//                 console.log("현재 index:", index);
//                 console.log("추가될 문자:", fullText[index]);

//                 setTypedText((prev) => {
//                     // 2) 실제로 추가된 문자열도 확인하기
//                     const nextText = prev + fullText[index];
//                     console.log("타이핑 중인 결과:", nextText);
//                     return nextText;
//                 });

//                 index++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, typingSpeed);

//         return () => clearInterval(interval);
//     }, [fullText]);

//     return (
//         <>
//             <HeroSection>
//                 <IconContainer>
//                     <StyledImage
//                         src="/images/me.png"
//                         alt="me icon"
//                         width={150}
//                         height={150}
//                     />
//                 </IconContainer>
//                 <Title>ABOUT ME</Title>
//             </HeroSection>

//             <Section>
//                 <IntroductionSection />
//             </Section>

//             <Section>
//                 <EducationSection />
//             </Section>

//             <Section>
//                 <CertificationSection />
//             </Section>
//         </>
//     );
// }
