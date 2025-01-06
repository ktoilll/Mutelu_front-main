import { useEffect, useState } from 'react';

const images_astro_detail = [
    'astro_1.png',
    'astro_2.png',
    'astro_3.png',
    'astro_4.png',
];

const images_astro_header = [
    'astro_title.png',
    'see_all.png',
];

export const useAstroDetailViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images_astro_detail.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000); 
        return () => clearInterval(interval);
    }, []);

    return {
        currentImage: images_astro_detail[currentIndex],
        imagesLength: images_astro_detail.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
    };
};

export const useAstroHeaderViewModel = () => {
    return {
        images: images_astro_header,
    };
};
