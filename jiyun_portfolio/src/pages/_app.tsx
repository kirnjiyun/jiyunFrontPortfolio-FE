import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
