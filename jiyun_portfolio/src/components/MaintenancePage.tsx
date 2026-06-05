import Head from "next/head";
import {
    MaintenanceWrapper,
    MaintenanceHeader,
    MaintenanceBadge,
    MaintenanceTitle,
    MaintenanceDescription,
    DownloadButton,
} from "../styles/Maintenance.styles";

const RESUME_DOWNLOAD_URL = "/api/resume";

export default function MaintenancePage() {
    return (
        <>
            <Head>
                <title>리뉴얼 중 | 김지윤 포트폴리오</title>
                <meta
                    name="description"
                    content="포트폴리오 리뉴얼 중입니다. 이력서를 다운로드해 주세요."
                />
            </Head>
            <MaintenanceWrapper>
                <MaintenanceHeader>
                    <MaintenanceBadge>UNDER RENEWAL</MaintenanceBadge>
                    <MaintenanceTitle>리뉴얼 중입니다</MaintenanceTitle>
                    <MaintenanceDescription>
                        더 나은 포트폴리오로 곧 찾아뵙겠습니다.
                        <br />
                        그동안 이력서를 다운로드해 주세요.
                    </MaintenanceDescription>
                    <DownloadButton href={RESUME_DOWNLOAD_URL} download>
                        이력서 다운로드
                    </DownloadButton>
                </MaintenanceHeader>
            </MaintenanceWrapper>
        </>
    );
}
