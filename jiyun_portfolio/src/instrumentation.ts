import * as Sentry from "@sentry/nextjs";

export async function register() {
    // Node.js 런타임에서만 Sentry 초기화
    if (process.env.NEXT_RUNTIME === "nodejs") {
        await import("../sentry.server.config");
    }

    // Edge 런타임에서는 초기화를 생략하거나 최소화
    if (process.env.NEXT_RUNTIME === "edge") {
        // Edge 환경에서는 페이지 라우터와의 충돌 가능성이 있으므로, 초기화를 최소화하거나 생략
        console.log(
            "Edge runtime detected. Skipping Sentry initialization for now."
        );
        // 필요하면 Edge 전용 설정을 최소화 (예: `sentry.edge.config`에서 불필요한 로직 제거)
        // await import('../sentry.edge.config');
    }
}

// 요청 오류 캡처
export const onRequestError = Sentry.captureRequestError;
