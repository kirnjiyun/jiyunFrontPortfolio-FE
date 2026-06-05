import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";

import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/globalCompo/Footer";
import Navbar from "../components/globalCompo/Navbar";
import MaintenancePage from "../components/MaintenancePage";
import { MAINTENANCE_MODE } from "../lib/maintenance";

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
                <GlobalStyle />
                {MAINTENANCE_MODE ? (
                    <MaintenancePage />
                ) : (
                    <>
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </>
                )}
            </HydrationBoundary>
        </QueryClientProvider>
    );
}
