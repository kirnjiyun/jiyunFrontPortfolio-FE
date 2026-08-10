import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

// 다크 모드 임시 비활성화 (ThemeContext.ENABLE_DARK_MODE 참고).
// 다시 켤 때: 아래 주석을 해제하고 <body> 첫 줄에
// <script dangerouslySetInnerHTML={{ __html: themeScript }} /> 를 다시 넣으면 된다.
// const themeScript = `
// (function() {
//     try {
//         var theme = localStorage.getItem('theme');
//         if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//             document.documentElement.setAttribute('data-theme', 'dark');
//         }
//     } catch(e) {}
// })();
// `;

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="ko">
                {/* 폰트는 _app.tsx 의 next/font 가 self-host 로 처리한다 */}
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
