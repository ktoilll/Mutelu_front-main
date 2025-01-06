import { useEffect, useState } from "react";

const image_online_detail = [
    'online_1.png',
    'online_2.png',
    'online_3.png',
];

const image_online_header = [
    'online_header.png',
];

const image_online_symbol = [
    'see_all.png',
];

export const useOnlineDetailViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_online_detail.length);
    };


    return {
        currentImage: image_online_detail[currentIndex],
        imagesLength: image_online_detail.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
    };
};

export const useOnlineHeaderViewModel = () => {
    return {
        images: image_online_header,
    };
};

export const useOnlineSymbolViewModel = () => {
    return {
        images: image_online_symbol,
    };
};
