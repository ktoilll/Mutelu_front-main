"use client";

import React from 'react';
import { usePackageDetailViewModel, usePackageHeaderViewModel, usePackageSymbolViewModel } from "../viewmodels/PackageViewmodel"; 
import Image from 'next/image';
import '../styles/Package.css';

const Package: React.FC = () => {
    const { currentImage, nextImage, setCurrentIndex, currentIndex, imagesLength } = usePackageDetailViewModel();
    const { images: headerImages } = usePackageHeaderViewModel();
    const { images: symbolImages } = usePackageSymbolViewModel();

    return (
        <div className="package-container">
            <div className="package-header">
                <Image
                    src={`/img/package/${headerImages[0]}`}
                    alt="Package Header"
                    width={300}
                    height={50}
                    className="package-header-image"
                />
                <button
                    className="see-all-button"
                    onClick={() => console.log('See All Clicked')}
                >
                    <Image
                        src={`/img/package/${symbolImages[0]}`}
                        alt="See All"
                        width={150}
                        height={50}
                    />
                </button>
            </div>


            <div className="package-carousel">
                <div className="package-image-container">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const imageIndex = (currentIndex + index) % imagesLength;
                        const imageSrc = `/img/package/package_${imageIndex + 1}.png`; // Correct src path

                        return (
                            <Image
                                key={index}
                                src={imageSrc}
                                alt={`Package Image ${imageIndex + 1}`}
                                width={200}
                                height={500}
                                className="package-image"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Package;
