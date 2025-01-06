"use client";

import React, { useState, useEffect } from "react";
import { useSeamsiAnimateViewModel, useSeamsiIconViewModel } from "../viewmodels/SeamsiViewmodels";
import Image from "next/image";
import '../styles/Seamsi_ac.css';
import { Seamsi_rs } from "./Seamsi_rsComponent";

const Seamsi_ac: React.FC = () => {
    const { currentImage } = useSeamsiIconViewModel();
    const { images: animateGif } = useSeamsiAnimateViewModel();
    const [isAnimating, setIsAnimating] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
        setIsAnimating(true);
        setShowResult(false);

        setTimeout(() => {
            setIsAnimating(false);
            setShowResult(true);
        }, 3000); 
    };


    const handleRestart = () => {
        setIsAnimating(false);
        setShowResult(false);
    };

    return (
        <div className="seamsi_ac-container">
            {showResult ? (
                <Seamsi_rs onRestart={handleRestart} />
            ) : (
                <>
                    <div className="seamsi_ac-header">
                        <div className="seamsi-image-wrapper">
                            <Image
                                src={isAnimating ? `/img/seamsi/${animateGif}` : `/img/seamsi/${currentImage}`}
                                alt="Seamsi Animation or Icon"
                                width={500}
                                height={500}
                                className="seamsi-image"
                            />
                        </div>
                    </div>
                    <div className="seamsi_ac-title">
                        <div>
                            <h5>ขอตั้งจิตอธิษฐานระลึกถึงสิ่งศักดิ์สิทธิ์ทั้งหลาย และสิ่งศักดิ์สิทธิ์</h5>
                            <h5>ช่วยดลบันดาลให้การทำนายนี้ ให้การเสี่ยงทายเซียมซีครั้งนี้ สำเร็จลุล่วงสมประสงค์ทุกประการเทอญ</h5>
                        </div>
                        <div>
                            <button onClick={handleButtonClick}>เสี่ยงทาย</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Seamsi_ac;
