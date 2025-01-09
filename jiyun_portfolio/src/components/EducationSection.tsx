import React from "react";
import { Section, SectionTitle, List } from "../styles/about/Education.styles";

export default function EducationSection() {
    return (
        <Section>
            <SectionTitle>Education</SectionTitle>
            <List>
                <ul>
                    <strong>고등학교(경기)</strong>

                    <li>과천여자고등학교 (2014.03 ~ 2017.02)</li>
                    <strong>중앙대학교(서울)</strong>

                    <li>공공인재학부 (2018.03 ~ 2024.02)</li>

                    <strong>KDT 수료</strong>

                    <li>멋쟁이사자처럼 프론트엔드 스쿨 (2023.07 ~ 2023.11)</li>
                    <li>
                        코드잇 스프린트 FE 단기심화 트랙 (2025.01 ~ 2025.03)
                    </li>
                </ul>
            </List>
        </Section>
    );
}
