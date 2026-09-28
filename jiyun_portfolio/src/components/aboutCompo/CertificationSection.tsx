import React from "react";
import { Section, SectionTitle, CardGrid, CertificationItem } from "../../styles/about/CertificationSection.styles";

function Description({ text = "" }) {
    const parts = text.split(/((?:GitHub 링크:|E-book 링크:)\s*https?:\/\/[^\s,]+)/g);
    return <>{parts.map((part, index) => {
        const match = part.match(/^(GitHub 링크|E-book 링크):\s*(https?:\/\/[^\s,]+)$/);
        return match
            ? <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer">{match[1]} ↗</a>
            : <React.Fragment key={index}>{part}</React.Fragment>;
    })}</>;
}

export default function CertificationSection({ certificationData = [] }) {
    const certifications = Array.isArray(certificationData) ? certificationData : [];

    return (
        <Section aria-labelledby="certification-title">
            <SectionTitle id="certification-title">03 / Certifications &amp; More</SectionTitle>
            <CardGrid>
                {certifications.map((cert, index) => (
                    <CertificationItem key={cert._id || cert.id || index}>
                        <summary>
                            <div>
                                <h3>{cert.title}</h3>
                                {cert.shortDescription && <p>{cert.shortDescription}</p>}
                            </div>
                            <span className="toggle" aria-hidden="true">+</span>
                        </summary>
                        <div className="description"><Description text={cert.description || cert.shortDescription || "추가 설명이 없습니다."} /></div>
                    </CertificationItem>
                ))}
                {certifications.length === 0 && <p className="empty">자격 및 활동 이력을 불러오지 못했습니다.</p>}
            </CardGrid>
        </Section>
    );
}
