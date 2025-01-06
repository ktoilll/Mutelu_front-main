"use client";

import React from "react";
import { useAstroDetailViewModel, useAstroHeaderViewModel } from '../viewmodels/AstroViewmodel';
import Image from 'next/image';
import '../styles/Astro.css';

const Astro: React.FC = () => {
    const { currentImage, nextImage, setCurrentIndex, currentIndex } = useAstroDetailViewModel();
    const { images: headerImages } = useAstroHeaderViewModel();
    const images_astro_detail = [
        'astro_1.png',
        'astro_2.png',
        'astro_3.png',
        'astro_4.png',
    ];

    return (
        <div className="astro">
            {}
            <div className="astro-header">
                <Image
                    src={`/img/Astrologer/${headerImages[0]}`}
                    alt="Astro Title"
                    width={300}
                    height={50}
                    className="astro-title-image"
                />
                <button
                    className="see-all-button"
                    onClick={() => console.log('See All Clicked')}
                >
                    <Image
                        src={`/img/Astrologer/${headerImages[1]}`}
                        alt="See All"
                        width={150}
                        height={50}
                    />
                </button>
            </div>

          
            <div className="astro-carousel">
                
                <div className="astro-images-container">
                    {images_astro_detail.map((image, index) => (
                        <Image
                            key={index}
                            src={`/img/Astrologer/${image}`}
                            alt={`Astro Image ${index + 1}`}
                            width={180}
                            height={180}
                            className="astro-image"
                        />
                    ))}
                </div>

              
            </div>

           
      
        </div>
    );
};

export default Astro;
