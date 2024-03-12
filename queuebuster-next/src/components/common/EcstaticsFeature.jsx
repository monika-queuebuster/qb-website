import React, { useState } from 'react'
import styles from '../../styles/common/Ecstatic.module.css'
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const EcstaticsFeature = ({ ecstatic }) => {
    const [showMore, setShowMore] = useState({ state: false, idx: null });
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Swiper
            slidesPerView={3}
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
                ecstatic?.map((ele) => {
                    return (
                        <SwiperSlide>
                            <div className={styles.ecstatic_card} style={{ backgroundColor: ele?.bgColor }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div className={styles.icon}><Image src={ele?.icon} alt='icon' fill /></div>
                                    <div className={styles.tag_text} style={{ backgroundColor: ele?.tagBG }}>{ele?.tag}</div>
                                </div>
                                <h4 className={styles.ecstatic_heading}>{ele?.title}</h4>
                                <div
                                    style={{ height: showMore?.state && showMore?.idx === ele?.id ? ele?.height : '5rem', overflow: 'hidden', transition: '1s' }}
                                >
                                    <p className={styles.ecstatic_desc}>
                                        {ele?.fullText}
                                    </p>
                                </div>
                                <div>
                                    <p className={`${styles.show_more}`} onClick={() => setShowMore({ state: (showMore.idx === ele?.id && showMore?.state) ? false : true, idx: ele?.id })}>{showMore.state && showMore.idx === ele?.id ? 'Show Less' : 'Show More'}</p>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}><div className={styles.image_container} style={{height: ele?.height}}><Image src={ele?.image} alt='sdf' fill /></div></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            <div className={`custom-prev-feature ${activeSlide === 0 && styles.disabled_arrow}`} ><SlArrowLeft /></div>
            <div className={`custom-next-feature ${activeSlide === 1 && styles.disabled_arrow}`} ><SlArrowRight /></div>
        </Swiper>
    )
}

export default EcstaticsFeature