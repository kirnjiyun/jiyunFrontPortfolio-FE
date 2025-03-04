import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // 꼭 import해줘야 스타일이 적용됩니다.

const MultiCarouselGallery = ({ images }) => {
    // 반응형 설정
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
            // 필요 시 더 많은 옵션 추가 가능
            // arrows={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // customTransition="transform 300ms ease-in-out"
            // etc...
        >
            {images.map((src, index) => (
                <div key={index}>
                    <img
                        src={src}
                        alt={`Screenshot-${index}`}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default MultiCarouselGallery;
