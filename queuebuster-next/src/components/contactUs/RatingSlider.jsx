import Image from 'next/image'
import React, { useState } from 'react'
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ratingInfo } from '@/constants/common';

const RatingSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={700}
                pagination={{ clickable: true }}
                className="custom-testimonial-swiper"
                modules={[Autoplay, Pagination]}
            >
                {
                    ratingInfo?.map((ele) => {
                        return (
                            <SwiperSlide>
                                <div style={{display: "flex", textAlign: "center", justifyContent: "center", marginTop: "4rem", gap: "3rem"}}>
                                    <div style={{ height: "7rem", width: "15rem", position: "relative" }} ><Image src={ele?.companyImg} alt="" fill /></div>
                                    <div style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <span style={{ font: "normal normal bold 2.2rem/3rem Inter"}}>{ele?.rating}</span>
                                            <span style={{ font: "normal normal normal 1.5rem/2rem Inter", position: "relative", top: "0.2rem"}}>/5</span>
                                        </div>
                                        <div style={{ height: "7rem", width: "10rem", position: "relative", display: "flex", alignItems: "center" }} ><Image src={ele?.ratingImg} alt="" fill /></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default RatingSlider