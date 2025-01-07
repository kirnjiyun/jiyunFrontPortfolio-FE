import Image from "next/image";

export default function CertificationSection() {
    const certifications = [
        {
            imageSrc: "/images/책표지.webp",
            alt: "TypeScript Book",
            title: "타입스크립트 책 집필",
            description: <a href="https://github.com/your-repo">GitHub 링크</a>,
        },
        {
            imageSrc: "/images/정보처리기사이미지.webp",
            alt: "정보처리기사",
            title: "정보처리기사",
            description: "취득일: 2024.01.10",
        },
        {
            imageSrc: "/images/sql.webp",
            alt: "SQLD",
            title: "SQLD (SQL 개발자 자격증)",
            description: "취득일: 2023.12.01",
        },
        {
            imageSrc: "/images/toeicspeaking.webp",
            alt: "TOEIC Speaking",
            title: "토익스피킹",
            description: "Level 7 (160점)",
        },
    ];

    return (
        <section style={styles.horizontalSection}>
            {certifications.map((cert, index) => (
                <div key={index} style={styles.card}>
                    {/* 이미지 */}
                    <div style={styles.imageContainer}>
                        <Image
                            src={cert.imageSrc}
                            alt={cert.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* 자격증 정보 */}
                    <div style={styles.textContainer}>
                        <h2 style={styles.title}>{cert.title}</h2>
                        <p style={styles.description}>{cert.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    horizontalSection: {
        display: "flex",
        overflowX: "auto", // 명시적으로 타입을 지정
        scrollSnapType: "x mandatory", // 추가적으로 필요한 부분
        gap: "16px",
        padding: "16px",
    },
    card: {
        display: "flex",
        flexDirection: "row", // 명시적으로 타입을 추가
        alignItems: "center",
        width: "400px",
        height: "200px",
        flex: "0 0 auto",
        scrollSnapAlign: "start", // 명시적 타입
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    imageContainer: {
        position: "relative",
        width: "120px",
        height: "120px",
        borderRadius: "8px",
        overflow: "hidden",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "16px",
        width: "calc(100% - 140px)",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "8px",
    },
    description: {
        fontSize: "14px",
        color: "#666",
        textAlign: "right",
    },
};
