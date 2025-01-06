import { useEffect, useState } from 'react';

const image_merch_detail = [
    'merch_1.png',
    'merch_2.png',
    'merch_3.png',
    'merch_4.png',
    'merch_5.png',
];

const images_merch_header = [
    'merch_header.png',
];

const images_merch_symbol = [
    'merch_L.png',
    'merch_R.png',
];

export const useMerchDetailViewModel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_merch_detail.length);
    }

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return {
        currentImage: image_merch_detail[currentIndex],
        imagesLength: image_merch_detail.length,
        nextImage,
        setCurrentIndex,
        currentIndex,
    };
}

export const useMerchHeaderViewModel = () => {
    return {
        images: images_merch_header,
    };
}

export const useMerchSymbolViewModel = () => {
    return {
        images: images_merch_symbol,
    };
}
