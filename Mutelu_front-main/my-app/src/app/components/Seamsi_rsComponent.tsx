"use client";

import React from "react";
import Image from "next/image";
import '../styles/Seamsi_ac.css';

export const Seamsi_rs: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
    return (
        <div className="seamsi_rs-container">
            <div className="seamsi_rs-header">
                <div className="seamsi-image-wrapper-card">
                    <Image
                        src={`/img/seamsi/seamsi_4.png`}
                        alt="Seamsi Result"
                        width={400}
                        height={400}
                        className="seamsi-image"
                    />
                </div>
            </div>
            <div className="seamsi_rs-title">
                <h2>ใบที่ 23</h2>
                <h5>ใบที่ยี่สิบสาม ความคิดเป็นศรีสุข ถึงใครเองเจ็บไข้อย่าได้ทุกข์
                    คงเป็นสุขทั้งเรือนไม่เคลื่อนคลาย ทั้งจะมีลาภด้วยอย่างงวยงง
                    สมประสงค์แสนสมอารมณ์หมาย ไปทางไกลได้ตามความสบาย
                    แม้นถามหมายใด ๆ คงได้การ ถามคนเจ็บว่าหายสบายจิต
                    แม้นถามติดเรื่องความที่ตามศาล คงชนะเที่ยงแท้แน่แก่การ
                    เกษมศานต์แสนสมอารมณ์ปอง ถามหาลาภก็ดีเป็นที่ยิ่ง
                    สิ้นทุกสิ่งดีพร้อมไม่มอมหมอง เหมือนโกสุมบุพผามณฑาทอง
                    ในทำนองใบนี้ว่าดีเอย
                </h5>
                <button onClick={onRestart}>เก็บคำทำนาย</button>
            </div>
        </div>
    );
};
