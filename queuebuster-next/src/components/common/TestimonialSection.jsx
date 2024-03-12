import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/enterprise/desktopEnterprise.module.css'
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSection = ({ testimonialData, videoTestimonial }) => {

  return (
    <>
      <div style={{ marginBottom: '5rem' }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 18000,
            disableOnInteraction: false,
          }}
          speed={700}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="custom-testimonial-swiper"
        >
          {
            videoTestimonial?.map((ele) => {
              return (
                <SwiperSlide>
                  <div className={styles.v_testimonial_container}>
                    <iframe loading="lazy" width="60%" src={ele?.link} frameborder="0" allowfullscreen style={{ borderRadius: '20px', height: '40rem' }}></iframe>
                    <div className={styles.content_box}>
                      <p>{ele?.text}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className={styles.v_testimonial_info}>
                          <p>{ele?.name}</p>
                          <p>{ele?.designation}</p>
                          <p>{ele?.company}</p>
                        </div>
                        <div className={styles.qb_logo}>
                          <Image src='/assets/features/estore/Group 73285.svg' alt='' fill />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 18000,
            disableOnInteraction: false,
          }}
          speed={700}
          pagination={{ clickable: true }}
          className="custom-testimonial-swiper"
          modules={[Autoplay, Pagination]}
        >
          {
            testimonialData?.map((ele) => {
              return (
                <SwiperSlide>
                  <div className={styles.testimonial_card} style={{ backgroundColor: ele?.backgroundColor }}>
                    <div style={{height: '8rem', display: 'flex', alignItems: 'center'}}><div className={styles.testimonial_logo} style={{ width: ele?.width, height: ele?.height }}><Image src={ele?.icon} alt='company logo' fill /></div></div>
                    <p className={styles.testimonial_content}>{ele?.content}</p>
                    <div className={styles.testimonial_footer}>
                      <p className={styles.testimonial_name}>{ele?.name}</p>
                      <p className={styles.testimonial_designation}>{ele?.designation}</p>
                      <p className={styles.testimonial_company}>{ele?.company}</p>
                    </div>
                    <div className={styles.user_image}><Image src={ele?.testimonyImg} alt='user' fill /></div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </>
  )
}

export default TestimonialSection