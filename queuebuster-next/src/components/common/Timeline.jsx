import React, { useState } from 'react'
import styles from '../../styles/common/Timeline.module.css';
import content from '../../language/ENGLISH.json';
import { inter_Bold } from "../common/Fonts";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Image from "next/image";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const Timeline = ({ mobileView }) => {
  const VALUES = ["2012", "2014", "2015", "2016", "2019", "2021", "2022", "2023",];
  const [activeSlide, setActiveSlide] = useState(0);

  const [value, setValue] = useState(7);


  const description = [
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_twelve_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/image+11.webp" alt="2012" fill /></div>
          <div className={styles.twenty_twelve_img2}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/Frame+28.webp" alt="2012" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Core team started <span className={styles.bold_text}>MapleGraph Solutions Pvt Ltd,</span> a software services company</p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_fourteen_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/MapleGraph-restaurant+1.webp" alt="2014" fill /></div>
          <div className={styles.twenty_fourteen_img2}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/android+1.webp" alt="2014" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Launched first in-house software product <span className={styles.bold_text}>MaplePOS</span>, an <span className={styles.bold_text}>Android based Restaurant POS</span> application</p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_fifteen_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/Mask+group.webp" alt="2015" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>MaplePOS, got acquired by <span className={styles.bold_text}>Zomato</span></p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_sixteen_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/div.webp" alt="2016" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Core team restarted entrepreneurial journey with <span className={styles.bold_text}>QueueBuster</span>, an Android based <span className={styles.bold_text}>B2B Super App</span></p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_nineteen_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/Pine+Genie+(2)+1.webp" alt="2019" fill /></div>
          <div className={styles.twenty_nineteen_img2}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/image+11+(1).webp" alt="2019" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Partnered with multiple payment companies like <span className={styles.bold_text}>Pinelabs, Paytm</span> etc. reached <span className={styles.bold_text}>1,000+ Merchants</span></p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_twentyone_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/Group+73404.webp" alt="2021" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Launched features like <span className={styles.bold_text}>Khata</span> and <span className={styles.bold_text}>Online Dukaan (eStore)</span> for SMBs and MSMEs</p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_twentytwo_img1}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/Frame+31.webp" alt="2022" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Raised <span className={styles.bold_text}>Series A round of $8.16 Mn</span></p>
        </div>
      </div>
    </>,
    <>
      <div className={styles.OurJourneyDiv}>
        <div className={styles.timeline_img}>
          <div className={styles.twenty_twentythree_img1}><Image src="/assets/AboutUs/timelinemap.png" alt="2023" fill /></div>
          <div className={styles.twenty_twentythree_img2}><Image src="/assets/AboutUs/license.webp" alt="75k + licenses" fill /></div>
          <div className={styles.twenty_twentythree_img3}><Image src="/assets/AboutUs/downloads.webp" alt="1l + downloads" fill /></div>
          <div className={styles.twenty_twentythree_img4}><Image src="/assets/AboutUs/merchants.webp" alt="65k + merchants" fill /></div>
        </div>
        <div className={styles.timeline_info}>
          <p>Reached <span className={styles.bold_text}>65,000+ Merchants</span></p>
        </div>
      </div>
    </>,
  ];

  return (
    <>
      <div>
        {
          description[activeSlide]
        }
      </div>

      <div className={styles.timeline_outer_conatiner}>
        <div style={mobileView && { width: "70rem" }}>
          <div className={styles.selected_year}
            style={mobileView ?
              { left: activeSlide === 0 ? '1%' : activeSlide === 1 ? '14%' : activeSlide === 2 ? '27.5%' : activeSlide === 3 ? '41%' : activeSlide === 4 ? '54.5%' : activeSlide === 5 ? '67.5%' : activeSlide === 6 ? '81%' : '94.5%' }
              :
              { left: activeSlide === 0 ? '0.5%' : activeSlide === 1 ? '14.5%' : activeSlide === 2 ? '28%' : activeSlide === 3 ? '41.5%' : activeSlide === 4 ? '55.5%' : activeSlide === 5 ? '69%' : activeSlide === 6 ? '83%' : '96.5%' }
            }>
            <Image src="/assets/AboutUs/timeline-logo.svg" alt="qb logo" fill /></div>
        </div>
        <div className={styles.timeline}>
          <div className={styles.blue_timeline}
            style={mobileView ?
              { width: activeSlide === 0 ? '6%' : activeSlide === 1 ? '20%' : activeSlide === 2 ? '33%' : activeSlide === 3 ? '47%' : activeSlide === 4 ? '60%' : activeSlide === 5 ? '73%' : activeSlide === 6 ? '87%' : '100%' }
              :
              { width: activeSlide === 0 ? '3.5%' : activeSlide === 1 ? '17.5%' : activeSlide === 2 ? '31%' : activeSlide === 3 ? '45%' : activeSlide === 4 ? '58.5%' : activeSlide === 5 ? '72%' : activeSlide === 6 ? '86%' : '100%' }
            }>
          </div>
          <div className={styles.grey_timeline}
            style={mobileView ?
              { width: activeSlide === 0 ? '94%' : activeSlide === 1 ? '80%' : activeSlide === 2 ? '67%' : activeSlide === 3 ? '53%' : activeSlide === 4 ? '40%' : activeSlide === 5 ? '27%' : activeSlide === 6 ? '12%' : '0%' }
              :
              { width: activeSlide === 0 ? '96.5%' : activeSlide === 1 ? '82.5%' : activeSlide === 2 ? '69%' : activeSlide === 3 ? '54%' : activeSlide === 4 ? '41.5%' : activeSlide === 5 ? '28%' : activeSlide === 6 ? '14%' : '0%' }
            }>
          </div>
        </div>
        <div className={styles.value_container}>
          {
            VALUES?.map((ele, idx) => {
              return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className={styles.timeline_years} onClick={() => setActiveSlide(idx)}>
                    <div className={styles.white_markers}
                      style={{
                        backgroundColor: activeSlide >= idx && '#2a6ab4'
                      }}>
                    </div>
                    {ele}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Timeline