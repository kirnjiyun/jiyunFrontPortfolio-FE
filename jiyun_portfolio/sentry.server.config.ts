// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
    dsn: "https://57f4107effdfa83b0d5fa9561b5eada8@o4508753552211968.ingest.us.sentry.io/4508753552408576",

    // 프로덕션에서만, 그리고 샘플링을 낮춰서 수집한다.
    tracesSampleRate: isProd ? 0.1 : 0,
    enabled: isProd,
});
