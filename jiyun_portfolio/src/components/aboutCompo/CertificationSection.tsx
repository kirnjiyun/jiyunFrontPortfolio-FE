import React, { useState } from "react";
import { useSpring } from "react-spring"; // 회전 애니메이션용
import {
    Section,
    SectionTitle,
    CardGrid,
    FlipContainer,
    FlipInner,
    CardFront,
    CardBack,
    DetailButton,
    CloseButton,
} from "../../styles/about/CertificationSection.styles";

function parseDescription(description) {
    if (!description) return "";

    return (
        description
            // "GitHub 링크: URL" 치환
            .replace(
                /GitHub 링크:\s*(https?:\/\/[^\s,]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">GitHub 링크</a>'
            )
            // "E-book 링크: URL" 치환
            .replace(
                /E-book 링크:\s*(https?:\/\/[^\s,]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">E-book 링크</a>'
            )
            // 줄바꿈을 <br>로 변환
            .replace(/\n/g, "<br/>")
    );
}

// 개별 플립 카드 컴포넌트
function FlipCard({ cert }) {
    const [flipped, setFlipped] = useState(false);

    // rotation 값을 react-spring으로 관리
    const { rotation } = useSpring({
        rotation: flipped ? 180 : 0,
        config: { tension: 200, friction: 20 },
    });

    // 카드 뒤집기 토글 함수
    const toggleFlip = () => {
        setFlipped((prev) => !prev);
    };

    return (
        <FlipContainer>
            <FlipInner
                style={{
                    // rotation값에 따라 Y축 회전
                    transform: rotation.to((r) => `rotateY(${r}deg)`),
                }}
            >
                {/* 앞면 */}
                <CardFront>
                    <h3>{cert.title}</h3>
                    <p>{cert.shortDescription}</p>
                    <DetailButton onClick={toggleFlip}>
                        자세히 보기
                    </DetailButton>
                </CardFront>

                {/* 뒷면 */}
                <CardBack>
                    {/* description을 HTML로 치환하여 렌더 */}
                    <div
                        className="description"
                        dangerouslySetInnerHTML={{
                            __html: parseDescription(cert.description),
                        }}
                    />
                    <CloseButton onClick={toggleFlip}>닫기</CloseButton>
                </CardBack>
            </FlipInner>
        </FlipContainer>
    );
}

export default function CertificationSection({ certificationData = [] }) {
    return (
        <Section>
            <SectionTitle>Certifications &amp; etc</SectionTitle>

            <CardGrid>
                {certificationData.map((cert, idx) => (
                    <FlipCard key={idx} cert={cert} />
                ))}
            </CardGrid>
        </Section>
    );
}
