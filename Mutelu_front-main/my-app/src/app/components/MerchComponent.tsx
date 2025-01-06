"use client";

import { useMerchDetailViewModel, useMerchHeaderViewModel, useMerchSymbolViewModel } from '../viewmodels/MerchViewmodel';
import Image from 'next/image';
import '../styles/Merch.css';

const Merch: React.FC = () => {
    const { currentIndex, nextImage, setCurrentIndex, imagesLength } = useMerchDetailViewModel();
    const { images: headerImages } = useMerchHeaderViewModel();
    const { images: symbolImages } = useMerchSymbolViewModel();

    return (
        <div className="merch-container">
            <div className="merch-header">
                <Image
                    src={`/img/merch/${headerImages[0]}`}
                    alt="Merch Header"
                    width={200}  
                    height={200} 
                    className="merch-header-image"
                />
            </div>

            <div className="merch-navigation-symbols">
                <Image
                    src={`/img/merch/${symbolImages[0]}`}
                    alt="Left Arrow"
                    width={40}
                    height={40}
                    className="nav-symbol"
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength)}
                />
            </div>

            <div className="merch-detail">
                <div className="merch-carousel">
                    {Array.from({ length: 4 }).map((_, index) => {
                        const imageIndex = (currentIndex + index) % imagesLength; 
                        return (
                            <Image
                                key={index}
                                src={`/img/merch/merch_${imageIndex + 1}.png`} // Correct the image source path
                                alt={`Merch Image ${imageIndex + 1}`}
                                width={200}
                                height={200}
                                className="merch-image"
                            />
                        );
                    })}
                </div>
            </div>

            <div className="merch-navigation-symbols">
                <Image
                    src={`/img/merch/${symbolImages[1]}`}
                    alt="Right Arrow"
                    width={40}
                    height={40}
                    className="nav-symbol"
                    onClick={nextImage}
                />
            </div>
        </div>
    );
}

export default Merch;
