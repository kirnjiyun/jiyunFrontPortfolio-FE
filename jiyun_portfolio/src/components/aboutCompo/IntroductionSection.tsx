import React from "react";
import { useSpring, useInView } from "react-spring";
import * as S from "../../styles/about/IntroSection.styles";

export default function IntroductionSection({ introductionData }) {
    const [ref, inView] = useInView({
        triggerOnce: true, // 원하는 옵션
        threshold: 0.5, // 원하는 옵션
    } as any);
    const darkTextStyle = useSpring({
        transform: inView ? "translateX(0%)" : "translateX(-100%)",
        opacity: inView ? 1 : 0,
    });

    const lightTextStyle = useSpring({
        transform: inView ? "translateX(0%)" : "translateX(100%)",
        opacity: inView ? 1 : 0,
    });

    return (
        <S.MainSection ref={ref}>
            <S.Section>
                <S.ImageContainer>
                    <S.ProfileImage
                        src="/images/작은 이미지 작게.jpeg"
                        alt="Profile"
                    />
                </S.ImageContainer>

                <S.TextContainer>
                    <S.Title>Introduction</S.Title>
                    <S.Paragraph>
                        안녕하세요! 저는 김지윤입니다. 사용자에게 최적의
                        경험(UX)을 제공하는 UI에 큰 관심을 갖고 여러 프론트엔드
                        프로젝트를 수행해 왔습니다. 이 과정에서 TypeScript를
                        중심으로 안정성과 코드 품질을 높이는 방법을 익혔고,
                        백엔드 공부 경험도 있습니다. 앞으로도 사용자의 편의와
                        만족도를 최우선으로 고려하며 더욱 성장하는 개발자가
                        되겠습니다. 감사합니다.
                    </S.Paragraph>
                </S.TextContainer>
            </S.Section>
        </S.MainSection>
    );
}
