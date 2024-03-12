import React, { useEffect, useState } from 'react'
import styles from '../../../styles/retail/footwear/MobileFootwear.module.css';
import Image from 'next/image';
// import ReactTyped from 'react-typed';
import { BlackCustomButton, MarqueeComponentHomePage, WhiteCustomButton } from '@/components/qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import content from '../../../language/ENGLISH.json'
import OutletFeatures from '@/components/common/OutletFeatures';
import { gymFAQ, gymFeatures, gymOtherFeatures } from '@/constants/outlets';
import MobileTestimonialSection from '@/components/common/MobileTestimonialSection';
import FAQmobile from '@/components/Industry/FAQ_mobile';
import MobilePDBanner from '@/components/common/MobilePDBanner';
import VerificationPopup from '@/components/modals/VerificationPopup';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const MobileGym = () => {
  const { commonMarqueTitle } = content
  const { testimonialHeadText } = content.testimonial;
  const [readMore, setReadMore] = useState(false);
  const { heroDescheroHeading, heroDesc } = content.footwear
  const [demoModal, setDemoModal] = useState(false);
  const [formHeading, setHeading] = useState("Book your free demo now!")

  return (
    <div>
      <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
      <div className={styles.hero_stack_container}>
        <div className={styles.hero_stack1} style={{ height: '50rem' }}></div>
        <div className={styles.hero_stack2} style={{ height: '50rem' }}></div>
        <div className={styles.hero_section} style={{ height: '50rem' }}>
          <div className={styles.hero_text_container}>
            <h1>
              <span className={styles.heading1}>Gym & Fitness Center Billing Software for</span><br />
              {/* <span className={styles.heading2}><ReactTyped strings={["Crossfit Studios", "Zumba Centers", "Yoga Classes"]} typeSpeed={200} loop /></span> */}
            </h1>
            <p className={styles.hero_desc}>QueueBuster Gym & Fitness Center Billing Software simplifies the process of subscriptions and bookings for customers. With this Android-based solution, customers can easily sign up for memberships and book classes seamlessly. QB POS allows staff to efficiently manage class schedules, keep track of attendance, and process payments, which streamlines operations for the gym or fitness center.</p>
            <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
          </div>
        </div>
      </div>

      <div className={styles.marquee_section}>
        <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
        <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
      </div>

      <div className={styles.features_section}>
        <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
        <OutletFeatures features={gymFeatures} mobileView={true} setDemoModal={setDemoModal} setHeading={setHeading} />
      </div>

      <div className={styles.other_features_section}>
        <div className={styles.text_side}>
          <div className={styles.section_heading}><h3>Other Key Features for QueueBuster Gym & Fitness Center Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
          <p className={styles.other_features_Desc}>The QueueBuster Gym & Fitness Center Billing Software offers an array of key features that facilitate streamlined billing processes and enhanced customer experiences. These features include automated billing and invoicing capabilities, simplified membership management, and seamless integration with other gym management tools.
          </p>
        </div>
        <div className={styles.box_side}>
          {
            gymOtherFeatures?.map((ele, idx) => {
              return (
                <div key={ele?.id} className={`${styles.other_features}`} style={{ gridColumnStart: idx === 6 && "2" }} >
                  <div className={styles.icon}><Image src={ele?.icon} alt={ele?.title} fill /></div>
                  <p>{ele?.title}</p>
                  <p className={styles.description}>{ele?.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div style={{ margin: "3rem 2rem" }}>
        <ThreeStepForm mobileView={true} />
      </div>

      <div className={styles.testimonial_section}>
        <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
        <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
      </div>

      <FAQmobile FaqTableData={gymFAQ} width={"auto"} heading={"FAQs for Gym & Fitness Center Billing Software"} />

      <div className={styles.demo_banner_section}>
        <MobilePDBanner />
      </div>
    </div>
  )
}

export default MobileGym