import React, { useState } from 'react';
import styles from '../../styles/common/GlimpsesComponent.module.css'
import Image from 'next/image';
import { BlackCustomButton } from '../qbStrap';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Grow from 'public/assets/industry/restaurant/Grow';
import { useRouter } from 'next/router';
import Verification from '../modals/Verification';

SwiperCore.use([Navigation]);

const GlimpsesComponent = ({ glimpses, setCaseStudyModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
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
          glimpses?.map((ele) => {
            return (
              <SwiperSlide>
                <div className={styles.glimpses_container} style={{ backgroundColor: ele?.bgColor }}>
                  <div className={styles.left_side}>
                    <div className={styles.company_logo} style={{ height: ele?.companyLogoHeight, width: ele?.companyLogoWidth, marginBottom: ele?.logoMarginBottom }}><Image src={ele?.companyLogo} alt={ele?.altText} fill /></div>
                    <h4 className={styles.container_title}>{ele?.title}</h4>
                    <p className={styles.container_desc}>{ele?.desc}</p>
                    <BlackCustomButton text='Download Case Study' style={{ padding: '0 2rem' }}
                      onClick={() => setCaseStudyModal(true)}
                    />
                  </div>
                  <div className={styles.right_side}>
                    <div className={styles.tile1}>
                      <div className={styles.title1_text}>
                        <p className={styles.numeric_value}>{ele?.blackTile1?.digit}+</p>
                        <p className={styles.tile1_desc}>{ele?.blackTile1?.content}</p>
                      </div>
                      <div>
                        <div className={styles.arrow_img}><Grow color={ele?.growColor} /></div>
                        <div className={styles.bars_img}><Image src='/assets/industry/restaurant/bar_design.svg' alt='background design' fill /></div>
                      </div>
                    </div>
                    <div className={styles.tile2}>
                      <p className={styles.words} style={{ color: ele?.textColor }}>{ele?.blackTile2?.content}</p>
                      <div className={styles.name_designtaion}>
                        <p className={styles.name}>{ele?.blackTile2?.name}</p>
                        <p className={styles.info}>{ele?.blackTile2?.info1}</p>
                        <p className={styles.info}>{ele?.blackTile2?.info2}</p>
                      </div>
                      <div className={styles.semicircle_design}><Image src='/assets/industry/restaurant/semicircle_design.svg' alt='semi circle' fill /></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        <div className={`custom-prev-feature ${activeSlide === 0 && styles.disabled_arrow}`} ><SlArrowLeft /></div>
        <div className={`custom-next-feature ${activeSlide === 5 && styles.disabled_arrow}`} ><SlArrowRight /></div>
      </Swiper>
    </>
  )
}

export default GlimpsesComponent