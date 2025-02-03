/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://kimjiyun.site", // 자신의 도메인으로 변경
    generateRobotsTxt: true, // robots.txt 파일도 자동 생성
    sitemapSize: 5000, // 페이지가 많을 경우 사이트맵 분할
};
