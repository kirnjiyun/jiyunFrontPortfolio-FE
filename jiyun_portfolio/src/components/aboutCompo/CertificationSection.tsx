import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import {
    Section,
    Title,
    CardGrid,
    Card,
    ImageContainer,
    Front,
    // HoverText, // 이제 커스텀 커서로 대체하므로 주석 처리
} from "@/styles/about/CertificationSection.styles";

Modal.setAppElement("#__next");

export default function CertificationSection({ certificationData }) {
    // 모달용 상태
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 어떤 카드(index)가 hover 되었는지
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // 각 카드별 마우스 좌표 { [index]: { x, y } }
    const [positions, setPositions] = useState({});

    // 모달 열기/닫기
    const handleOpenModal = (cert) => {
        setModalData(cert);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalData(null);
        setIsModalOpen(false);
    };

    // 모달에 표시할 description 속 링크 치환
    function formatDescription(description) {
        return description
            .replace(
                /GitHub 링크: (https?:\/\/[^\s,]+)/,
                '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: var(--color-lightest-blue); text-decoration: underline;">GitHub 링크</a>'
            )
            .replace(
                /E-book 링크: (https?:\/\/[^\s,]+)/,
                '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: var(--color-lightest-blue); text-decoration: underline;">E-book 링크</a>'
            );
    }

    // 마우스가 카드 위에 들어오면
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    // 카드 밖으로 나가면
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    // 카드 위에서 마우스가 움직일 때 좌표 업데이트
    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPositions((prev) => ({
            ...prev,
            [index]: { x, y },
        }));
    };

    return (
        <Section>
            <Title>Certifications &amp; etc</Title>
            <CardGrid>
                {certificationData?.map((cert, index) => {
                    const isHovered = hoveredIndex === index;
                    const pos = positions[index];

                    return (
                        <Card
                            key={index}
                            onClick={() => handleOpenModal(cert)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            style={{
                                position: "relative",
                                cursor: isHovered ? "none" : "pointer",
                                // isHovered일 때만 기본 커서 숨김, 아니면 일반 포인터
                            }}
                        >
                            <ImageContainer>
                                <Front
                                    style={{
                                        transition: "filter 0.3s ease",
                                        // hover된 카드면 어둡게 + 블러 처리
                                        filter: isHovered
                                            ? "brightness(0.7) blur(2px)"
                                            : "none",
                                    }}
                                >
                                    <Image
                                        src={cert.imageSrc}
                                        alt={cert.alt}
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            filter: "grayscale(100%) contrast(100%)",
                                        }}
                                    />
                                </Front>

                                {isHovered && pos && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: pos.x,
                                            top: pos.y,
                                            transform: "translate(-50%, -50%)",
                                            pointerEvents: "none",
                                            backgroundColor:
                                                "var(--color-dark-blue)",
                                            color: "var(--color-brightest-blue)",
                                            padding: "1rem",
                                            borderRadius: "8px",
                                            fontWeight: "bolder",
                                            zIndex: 9999,
                                        }}
                                    >
                                        눌러보세요
                                    </div>
                                )}
                            </ImageContainer>
                        </Card>
                    );
                })}
            </CardGrid>

            {/* 모달 부분 */}
            {modalData && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                        content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                            width: "500px",
                            padding: "30px",
                            borderRadius: "8px",
                            height: "auto",
                            overflow: "visible",
                            scrollY: "auto",
                            backgroundColor: "var(--color-dark-blue)",
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            overflowY: "auto",
                            overflowX: "hidden",
                        },
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            backdropFilter: "blur(8px)",
                        },
                    }}
                >
                    <button
                        onClick={handleCloseModal}
                        style={{
                            all: "unset",
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            color: "var(--color-lightest-blue)",
                            cursor: "pointer",
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        X
                    </button>
                    <h2
                        style={{
                            color: "var(--color-brightest-blue)",
                            textAlign: "center",
                            margin: "20px",
                        }}
                    >
                        {modalData.title}
                    </h2>
                    <p
                        style={{
                            color: "var(--color-lightest-blue)",
                            textAlign: "center",
                            margin: "20px 10px",
                        }}
                        dangerouslySetInnerHTML={{
                            __html: formatDescription(modalData.description),
                        }}
                    />
                </Modal>
            )}
        </Section>
    );
}
