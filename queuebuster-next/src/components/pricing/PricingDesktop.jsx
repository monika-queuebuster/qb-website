import React, { useState } from 'react';
import styles from '../../styles/pricing/pricingDesktop.module.css';
import content from '../../language/ENGLISH.json';
import { BlackCustomButton, MarqueeComponentHomePage, TransparentCustomButton } from '../qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial, pricingFAQs } from '@/constants/common';
import Image from 'next/image';
import PricingPlan from './PricingPlan';
import EnterprisePlan from './EnterprisePlan';
import InfoBanner from '../enterprise/InfoBanner';
import TestimonialSection from '../common/TestimonialSection';
import FrequentQuestions from '../homePage/FrequentQuestions';
import TrustFactor from '../common/TrustFactor';
import HeroSectionAnnual from './HeroSectionAnnual';
import HeroSectionEnterprise from './HeroSectionEnterprise';
import PersonalisedDemoBanner from '../common/PersonalisedDemoBanner';
import VerificationPopup from '../modals/VerificationPopup';
import { useRouter } from 'next/router';

const PricingDesktop = () => {
   const { commonMarqueTitle } = content;
   const { testimonialHeadText } = content.testimonial;
   const { pricingHeadingP1, pricingHeadingP2, pricingDesc, pricingTableHeading, faqHeading } = content.pricing

   const [demoModal, setDemoModal] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!")
   const [formDesc, setFormDesc] = useState("Share your details, and let us craft the perfect package and price tailored just for you")

   const router = useRouter();

   return (
      <>
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} formDesc={formDesc} />
         <div className={styles.hero_section}>
            <div className={styles.text_container}>
               <h1 className={styles.hero_section_heading}>{pricingHeadingP1} <br /><span className={styles.blue_text}> {pricingHeadingP2}</span></h1>
               <div style={{ marginTop: '2rem' }}>
                  <p className={styles.hero_section_point}>{pricingDesc}</p>
               </div>
               <div style={{ marginTop: '3rem', display: "flex", gap: "2rem", justifyContent: "center", marginBottom: "5rem" }}>
                  <BlackCustomButton text="Request a Quote" style={{ padding: "0 3rem" }} onClick={()=> (setDemoModal(true), setHeading("Ready to Elevate your Business?"), setFormDesc("Share your details, and let us craft the perfect package and price tailored just for you"))} />
               </div>
            </div>
            {/* <div className={styles.hero_img_section}>
               <HeroSectionAnnual textSize='1.5rem' />
               <HeroSectionEnterprise textSize='1.5rem' />
            </div> */}
         </div>
         <div id="pricingTable" className={styles.plan_section}>
            <div className={styles.section_header}><h2 className={styles.section_heading}>{pricingTableHeading}</h2> <div className={styles.section_stroke}><Image src='/assets/strokes_svg/features_hl2.svg' alt='features' fill /></div></div>
            <PricingPlan setDemoModal={setDemoModal} setHeading={setHeading} />
         </div>
         <div className={styles.section_two}>
            <div className={styles.section_header}><h2 className={styles.section_heading}>{commonMarqueTitle}</h2> <div className={styles.section_stroke}><Image src='/assets/strokes_svg/features_hl2.svg' alt='features' fill /></div></div>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
         </div>
         <div className={styles.enterprise_plan_section}>
            <EnterprisePlan />
         </div>
         <InfoBanner />

         <div className={styles.testimonial_section}>
            <div className={styles.section_header}><h3 className={styles.section_heading}>{testimonialHeadText}</h3> <div className={styles.section_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
            <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
         </div>

         {/* <TrustFactor /> */}

         <FrequentQuestions FaqTableData={pricingFAQs} heading={faqHeading} />

         <div className={styles.demo_banner_section}>
            <PersonalisedDemoBanner />
         </div>
      </>
   )
}

export default PricingDesktop