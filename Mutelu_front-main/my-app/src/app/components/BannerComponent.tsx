"use client";

import React from 'react';
import { useBannerViewModel } from '../viewmodels/BannerViewModel'; 
import Image from 'next/image';
import '../styles/Banner.css';

const Banner: React.FC = () => {
    const { currentImage, nextImage, setCurrentIndex, currentIndex, imagesLength } = useBannerViewModel();

    return (
        <div className="banner">
            <Image
                src={`/img/banner/${currentImage}`}
                alt="Banner"
                className="banner-image"
                width={1500}
                height={700}
            />
            <div className="banner-controls">
                <button 
                    className="banner-button"
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength)}>
                    ❮
                </button>
                <button 
                    className="banner-button"
                    onClick={nextImage}>
                    ❯
                </button>
            </div>
            <div className="circle-indicators">
                {Array.from({ length: imagesLength }).map((_, index) => (
                    <button 
                        key={index}
                        className={`circle ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
export default Banner;
