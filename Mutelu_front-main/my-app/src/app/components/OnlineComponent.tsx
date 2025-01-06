"use client";

import React from "react";
import { useOnlineDetailViewModel, useOnlineHeaderViewModel, useOnlineSymbolViewModel } from "../viewmodels/OnlineViewModels";
import Image from 'next/image';
import '../styles/Online.css';

const Online: React.FC = () => {
    const { currentImage, nextImage, setCurrentIndex, currentIndex, imagesLength } = useOnlineDetailViewModel();
    const { images: headerImages } = useOnlineHeaderViewModel();
    const { images: symbolImages } = useOnlineSymbolViewModel();

    return (
        <div className="online-container">
    
            <div className="online-header">
                <Image
                    src={`/img/online/${headerImages[0]}`}
                    alt="Online Header"
                    width={300}
                    height={50}
                    className="online-header-image"
                />
                <button 
                    className="see-all-button"
                    onClick={() => console.log('See All Clicked')}
                >
                    <Image
                        src={`/img/online/${symbolImages[0]}`}
                        alt="See All"
                        width={150}
                        height={50}
                    />
                </button>
            </div>

            <div className="online-carousel">
                <div className="online-image-container">
                    {Array.from({ length: 3 }).map((_, index) => {
                        const imageIndex = (currentIndex + index) % imagesLength; 
                        const imageSrc = `/img/online/online_${imageIndex+1}.png`; 

                        return (
                            <Image
                                key={index}
                                src={imageSrc} 
                                alt={`Online Image ${imageIndex + 1}`}
                                width={400}
                                height={200}
                                className="online-image"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Online;
