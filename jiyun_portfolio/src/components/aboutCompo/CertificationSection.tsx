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
    HoverText,
} from "@/styles/about/CertificationSection.styles";

Modal.setAppElement("#__next");

export default function CertificationSection({ certificationData }) {
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (cert) => {
        setModalData(cert);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalData(null);
        setIsModalOpen(false);
    };

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

    return (
        <Section>
            <Title>Certifications & etc</Title>
            <CardGrid>
                {certificationData.map((cert, index) => (
                    <Card key={index} onClick={() => handleOpenModal(cert)}>
                        <ImageContainer>
                            <Front>
                                <Image
                                    src={cert.imageSrc}
                                    alt={cert.alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </Front>

                            <HoverText className="hover-text">
                                눌러보세요
                            </HoverText>
                        </ImageContainer>
                    </Card>
                ))}
            </CardGrid>

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
                            width: "400px",
                            padding: "30px",
                            borderRadius: "8px",
                            height: "300px",
                            backgroundColor: "var(--color-dark-blue)",
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            overflowY: "auto", // Y축 스크롤 활성화
                            overflowX: "hidden", // X축 스크롤 비활성화
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
                        }}
                    >
                        {modalData.title}
                    </h2>
                    <p
                        style={{
                            color: "var(--color-lightest-blue)",
                            textAlign: "center",
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
