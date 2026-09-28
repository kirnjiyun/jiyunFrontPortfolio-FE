import React from "react";
import { Section, SectionTitle, List } from "../../styles/about/Education.styles";

export default function EducationSection({ educationData }) {
    const educations = Array.isArray(educationData) ? educationData : [];

    return (
        <Section aria-labelledby="education-title">
            <SectionTitle id="education-title">02 / Education</SectionTitle>
            <List>
                {educations.map((item, index) => (
                    <li key={item._id || item.id || index}>
                        <div>
                            {item.school && <h3>{item.school}</h3>}
                            {item.location && <p>{item.location}</p>}
                            {item.major && <p>{item.major}</p>}
                            {item.education && <h4>{item.education}</h4>}
                            {item.programs?.length > 0 && (
                                <ul className="programs">
                                    {item.programs.map((program, programIndex) => <li key={programIndex}>{program}</li>)}
                                </ul>
                            )}
                        </div>
                        {item.period && <p className="period">{item.period}</p>}
                    </li>
                ))}
                {educations.length === 0 && <li className="empty">교육 이력을 불러오지 못했습니다.</li>}
            </List>
        </Section>
    );
}
