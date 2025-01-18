import React from "react";
import {
    Section,
    SectionTitle,
    List,
} from "../../styles/about/Education.styles";

export default function EducationSection({ educationData }) {
    return (
        <Section>
            <SectionTitle>Education</SectionTitle>
            <List>
                <ul>
                    {educationData.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* 학교 이름 및 위치 */}
                            {item.school && (
                                <strong>
                                    {item.school}
                                    {item.location && ` (${item.location})`}
                                </strong>
                            )}

                            {/* 기간 */}
                            {item.period && <li>{item.period}</li>}

                            {/* 전공 */}
                            {item.major && <li>{item.major}</li>}

                            {/* 교육 프로그램 */}
                            {item.education && (
                                <>
                                    <strong>{item.education}</strong>
                                    {item.programs.map((program, idx) => (
                                        <li key={idx}>{program}</li>
                                    ))}
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </List>
        </Section>
    );
}
