import styled from "styled-components";
import Link from "next/link";

const FooterWrap = styled.footer`
    padding: 40px var(--page-gutter) 24px;
    border-top: 1px solid var(--color-border);
    background: var(--color-bg);
`;
const Contact = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding-bottom: 72px;
    gap: 24px;
    p { font: 12px var(--font-mono); }
    a { font-size: clamp(44px, 8.5vw, 144px); line-height: 1; letter-spacing: -0.065em; }
    a:hover { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 12px; }
    @media (max-width: 700px) { grid-template-columns: 1fr; padding-bottom: 48px; }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--color-border);
    font: 11px / 1.8 var(--font-mono);
    nav { display: flex; gap: 24px; }
    a:hover { text-decoration: underline; text-underline-offset: 4px; }
    p { color: var(--color-muted-fg); }
`;
export default function Footer() {
    return (
        <FooterWrap>
            <Contact><p>have something in mind?<br />함께 이야기해요.</p><a href="mailto:kimjiyunee@naver.com">let’s talk ↗</a></Contact>
            <Bottom>
                <p>design & development by kim jiyun</p>
                <nav aria-label="하단 메뉴"><Link href="/projects">projects</Link><Link href="/about">about</Link><a href="https://github.com/kirnjiyun" target="_blank" rel="noopener noreferrer">github ↗</a></nav>
                <p>© {new Date().getFullYear()} kim jiyun</p>
            </Bottom>
        </FooterWrap>
    );
}
