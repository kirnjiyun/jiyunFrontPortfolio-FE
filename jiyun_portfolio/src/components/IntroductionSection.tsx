import React from "react";

export default function IntroductionSection() {
    return (
        <section style={styles.section}>
            {/* 왼쪽 이미지 영역 */}
            <div style={styles.imageContainer}>
                <img
                    src="/images/작은 이미지 작게.jpeg" // 프로필 사진 경로
                    alt="Profile"
                    style={styles.profileImage}
                />
            </div>
            <div style={styles.textContainer}>
                <h2 style={styles.title}>Introduction</h2>
                <p style={styles.paragraph}>
                    안녕하세요! 저는 사용자에게 최적의 경험(UX)을 제공하는 UI에
                    큰 관심을 갖고 여러 프론트엔드 프로젝트를 수행해 왔습니다.
                    이 과정에서 TypeScript를 중심으로 안정성과 코드 품질을
                    높이는 방법을 익혔고, 백엔드 공부 경험도 있습니다. 앞으로도
                    사용자의 편의와 만족도를 최우선으로 고려하며 더욱 성장하는
                    개발자가 되겠습니다. 감사합니다.
                </p>

                {/* 추가 정보 */}
                <div style={styles.infoContainer}>
                    <p style={styles.infoItem}>
                        <strong>이름:</strong> 김지윤
                    </p>
                    <p style={styles.infoItem}>
                        <strong>생년월일:</strong> 1997년 5월 10일
                    </p>
                    <p style={styles.infoItem}>
                        <strong>지역:</strong> 서울특별시
                    </p>
                    <p style={styles.infoItem}>
                        <strong>이메일:</strong>{" "}
                        <a
                            href="mailto:your-email@example.com"
                            style={styles.link}
                        >
                            your-email@example.com
                        </a>
                    </p>
                    <p style={styles.infoItem}>
                        <strong>GitHub:</strong>{" "}
                        <a
                            href="https://github.com/your-github"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            github.com/your-github
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

const styles: any = {
    section: {
        display: "flex",
        alignItems: "center",
        padding: "32px",
        backgroundColor: "var(--color-lightest-blue)", // 글로벌 색상 사용
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "16px 0",
    },
    imageContainer: {
        flex: "0 0 150px",
        marginRight: "32px",
    },
    profileImage: {
        width: "150px",
        height: "150px",
        borderRadius: "50%", // 원형 이미지
        objectFit: "cover",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "3px solid var(--color-medium-blue)",
    },
    textContainer: {
        flex: "1",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "16px",
        color: "var(--color-dark-blue)",
    },
    paragraph: {
        fontSize: "16px",
        lineHeight: "1.8",
        marginBottom: "24px",
        color: "var(--color-medium-blue)",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    infoItem: {
        fontSize: "16px",
        color: "var(--color-dark-blue)",
    },
    link: {
        color: "var(--color-medium-blue)",
        textDecoration: "none",
        fontWeight: "bold",
    },
};
