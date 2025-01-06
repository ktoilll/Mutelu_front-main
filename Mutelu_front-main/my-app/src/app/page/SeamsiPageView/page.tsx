"use client";

import React, { useRef } from 'react';
import HomePageViewModel from '../../viewmodels/HomePageViewModel';
import Header from '../../components/HeaderComponent';
import Footer from '../../components/FooterComponent';
import Seamsi_ac from '../../components/SeamsiComponent';
import '../../styles/Seamsi.css';

const SeamsiPageView: React.FC = () => {
    const viewModelRef = useRef(new HomePageViewModel());

    return (
        <div className="homepage">
            <Header />
            <div className="container max-w-screen-xl mx-auto px-8">
       
                <h1 className="seamsi-header">เซียมซี</h1>
                
                <h2 className="seamsi-divider"></h2>

                <div className="seamsi-warning-container">
                    <h5 className="seamsi-warning-text">
                        ขอเตือน: การเสี่ยงเซียมซี คุณจะต้องมีใจที่บริสุทธิ์ มีสมาธิ เซียมซีจะบอกให้ทราบถึงเรื่องราวในอนาคตของคุณไม่ควรทำเล่นๆ หรือลบหลู่ 
                        และไม่ควรเซียมซีบ่อย แนะนำให้เสี่ยงเซียมซีสัปดาห์ละ 1 ครั้งเท่านั้น
                    </h5>
                </div>
                <Seamsi_ac />
            </div>
            <Footer />
        </div>
    );
};

export default SeamsiPageView;
