import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const image_horo_detail = [
    'horo_1.png',
    'horo_2.png',
    'horo_3.png',
];

const image_horo_header = [
    'horo_header.png'
];

export const useHoroDetailViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const router = useRouter(); 

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_horo_detail.length);
    };

    const handleImageClick = (index: number) => {
        const path = './SeamsiPageView'; 
        console.log('Navigating to:', path); 
        if (index === 2) {
            router.push(path);
        }
    };
    
    return {
        currentImage: image_horo_detail[currentIndex],
        imagesLength: image_horo_detail.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
        handleImageClick 
    };
};

export const useHoroHeaderViewModel = () => {
    return {
        images: image_horo_header
    };
};
