import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet(); // Styled-Components 스타일 시트 생성
        const originalRenderPage = ctx.renderPage;

        try {
            // renderPage를 오버라이드하여 Styled-Components 스타일을 수집
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
                        {sheet.getStyleElement()}{" "}
                        {/* 수집된 스타일을 <head>에 삽입 */}
                    </>
                ),
            };
        } finally {
            sheet.seal(); // 메모리 누수 방지를 위해 시트 정리
        }
    }

    render() {
        return (
            <Html>
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
