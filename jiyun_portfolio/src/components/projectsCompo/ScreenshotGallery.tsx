import React, { useState } from "react";
import {
    GalleryContainer,
    ScreenshotDisplay,
    Navigation,
    NavButton,
    ScreenshotImage,
} from "@/styles/projects/ScreenshotGallery.styles";

const ScreenshotGallery = ({ screenshots }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <GalleryContainer>
            <ScreenshotDisplay>
                <ScreenshotImage
                    src={screenshots[currentIndex]}
                    alt={`스크린샷 ${currentIndex + 1}`}
                />
            </ScreenshotDisplay>
            <Navigation>
                {screenshots.map((_, index) => (
                    <NavButton
                        key={index}
                        isActive={index === currentIndex}
                        onClick={() => handleNavClick(index)}
                    >
                        {index + 1}
                    </NavButton>
                ))}
            </Navigation>
        </GalleryContainer>
    );
};

export default ScreenshotGallery;
