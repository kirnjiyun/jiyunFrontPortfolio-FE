import Head from "next/head";
import { MaintenanceWrapper, MaintenanceNav, MaintenanceHeader, MaintenanceBadge, MaintenanceTitle, MaintenanceDetails, MaintenanceDescription, DownloadButton, PreviewButton, ButtonGroup, MaintenanceFooter } from "../styles/Maintenance.styles";
import IntroButton from "./aboutCompo/gamification/IntroButton";
import AsciiFlower from "./AsciiFlower";

export default function MaintenancePage() {
    return (
        <>
            <Head><title>리뉴얼 중 | 김지윤 포트폴리오</title><meta name="description" content="프론트엔드 개발자 김지윤의 포트폴리오 리뉴얼 중입니다. 이력서와 준비 중인 프로젝트를 확인해 주세요." /></Head>
            <MaintenanceWrapper>
                <MaintenanceNav><strong>kim jiyun</strong><a href="mailto:kimjiyunee@naver.com">get in touch ↗</a></MaintenanceNav>
                <AsciiFlower />
                <MaintenanceHeader>
                    <MaintenanceBadge>portfolio / under renewal</MaintenanceBadge>
                    <MaintenanceTitle><span>a work</span><span>in progress.</span></MaintenanceTitle>
                    <MaintenanceDetails>
                        <MaintenanceDescription><h2>더 나은 모습으로, 곧 만나요.</h2><p>사용자 경험을 설계하고 구현하는 프론트엔드 개발자 김지윤입니다.<br />지금은 포트폴리오를 새롭게 다듬고 있어요.</p></MaintenanceDescription>
                        <ButtonGroup>
                            <DownloadButton href="/api/resume" download><span>이력서 다운로드</span><span aria-hidden="true">↓</span></DownloadButton>
                            <PreviewButton href="https://www.dailyq.me" target="_blank" rel="noopener noreferrer"><span>준비 중인 프로젝트 미리보기</span><span aria-hidden="true">↗</span></PreviewButton>
                            <IntroButton />
                        </ButtonGroup>
                    </MaintenanceDetails>
                </MaintenanceHeader>
                <MaintenanceFooter><span>front-end development / thoughtful experiences</span><a href="https://github.com/kirnjiyun" target="_blank" rel="noopener noreferrer">github ↗</a><span>© {new Date().getFullYear()} kim jiyun</span></MaintenanceFooter>
            </MaintenanceWrapper>
        </>
    );
}
