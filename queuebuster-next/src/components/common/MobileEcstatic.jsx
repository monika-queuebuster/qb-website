import React, { useState } from 'react'
import styles from '../../styles/common/Ecstatic.module.css'
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);


const MobileEcstatic = ({ ecstatic }) => {
    const [showMore, setShowMore] = useState({ state: false, idx: 0 });
    const [activeSlide, setActiveSlide] = useState(0);

    return (

        <div>
            {
                ecstatic?.map((ele) => {
                    return (
                        <div className={styles.ecstatic_card} style={{ backgroundColor: ele?.bgColor, margin: "4rem 2rem" }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div className={styles.icon}><Image src={ele?.icon} alt='icon' fill /></div>
                                <div className={styles.tag_text} style={{ backgroundColor: ele?.tagBG }}>{ele?.tag}</div>
                            </div>
                            <div
                                style={{ height: showMore?.state && showMore?.idx === ele?.id ? ele?.mobileHeight : '9rem', overflow: 'hidden', transition: '1s' }}
                            >
                                <h4 className={styles.ecstatic_heading}>{ele?.title}</h4>
                                <p className={styles.ecstatic_desc}>
                                    {ele?.fullText}
                                </p>
                            </div>
                            <div>
                                <p className={`${styles.show_more}`} onClick={() => setShowMore({ state: (showMore.idx === ele?.id && showMore?.state) ? false : true, idx: ele?.id })}>{showMore.state && showMore.idx === ele?.id ? 'Show Less' : 'Show More'}</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}><div className={styles.image_container} style={{ height: ele?.mobileHeight }}><Image src={ele?.image} alt='sdf' fill /></div></div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MobileEcstatic