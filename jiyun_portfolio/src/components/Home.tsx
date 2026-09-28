import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AsciiFlower from "./AsciiFlower";
import { HomeWrapper, Hero, HeroEyebrow, HeroTitle, HeroBottom, WorkSection, SectionHeading, WorkGrid, AllProjectsLink } from "../styles/Home.styles";

const previews = [
    { name: "yunflix", image: "/images/projects/yunflix.png" },
    { name: "feel my rhythm", image: "/images/projects/feelmyrhythm.png" },
    { name: "deluxury", image: "/images/projects/deluxury.png" },
];
export default function Home() {
    return (
        <>
            <Head>
                <title>프론트엔드 개발자 포트폴리오 - 김지윤</title>
                <meta name="description" content="사용자 경험을 설계하고 구현하는 프론트엔드 개발자 김지윤의 포트폴리오. React, Next.js 프로젝트를 소개합니다." />
                <meta property="og:title" content="프론트엔드 개발자 포트폴리오 - 김지윤" />
                <meta property="og:description" content="사용자 경험을 설계하고 구현하는 프론트엔드 개발자 김지윤입니다." />
                <meta property="og:image" content="/images/portfolio-thumbnail.jpg" />
                <meta property="og:url" content="https://kimjiyun.site" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <HomeWrapper id="main-content">
                <Hero>
                    <HeroEyebrow>independent portfolio<br />design-minded development</HeroEyebrow>
                    <AsciiFlower />
                    <HeroTitle><span>front-end developer.</span><span>thoughtful interfaces,</span><span>built with care.</span></HeroTitle>
                    <HeroBottom>
                        <p>사용자 경험을 설계하고 구현하는<br />프론트엔드 개발자, 김지윤입니다.</p>
                        <a href="#selected-work">scroll to explore &nbsp; ↓</a>
                    </HeroBottom>
                </Hero>
                <WorkSection id="selected-work">
                    <SectionHeading><h2>selected work</h2><span>development / archive</span></SectionHeading>
                    <WorkGrid>
                        {previews.map((project, index) => (
                            <figure key={project.name}>
                                <Link href="/projects" aria-label={`${project.name} 등 프로젝트 모아보기`}>
                                    <Image src={project.image} alt={`${project.name} 프로젝트 화면`} width={1440} height={810} sizes={index === 0 ? "100vw" : "(max-width: 700px) 100vw, 50vw"} />
                                </Link>
                                <figcaption><span>0{index + 1} / {project.name}</span><span>web development ↗</span></figcaption>
                            </figure>
                        ))}
                    </WorkGrid>
                    <AllProjectsLink href="/projects">all projects <span aria-hidden="true">↗</span></AllProjectsLink>
                </WorkSection>
            </HomeWrapper>
        </>
    );
}
