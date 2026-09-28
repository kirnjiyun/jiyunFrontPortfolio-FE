import React from "react";
import * as S from "../../styles/about/IntroSection.styles";

const fallbackIntroduction = {
    name: "김지윤",
    email: "kimjiyunee@naver.com",
    github: "https://github.com/kirnjiyun",
    description: "사용자 경험을 설계하고 구현하는 프론트엔드 개발자, 김지윤입니다.",
};

export default function IntroductionSection({ introductionData }) {
    const name = introductionData?.name || fallbackIntroduction.name;
    const email = introductionData?.email || fallbackIntroduction.email;
    const github = introductionData?.github || fallbackIntroduction.github;
    const description = introductionData?.description || fallbackIntroduction.description;
    const techStack = Array.isArray(introductionData?.techStack) ? introductionData.techStack : [];

    return (
        <S.MainSection aria-labelledby="introduction-title">
            <S.Title id="introduction-title">01 / Introduction</S.Title>
            <S.TextContainer>
                <S.Paragraph>{description}</S.Paragraph>
                <S.InfoContainer>
                    <S.InfoItem><dt>Name</dt><dd>{name}</dd></S.InfoItem>
                    <S.InfoItem>
                        <dt>Email</dt>
                        <dd><S.InfoLink href={`mailto:${email}`}>{email}<span aria-hidden="true">↗</span></S.InfoLink></dd>
                    </S.InfoItem>
                    <S.InfoItem>
                        <dt>Github</dt>
                        <dd>
                            <S.InfoLink href={github} target="_blank" rel="noopener noreferrer">
                                {github.replace(/^https?:\/\//, "")}<span aria-hidden="true">↗</span>
                            </S.InfoLink>
                        </dd>
                    </S.InfoItem>
                </S.InfoContainer>
                {techStack.length > 0 && (
                    <S.TechStack>
                        <span>Toolkit</span>
                        <ul>{techStack.map((technology, index) => <li key={`${technology}-${index}`}>{technology}</li>)}</ul>
                    </S.TechStack>
                )}
            </S.TextContainer>
        </S.MainSection>
    );
}
