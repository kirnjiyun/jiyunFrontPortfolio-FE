import styled from "styled-components";

export const MaintenanceWrapper = styled.main`
    position: relative;
    min-height: 100svh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 var(--page-gutter);
`;
export const MaintenanceNav = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    min-height: 72px;
    border-bottom: 1px solid var(--color-border);
    font: 12px var(--font-mono);
    position: relative;
    z-index: 1;
    strong { font-weight: 600; }
    strong::before { content: '▪'; padding-right: 9px; }
    a { padding: 15px 0; }
    a:hover { text-decoration: underline; text-underline-offset: 5px; }
`;
export const MaintenanceHeader = styled.div`
    position: relative;
    z-index: 1;
    flex: 1;
    padding-top: clamp(56px, 10vh, 130px);
    padding-bottom: 52px;
`;
export const MaintenanceBadge = styled.span`
    display: block;
    font: 11px var(--font-mono);
    text-transform: lowercase;
    color: var(--color-muted-fg);
    margin-bottom: clamp(64px, 11vh, 140px);
    &::before { content: '○'; margin-right: 8px; }
`;
export const MaintenanceTitle = styled.h1`
    font-size: clamp(76px, 14.8vw, 238px);
    font-weight: 400;
    line-height: 0.94;
    letter-spacing: -0.075em;
    margin-bottom: 56px;
    span { display: block; }
    span:first-child { margin-left: 25%; }
    @media (max-width: 700px) {
        font-size: clamp(62px, 17vw, 110px);
        margin-bottom: 36px;
        span:first-child { margin-left: 0; }
    }
`;
export const MaintenanceDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-left: 25%;
    @media (max-width: 900px) { margin-left: 0; }
    @media (max-width: 700px) { grid-template-columns: 1fr; gap: 28px; }
`;
export const MaintenanceDescription = styled.div`
    h2 { font-size: 20px; font-weight: 500; letter-spacing: -0.04em; margin-bottom: 12px; }
    p { font-size: 14px; color: var(--color-muted-fg); line-height: 1.9; word-break: keep-all; }
`;
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    > div { justify-content: flex-start; }
    > div > button { min-width: 0; margin-top: 14px; padding: 10px 0; border: 0; border-radius: 0; background: transparent; color: var(--color-muted-fg); font-size: 12px; }
`;
export const DownloadButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid var(--color-border);
    padding: 16px 0;
    font-size: 14px;
    transition: padding 200ms ease;
    span:last-child { font-size: 20px; }
    &:hover { padding-left: 8px; padding-right: 8px; }
`;
export const PreviewButton = styled(DownloadButton)`border-bottom: 1px solid var(--color-border);`;
export const MaintenanceFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 18px;
    padding: 20px 0;
    border-top: 1px solid var(--color-border);
    font: 10px / 1.7 var(--font-mono);
    color: var(--color-muted-fg);
    a:hover { text-decoration: underline; }
`;
