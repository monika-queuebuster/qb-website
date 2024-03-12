import React, { useState } from 'react'
import styles from '../../../styles/common/gdnv3.module.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

SwiperCore.use([Navigation]);

const Gdnv3Slider = ({ outletTypes, cards }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <>
            <div className={styles.slider_outer_container}>
                <Swiper
                    slidesPerView={cards}
                    spaceBetween={50}
                    navigation={{
                        prevEl: '.custom-prev-feature',
                        nextEl: '.custom-next-feature',
                    }}
                    className="custom-swiper-container"
                    speed={700}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(e) => setActiveSlide(e.activeIndex)}
                >
                    {
                        outletTypes?.map((ele) => {
                            return (
                                <SwiperSlide key={ele?.id}>
                                    <div style={{ backgroundColor: ele?.bgColor }} className={styles.outlet_card}>
                                        <div className={styles.slider_img_container}><Image src={ele?.image} alt={ele?.altText} fill /></div>
                                        <div className={styles.slider_img_title}>{ele?.title}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className={`custom-prev-feature ${activeSlide === 0 && styles.disabled_arrow}`} ><SlArrowLeft /></div>
                    <div className={`custom-next-feature ${activeSlide === outletTypes.length - 1 && styles.disabled_arrow}`} ><SlArrowRight /></div>
                </Swiper>
            </div>
        </>
    )
}

export default Gdnv3Slider