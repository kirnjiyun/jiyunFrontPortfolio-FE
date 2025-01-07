import React from "react";
import { Section, SectionTitle, List } from "../styles/about/AboutPageStyles";

export default function EducationSection() {
    return (
        <Section>
            <SectionTitle>Education</SectionTitle>
            <List>
                <li>
                    <strong>중앙대학교</strong>
                    <br />
                    공공인재학부 (2018.03 ~ 2024.02)
                </li>
                <li>
                    <strong>국비지원교육 수료</strong>
                    <ul>
                        <li>
                            멋쟁이사자처럼 프론트엔드 스쿨 (2023.07 ~ 2023.11)
                        </li>
                        <li>
                            코드잇 스프린트 FE 단기심화 트랙 (2025.01 ~ 2025.03)
                        </li>
                    </ul>
                </li>
            </List>
        </Section>
    );
}
