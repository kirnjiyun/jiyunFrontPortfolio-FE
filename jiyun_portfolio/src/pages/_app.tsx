import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { Inter } from "next/font/google";

import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/globalCompo/Footer";
import Navbar from "../components/globalCompo/Navbar";
import MaintenancePage from "../components/MaintenancePage";
import { MAINTENANCE_MODE } from "../lib/maintenance";
import { ThemeProvider } from "../lib/ThemeContext";

// next/font 로 self-host. 외부 도메인 왕복과 렌더 블로킹 CSS 가 사라진다.
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
                <ThemeProvider>
                    <GlobalStyle $sansFont={inter.style.fontFamily} />
                    {MAINTENANCE_MODE ? (
                        <MaintenancePage />
                    ) : (
                        <>
                            <Navbar />
                            <Component {...pageProps} />
                            <Footer />
                        </>
                    )}
                </ThemeProvider>
            </HydrationBoundary>
        </QueryClientProvider>
    );
}
