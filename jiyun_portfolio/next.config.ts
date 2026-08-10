const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
    // Next.js 설정
    reactStrictMode: true,
    // 이미지 최적화: avif/webp 로 변환해 원본 PNG 대비 크게 줄인다.
    images: {
        formats: ["image/avif", "image/webp"],
        // 백엔드에서 내려오는 썸네일 URL 을 next/image 로 최적화하려면
        // 해당 호스트를 여기에 등록해야 한다.
        remotePatterns: [
            {
                protocol: "https",
                hostname: "jiyunfrontportfolio-be.onrender.com",
            },
        ],
    },
    // Sentry 설정에서 예제 페이지 비활성화
    sentry: {
        disableServerWebpackPlugin: false,
        disableClientWebpackPlugin: false,
        hideSourceMaps: false, // 소스 맵 숨기기 여부 (필요 시 true로 변경)
    },
    // Sentry 예제 페이지를 빌드에서 제외
    async rewrites() {
        return [];
    },
    // 페이지 자동 생성 비활성화 (필요 시 추가)
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = withSentryConfig(nextConfig, {
    // Sentry 추가 옵션
    silent: true, // 로그 억제
    // 소스 맵 생성 후 삭제 설정 (빌드 경고 해결)
    sourcemaps: {
        deleteSourcemapsAfterUpload: true, // 소스 맵 업로드 후 삭제
    },
});
