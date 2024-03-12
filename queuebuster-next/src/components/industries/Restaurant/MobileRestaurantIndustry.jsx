import React, { useState } from 'react'
import styles from '../../../styles/Industries/restaurant/MobileRestaurant.module.css';
import { BlackCustomButton, Iframe, MarqueeComponentHomePage, TransparentCustomButton } from '../../qbStrap';
import Image from 'next/image';
import { ratingInfo, ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import { restaurantEcstatic, restaurantOutletTypes, glimpses, restaurantFAQ, features } from '@/constants/industry';
import IndustryFeatures from '../../common/IndustryFeatures';
import GlimpsesComponent from '../../common/GlimpsesComponent';
import OutletTypes from '../../common/OutletTypes';
import BlueFoldBanner from '../../common/BlueFoldBanner';
import content from '../../../language/ENGLISH.json'
import GiveItTryMobile from '../../Industry/GiveItTry_mobile';
import FAQmobile from '../../Industry/FAQ_mobile';
import MobilePDBanner from '../../common/MobilePDBanner';
import MobileTestimonialSection from '../../common/MobileTestimonialSection';
import MobileEcstatic from '../../common/MobileEcstatic';
import { useRouter } from 'next/router';
// import ReactTyped from 'react-typed';
import TrustFactor from '@/components/common/TrustFactor';
import VerificationPopup from '@/components/modals/VerificationPopup';
import Verification from '@/components/modals/Verification';

const MobileRetailIndustry = () => {
   const { commonMarqueTitle } = content
   const { testimonialHeadText } = content.testimonial;
   const { giveitTryHeading, giveitTryDesc } = content.retail;
   const { pageHeading, typingText1, typingText2, typingText3, typingText4, pageDesc, ecStaticHeading, restaurantBusiness, blueFoldHeading, blueFoldDesc, videoSectionHeading, faqHeading } = content.restaurantIndustry
   const { outletHeading, industryQqPOSHeading, glimpsesHeading, weAreText, moreThanA, broaderSolution } = content.commonIndustryHeading
   const [demoModal, setDemoModal] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!")
   const router = useRouter();
   const [caseStudyModal, setCaseStudyModal] = useState(false);
   return (
      <>
         <Verification isOpen={caseStudyModal} closeModal={() => setCaseStudyModal(false)} mobileView={true} btnText="Download" />
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} mobileView={true} />
         <div className={styles.hero_section}>
            <div className={styles.image_part}>
               <div className={styles.hero_image_container}><Image src='/assets/industry/restaurant/221124.png' alt='restaurant hero image' fill /></div>
            </div>
            <div className={styles.text_part}>
               <h1>
                  <br />
                  <span className={styles.black_text}>{pageHeading} <br /></span>
                  {/* <span className={styles.blue_text}><ReactTyped strings={[typingText1, typingText2, typingText3, typingText4]} typeSpeed={200} loop /></span> */}
               </h1>
               <p className={styles.page_desc}>{pageDesc}</p>
               <div style={{ display: "flex", flexDirection: "column" }}>
                  <BlackCustomButton text="Get Free Demo" style={{ bordeRadius: '0.3rem', padding: '0 2rem', marginTop: '2.5rem' }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                  <TransparentCustomButton text="Contact Sales" style={{ bordeRadius: '0.3rem', padding: '0 2rem', marginTop: '2.5rem' }} onClick={() => router.push("/contact-sales")} />
               </div>
               <div className={styles.ratings}>
                  {ratingInfo?.map((ele) => {
                     return (
                        <div className={styles.rating_container}>
                           <div className={styles.company_img_container}>
                              <Image src={ele?.companyImg} alt='company logo' fill />
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <span className={styles.element_rating}>{ele?.rating}</span><span className={styles.outof_rating}>/5</span>
                              <div className={styles.ratings_img_container}>
                                 <Image src={ele?.ratingImg} alt='ratings' fill />
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
         <div className={styles.marquee_section}>
            <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '18rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
         </div>
         <div className={styles.ecstatic_section}>
            <div className={styles.section_heading}><h3>{ecStaticHeading}</h3><div className={styles.heading_stroke} style={{ width: '18rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
            <MobileEcstatic ecstatic={restaurantEcstatic} />
         </div>
         <div className={styles.features_section}>
            <div className={styles.section_heading}><h3>{industryQqPOSHeading}</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <IndustryFeatures features={features} />
         </div>
         <div className={styles.glimpses_section}>
            <div className={styles.section_heading}><h3>{glimpsesHeading}</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <GlimpsesComponent glimpses={glimpses} setCaseStudyModal={setCaseStudyModal} caseStudyModal={caseStudyModal} />
         </div>
         <div className={styles.outlet_section}>
            <div className={styles.section_heading}><h3>{outletHeading}</h3><div className={styles.heading_stroke} style={{ width: '18rem' }}><Image src='/assets/industry/restaurant/features_hl 4.svg' alt='stroke' fill /></div></div>
            <OutletTypes outletTypes={restaurantOutletTypes} />
         </div>
         <div className={styles.blue_fold_section}>
            <BlueFoldBanner
               img={'/assets/industry/restaurant/blue-fold.webp'}
               imgHeight='24rem'
               imgWidth='35rem'
               heading={blueFoldHeading}
               desc={blueFoldDesc}
               bannerHeight={"62rem"}
               setDemoModal={setDemoModal}
               setHeading={setHeading}
            />
         </div>
         <div className={styles.testimonial_section}>
            <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke} style={{ width: '18rem' }}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
            <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
         </div>
         <div className={styles.give_it_try_section}>
            <GiveItTryMobile
               heading={giveitTryHeading}
               description={giveitTryDesc}
               image={"/assets/Retail/retailMarchant.webp"}
               styles={{ bottom: "-4.2rem", right: "-16.5rem", height: "54rem", width: '72rem' }}
               containerStyles={{ margin: "0 7rem 8.5rem 7rem", background: 'none' }}
            />
         </div>
         <TrustFactor />
         <div style={{ margin: '4rem 0rem' }}>
            <FAQmobile FaqTableData={restaurantFAQ} width={"auto"} heading={faqHeading} />
         </div>
         <div className={styles.demo_banner_section}>
            <MobilePDBanner setDemoModal={setDemoModal} setHeading={setHeading} />
         </div>
      </>
   )
}

export default MobileRetailIndustry