// pages/projects/[projectTitle].js
import React from "react";

/**
 * 1) 모든 동적 경로(프로젝트 slug) 정의 (SSG)
 */
export async function getStaticPaths() {
    // 1. json-server에서 프로젝트 목록을 가져온다고 가정
    const baseUrl = "http://localhost:4000";
    const res = await fetch(`${baseUrl}/projectsData`);
    const allProjects = await res.json();

    // 2. 각 프로젝트의 title을 slug로 변환
    const paths = allProjects.map((project) => ({
        params: {
            projectTitle: project.title.toLowerCase().replace(/\s+/g, "-"),
        },
    }));

    // 3. fallback: false -> paths에 없는 slug는 404
    return {
        paths,
        fallback: false,
    };
}

/**
 * 2) 각 slug별 실제 데이터 가져오기 (SSG)
 */
export async function getStaticProps({ params }) {
    const slug = params.projectTitle;
    const baseUrl = "http://localhost:4000";
    const res = await fetch(`${baseUrl}/projectsData`);
    const allProjects = await res.json();

    const foundProject = allProjects.find(
        (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!foundProject) {
        return { notFound: true };
    }

    return {
        props: {
            project: foundProject,
            // 만약 다른 props가 필요하면 여기서 추가
        },
    };
}

/**
 * 3) 단일 파일에서 UI까지 전부 작성
 */
export default function ProjectDetailPage({ project }) {
    // 만약 slug가 "yunflix"라면 project는 { title: "YunFlix", name: ..., screenshots: [...], ... } 이 될 것

    // 간단한 예시 UI
    return (
        <div style={{ padding: "2rem" }}>
            <h1>프로젝트 상세</h1>
            <h2>{project.name}</h2>
            <p>설명: {project.description}</p>
            <p>카테고리: {project.category}</p>
            <p>기간: {project.duration}</p>

            {/* 스크린샷 */}
            {project.screenshots && project.screenshots.length > 0 && (
                <div
                    style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                >
                    {project.screenshots.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`screenshot-${i}`}
                            width="200"
                        />
                    ))}
                </div>
            )}

            {/* 링크 */}
            {project.projectLinks && (
                <div style={{ marginTop: "1rem" }}>
                    {project.projectLinks.deployment && (
                        <p>
                            배포 링크:{" "}
                            <a
                                href={project.projectLinks.deployment}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {project.projectLinks.deployment}
                            </a>
                        </p>
                    )}
                    {project.projectLinks.repository && (
                        <p>
                            GitHub:{" "}
                            <a
                                href={project.projectLinks.repository}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {project.projectLinks.repository}
                            </a>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
