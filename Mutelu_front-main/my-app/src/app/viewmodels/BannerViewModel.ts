import { useEffect, useState } from 'react';

const images = [
    'banner_1.png',
    'banner_2.png',
    'banner_3.png', 
];

export const useBannerViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return {
        currentImage: images[currentIndex],
        imagesLength: images.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
    };
};
