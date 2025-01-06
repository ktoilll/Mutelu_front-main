"use client";

import React from "react";
import { useHoroDetailViewModel, useHoroHeaderViewModel } from "../viewmodels/HoroScopeViewModels";
import Image from 'next/image';
import '../styles/HoroScope.css';

const Horo: React.FC = () => {
    const { currentIndex, imagesLength, handleImageClick } = useHoroDetailViewModel();
    const { images: headerImages } = useHoroHeaderViewModel();

    return (
        <div className="horo-container">
            <div className="horo-header">
                <Image
                    src={`/img/horoscope/${headerImages[0]}`}
                    alt="Horoscope Header"
                    width={300}
                    height={50}
                    className="horoscope-header-image"
                />
            </div>
   
            <div className="horo-detail">
                <div className="horo-carousel">
                    {Array.from({ length: 3 }).map((_, index) => {
                        const imageIndex = (currentIndex + index) % imagesLength; 
                        return (
                            <div key={index} onClick={() => handleImageClick(imageIndex)}> {/* แก้เป็น imageIndex */}
                                <Image
                                    src={`/img/horoscope/horo_${imageIndex}.png`}
                                    alt={`Horoscope Image ${imageIndex + 1}`}
                                    width={200}
                                    height={200}
                                    className="horo-image"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Horo;
