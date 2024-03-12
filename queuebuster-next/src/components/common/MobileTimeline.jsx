import React, { useState } from 'react'
import styles from '../../styles/common/MobileTimeline.module.css';
import content from '../../language/ENGLISH.json';
import { inter_Bold } from "../common/Fonts";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Image from "next/image";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const Timeline = () => {
  const { coreTeamStarted, mapleGraphSolutions, softwareServicesCompany, launchedFirstInhouse, maplePOS, androidBasedRestaurant, acquiredByZomato, teamRestartedEntrepreneurial, Android2BSuperApp, partneredWithPaymentCompanies, launchedFeatures, onlineDukaan, SMBAndMSM, seriesARound, merchants, reached, raised, khata } = content.timeline
  const VALUES = ["2012", "2014", "2015", "2016", "2019", "2021", "2022", "2023",];
  const { journey } = content.aboutUs;
  const { queueBuster } = content.pricing;
  const [activeSlide, setActiveSlide] = useState(0);

  const [value, setValue] = useState(7);


  const description = [
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {coreTeamStarted}
              <span className={inter_Bold.className}>
                {" "}
                {mapleGraphSolutions},{" "}
              </span>
              {softwareServicesCompany}
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {launchedFirstInhouse}
              <span className={inter_Bold.className}> {maplePOS}, </span> {androidBasedRestaurant}
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              <span className={inter_Bold.className}> {maplePOS}, </span>{acquiredByZomato}
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {teamRestartedEntrepreneurial}{" "}
              <span className={inter_Bold.className}> {queueBuster}, </span>{Android2BSuperApp}
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {partneredWithPaymentCompanies}
              <span className={inter_Bold.className}> 1,000+ {merchants} </span>
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {launchedFeatures}
              <span className={inter_Bold.className}> {khata} </span>and
              <span className={inter_Bold.className}>
                {" "}
                {onlineDukaan}{" "}
              </span>
              {SMBAndMSM}
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {raised}
              <span className={inter_Bold.className}>
                {" "}
                {seriesARound}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div>
          <div><div style={{ width: '37.48rem', height: '24.5rem', position: 'relative' }}><Image src="/assets/fullTeam.webp" alt="full team" fill /></div></div>
          <div>
            <p>
              {reached}
              <span className={inter_Bold.className}> 65,000+ {merchants} </span>
            </p>
          </div>
        </div>
      </div>
    </>,
  ];

  return (
    <>
      <h3
        style={{ textAlign: "center", fontSize: "2.92rem" }}
        className={inter_Bold.className}
      >
        {journey}
      </h3>
      <div className="text-center">{description[value]}</div>
      <div className={styles.timeline_outer_container}>
        <div className={styles.timeline_inner_container}>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              navigation={{
                prevEl: '.custom-prev-feature',
                nextEl: '.custom-next-feature',
              }}
              className="custom-timeline-swiper"
              onSlideChange={(e) => setActiveSlide(e.activeIndex)}
            >

              {
                VALUES?.map((ele, idx) => {
                  return (
                    <SwiperSlide>
                      <div>
                        <div className={`${styles.events} ${value === idx ? styles.current_event : styles.other_event}`} onClick={() => setValue(idx)}></div>
                        <span style={{ position: 'relative', right: '1rem' }}>{ele}</span>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              <div className={`custom-prev-feature ${activeSlide === 0 && styles.disabled_arrow}`} ><SlArrowLeft /></div>
              <div className={`custom-next-feature ${activeSlide === 8 && styles.disabled_arrow}`} ><SlArrowRight /></div>
            </Swiper>
        </div>
      </div>
    </>
  )
}

export default Timeline