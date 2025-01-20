import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/globalCompo/Footer";
import Navbar from "../components/globalCompo/Navbar";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
