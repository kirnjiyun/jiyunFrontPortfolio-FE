// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
    dsn: "https://57f4107effdfa83b0d5fa9561b5eada8@o4508753552211968.ingest.us.sentry.io/4508753552408576",

    // 프로덕션에서 100% 트레이싱은 성능·쿼터 낭비라 샘플링을 낮춘다.
    tracesSampleRate: isProd ? 0.1 : 0,

    // 개발 중에는 Sentry 로 이벤트를 보내지 않는다.
    enabled: isProd,

    debug: false,
});
