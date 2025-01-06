import { useEffect, useState } from "react";

const image_package_detail = [
    'package_1.png',
    'package_2.png',
    'package_3.png',
    'package_4.png',
    'package_5.png',
];

const image_package_header = [
    'package_header.png'
];

const image_package_symbol = [
    'see_all.png'
];

export const usePackageDetailViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_package_detail.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return {
        currentImage: image_package_detail[currentIndex],
        imagesLength: image_package_detail.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
    };
};

export const usePackageHeaderViewModel = () => {
    return {
        images: image_package_header
    };
};

export const usePackageSymbolViewModel = () => {
    return {
        images: image_package_symbol,
    };
};
