import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarouselGallery = ({ images }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const [loadedImages, setLoadedImages] = useState(
        Array(images?.length || 0).fill(false)
    );

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    if (!images || images.length === 0) return null;

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            showDots={false}
            autoPlay={false}
            keyBoardControl={true}
            swipeable={true}
            draggable={true}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    style={{
                        position: "relative",
                        display: "flex", // Flexbox로 중앙 정렬
                        justifyContent: "center", // 수평 중앙
                        alignItems: "center", // 수직 중앙
                        height: "100%", // 캐러셀 높이 전체 사용
                    }}
                >
                    {!loadedImages[index] && (
                        <img
                            src="/images/loading/loading.svg"
                            alt="Loading"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    )}

                    <img
                        src={src}
                        alt={`Screenshot-${index}`}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            display: loadedImages[index] ? "block" : "none",
                        }}
                        onLoad={() => handleImageLoad(index)}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default MultiCarouselGallery;
