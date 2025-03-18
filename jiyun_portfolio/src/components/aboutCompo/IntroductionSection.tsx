import React from "react";
import { useSpring, useInView } from "react-spring";
import * as S from "../../styles/about/IntroSection.styles";

export default function IntroductionSection({ introductionData }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    } as any);

    const darkTextStyle = useSpring({
        transform: inView ? "translateX(0%)" : "translateX(-100%)",
        opacity: inView ? 1 : 0,
    });

    return (
        <S.MainSection ref={ref}>
            <S.Section>
                <S.TextContainer>
                    <S.Title>Introduction</S.Title>
                    <S.ContentContainer>
                        {" "}
                        <S.ImageContainer>
                            <S.ProfileImage
                                src="/images/작은 이미지 작게.jpeg"
                                alt="Profile"
                            />
                        </S.ImageContainer>
                        <S.InfoContainer>
                            <S.InfoItem>
                                🙋🏻‍♀️ 이름 : {introductionData?.name}
                            </S.InfoItem>
                            <S.InfoItem>
                                📧 이메일 :{" "}
                                <S.InfoLink
                                    href={`mailto:${introductionData?.email}`}
                                >
                                    {introductionData?.email}
                                </S.InfoLink>
                            </S.InfoItem>
                            <S.InfoItem>
                                🖥 깃허브 :{" "}
                                <S.InfoLink
                                    href={introductionData?.github}
                                    target="_blank"
                                >
                                    {introductionData?.github}
                                </S.InfoLink>
                            </S.InfoItem>
                            <S.TechStack>
                                🛠 사용 기술:{" "}
                                {introductionData?.techStack?.join(", ")}
                            </S.TechStack>
                        </S.InfoContainer>
                    </S.ContentContainer>

                    <S.Paragraph>{introductionData?.description}</S.Paragraph>
                </S.TextContainer>
            </S.Section>
        </S.MainSection>
    );
}
