import { useMemo, useState } from "react";
import Head from "next/head";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";
import FilterSelect from "@/components/projectsCompo/FilterSelect";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects, fetchProjectsForSSG, SSG_REVALIDATE_SECONDS } from "@/lib/api";
import {
    ProjectsPage as Page, HeroSection, Eyebrow, Title, HeroDescription,
    FilterContainer, ResultCount, FilterLabel, FilterCheckbox,
    ProjectTransitionStyles, StateMessage, SkeletonRow,
} from "@/styles/projects/ProjectIndex.styles";

export default function ProjectsPage({ initialProjects }) {
    const { data: projectsData = [], isLoading, error, refetch, isFetching } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        initialData: initialProjects,
    });
    const [filterOptions, setFilterOptions] = useState({ isMajor: false, category: "" });
    const filteredProjects = useMemo(() => projectsData.filter((project) => (
        (!filterOptions.isMajor || project.isMajor === true) &&
        (!filterOptions.category || project.category?.trim().toLowerCase() === filterOptions.category.toLowerCase())
    )), [projectsData, filterOptions]);

    return (
        <>
            <Head>
                <title>Projects | 김지윤 포트폴리오</title>
                <meta name="description" content="프론트엔드 개발자 김지윤의 개인 및 팀 프로젝트를 만나보세요." />
            </Head>
            <Page>
                <HeroSection>
                    <Eyebrow>Index / 02 — Selected work</Eyebrow>
                    <Title>projects.</Title>
                    <HeroDescription>아이디어를 화면으로, 경험을 코드로.<br />직접 고민하고 만들어 온 프로젝트를 소개합니다.</HeroDescription>
                </HeroSection>
                <FilterContainer>
                    <ResultCount aria-live="polite">All projects ({String(filteredProjects.length).padStart(2, "0")})</ResultCount>
                    <FilterLabel>
                        <FilterCheckbox
                            type="checkbox"
                            checked={filterOptions.isMajor}
                            onChange={(event) => setFilterOptions((prev) => ({ ...prev, isMajor: event.target.checked }))}
                        />
                        주요 프로젝트
                    </FilterLabel>
                    <FilterSelect
                        value={filterOptions.category}
                        options={[{ value: "", label: "전체 유형" }, { value: "개인", label: "개인" }, { value: "팀", label: "팀" }]}
                        onChange={(category) => setFilterOptions((prev) => ({ ...prev, category }))}
                    />
                </FilterContainer>
                <ProjectTransitionStyles>
                    {isLoading ? (
                        <div role="status" aria-label="프로젝트를 불러오는 중">
                            <SkeletonRow /><SkeletonRow />
                        </div>
                    ) : error && projectsData.length === 0 ? (
                        <StateMessage role="status">
                            <Eyebrow>Unable to load</Eyebrow>
                            <h2>프로젝트를 불러오지 못했습니다.</h2>
                            <p>잠시 후 다시 시도해 주세요.</p>
                            <button type="button" onClick={() => refetch()} disabled={isFetching}>{isFetching ? "불러오는 중…" : "다시 불러오기 ↗"}</button>
                        </StateMessage>
                    ) : filteredProjects.length > 0 ? (
                        <ProjectContainer projectsData={filteredProjects} />
                    ) : (
                        <StateMessage role="status">
                            <Eyebrow>No projects to display</Eyebrow>
                            <h2>{projectsData.length ? "조건에 맞는 프로젝트가 없습니다." : "등록된 프로젝트가 없습니다."}</h2>
                            {projectsData.length > 0 && <button type="button" onClick={() => setFilterOptions({ isMajor: false, category: "" })}>전체 프로젝트 보기 ↗</button>}
                        </StateMessage>
                    )}
                </ProjectTransitionStyles>
            </Page>
        </>
    );
}

export async function getStaticProps() {
    const projectsData = await fetchProjectsForSSG();
    return { props: { initialProjects: projectsData }, revalidate: SSG_REVALIDATE_SECONDS };
}
