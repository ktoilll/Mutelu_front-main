// src/viewmodels/SeamsiViewmodels.ts
import { useState } from "react";

const image_seamsi_icon = [
    'seamsi_1.png',
    'seamsi_2.png',
    'seamsi_3.png',
    'seamsi_4.png',
];

const image_seamsi_animate = 'seamsi_animate.gif';

export const useSeamsiIconViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_seamsi_icon.length);
    };

    return {
        currentImage: image_seamsi_icon[currentIndex],
        imagesLength: image_seamsi_icon.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
    };
};

export const useSeamsiAnimateViewModel = () => {
    return {
        images: image_seamsi_animate,
    };
};
