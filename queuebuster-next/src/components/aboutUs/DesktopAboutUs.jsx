import React from 'react'
import styles from '../../styles/AboutUs/AboutUs.module.css';
import { ClientsArr1, contactInfoSection, investorsArr, leaders } from '@/constants/common';
import { MarqueeComponentHomePage } from '../qbStrap';
import content from '../../language/ENGLISH.json';
import Image from 'next/image';
import PersonalisedDemoBanner from '../common/PersonalisedDemoBanner';
import Timeline from '../common/Timeline';

const DesktopAboutUs = () => {
   const { commonMarqueTitle } = content;
   return (
      <div style={{ backgroundColor: "#fff" }}>
         <div className={styles.top_section}>
            <h1 className={styles.page_heading}>At The Heart Of <br /><span className={styles.bold_heading}>What We Do!</span></h1>
            <p className={styles.page_desc}>We are the industry standard for POS solutions meeting your business needs with tailored approach and 24*7 customer support.We are an all-in-one solution creating a tailored experience for your restaurant needs.</p>
         </div>
         <div className={styles.info_banner}>
            {contactInfoSection?.map((ele) => {
                  return (
                     <div className={styles.banner_element} style={{ backgroundColor: ele?.color }}>
                        <p className={styles.banner_icon_number}>{ele?.numbers}</p>
                        <p className={styles.banner_icon_name}>{ele?.name}</p>
                     </div>
                  )})}
         </div>
         <div className={styles.marquee_section}>
            <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
         </div>
         <div className={styles.who_we_are}>
            <div className={styles.section_heading}><h3>Who We Are</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <p className={styles.who_we_are_text}><span className={styles.bold_text}>QueueBuster</span>, founded in <span className={styles.bold_text}>2016</span> is India’s leading business super app. It is a powerful Android-based Mobile POS application for all kinds of businesses. From large format retail stores to small carts and kiosks, QueueBuster has everything that you need to run your <span className={styles.bold_text}>business with ease.</span> <br /><br />
               With features like <span className={styles.bold_text}>Billing, Inventory, Khata (Digital Ledger), Online Dukaan, Customers, and Loyalty,</span> it is the most sought-after solution for every business.
            </p>
            <div className={styles.colorful_boxes}>
               <div>
                  <h2>Our Mission</h2>
                  <p>Our mission at QueueBuster is to provide world-class software solutions that empower businesses of all sizes to streamline their operations, improve efficiency, and drive growth. We believe that our innovative, intuitive, and scalable product can help organizations across a wide range of industries to transform the way they work and thrive in the digital age.<br /><br />
                     We are committed to delivering exceptional value to our customers through ongoing product development, excellent customer support, and a deep understanding of their needs and challenges. Our ultimate goal is to help our customers succeed by providing them with the tools and resources they need to achieve their goals and achieve maximum productivity and profitability.</p>
               </div>
               <div>
                  <h2>What We Do Best</h2>
                  <p>At QueueBuster, we specialize in developing Android POS applications for small and medium-sized businesses in India. Our QueueBuster application simplifies daily operations and helps manage businesses more efficiently. With its customizable features, automated billing, and real-time reporting, it has everything you need to grow your business. We understand the unique needs of Indian businesses and have designed QueueBuster with those needs in mind. Our team of experts is always available to assist with any questions or technical issues, ensuring your business runs smoothly with QueueBuster.</p>
               </div>
            </div>
         </div>
         <div className={styles.timeline_section}>
            <div className={styles.section_heading}><h3>Our Journey</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <Timeline />
         </div>
         <div className={styles.leadership_section}>
            <div className={styles.section_heading}><h3>QueueBuster Leadership</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <div className={styles.blue_container}>
               <div>
                  <p>Merchants in today’s time are overwhelmed by a plethora of stand-alone applications for every small or big requirement of theirs. Unfortunately, none of those applications provide them with a holistic set of features to managetheir end-to-end operations effectively.<br /><br /> Merchants are forced to use multiple applications which decreases their efficiency even further. <span className={styles.bold_text}>With QueueBuster, merchants can manage their entire business operations with ease. Our aim is to reach at least 10 million merchants by the year 2025.</span></p>
                  <div className={styles.name_designation}>
                     <p className={styles.yellow_text}>Varun Tangri</p>
                     <p className={styles.light_text}>CEO, Founder</p>
                     <div className={styles.background_icon}><Image src="/assets/AboutUs/Path 24937.svg" fill /></div>
                  </div>
               </div>
               <div>
                  <div className={styles.right_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/about/varun-sir.webp" alt='about queuebuster' fill /></div>
               </div>
            </div>
            <div className={styles.leaders_grid}>
               {leaders?.map((ele, idx) => {
                  return (
                     <div key={ele?.id} className={styles.leaders_img_container} style={{ borderRight: idx === 4 || idx === 9 || idx === 10 ? "1px solid #ddf8fd" : "none", borderLeft: "1px solid #ddf8fd", borderTop: "1px solid #ddf8fd", borderBottom: idx === 5 || idx === 6 || idx === 8 || idx === 9 || idx === 7 ? "1px solid #ddf8fd" : "none" }}>
                        <div className={styles.leaders_img}><Image src={ele?.image} alt={ele?.altText} fill /></div>
                        <p className={styles.name}>{ele?.name}</p>
                        <p className={styles.designation}>{ele?.designation}</p>
                     </div>
                  )
               })}
            </div>
         </div>
         <div className={styles.investor_section}>
            <div className={styles.section_heading}><h3>Championed by Visionaries</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
               <div className={styles.investors_text_part}>
                  <p>QueueBuster has raised <span className={styles.bold_text}>INR 63.3 crore (~USD 8.16 million)</span> in a Series A funding round led by Chiratae Ventures, Omidyar Network India and Flourish Ventures. DMI Alternative Investment Fund and Unaprime Investment Advisors also participated in this round. With robust support from industry leaders, we’re committed to revolutionizing Indian Retail Sector through cutting-edge solutions and unparalleled dedication to our customers’ needs.</p>
               </div>
               <div className={styles.all_investors}>
                  {investorsArr?.map((ele, idx) => {
                     return (
                        <div key={ele?.id} style={{ padding: "5rem 2rem", display: 'flex', alignItems: "center", justifyContent: "center", borderTop: idx === 0 || idx === 1 || idx === 2 ? 'none' : "1px solid #ddf8fd", borderLeft: idx === 0 || idx === 3 ? 'none' : '1px solid #ddf8fd' }}>
                           <div className={styles.investor_images} style={{ height: ele?.height, width: ele?.width }}><Image src={ele?.img} alt={ele?.altText} fill /></div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
         <div className={styles.PD_section}>
            <PersonalisedDemoBanner />
         </div>
      </div>
   )
}
export default DesktopAboutUs