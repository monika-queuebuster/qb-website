import React, { useState } from 'react'
import { BlackCustomButton, GiveItTry, MarqueeComponentHomePage, TransparentCustomButton } from '../../qbStrap';
import Image from 'next/image';
import { ratingInfo, ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import { reatilEcstatic, retailOutletTypes, glimpses, retailFAQ, features } from '@/constants/industry';
import EcstaticsFeature from '../../common/EcstaticsFeature';
import IndustryFeatures from '../../common/IndustryFeatures';
import GlimpsesComponent from '../../common/GlimpsesComponent';
import OutletTypes from '../../common/OutletTypes';
import BlueFoldBanner from '../../common/BlueFoldBanner';
import TestimonialSection from '../../common/TestimonialSection';
import content from '../../../language/ENGLISH.json'
import FrequentQuestions from '../../homePage/FrequentQuestions';
import PersonalisedDemoBanner from '../../common/PersonalisedDemoBanner';
import styles from '../../../styles/Industries/retail/DesktopRetail.module.css';
import ReactTyped from "react-typed";
import { useRouter } from 'next/router';
import TrustFactor from '@/components/common/TrustFactor';
import Verification from '@/components/modals/Verification';
import VerificationPopup from '@/components/modals/VerificationPopup';

const RetailIndustry = () => {
   const { testimonialHeadText } = content.testimonial;
   const { giveitTryHeading, giveitTryDesc } = content.retail;
   const { commonMarqueTitle } = content
   const { outletHeading, industryQqPOSHeading, glimpsesHeading, weAreText, moreThanA } = content.commonIndustryHeading
   const { pageHeading, typingText1, typingText2, typingText3, pageDesc, ecStaticHeading, retailBusiness, blueFoldHeading, blueFoldDesc, videoSectionHeading, faqHeading } = content.retailIndustry

   const router = useRouter();
   const [caseStudyModal, setCaseStudyModal] = useState(false);
   const [demoModal, setDemoModal] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!")

   return (
      <>
         <Verification isOpen={caseStudyModal} closeModal={() => setCaseStudyModal(false)} btnText="Download" />
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
         <div className={styles.hero_section}>
            <div className={styles.text_part}>
               <h1>
                  <span className={styles.black_text}>{pageHeading}</span><br />
                  <span className={styles.blue_text}><ReactTyped strings={[typingText1, typingText2, typingText3]} typeSpeed={200} loop /></span>
               </h1>
               <p className={styles.page_desc}>{pageDesc}</p>
               <div style={{ display: "flex", gap: "2rem" }}>
                  <BlackCustomButton text="Get Free Demo" style={{ bordeRadius: '0.3rem', padding: '0 2rem', marginTop: '2.5rem' }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                  <TransparentCustomButton text="Contact Sales" style={{ bordeRadius: '0.3rem', padding: '0 2rem', marginTop: '2.5rem' }} onClick={() => router.push("/contact-sales")} />
               </div>
               <div className={styles.ratings}>
                  {
                     ratingInfo?.map((ele) => {
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
                     })
                  }
               </div>
            </div>
            <div className={styles.image_part}>
               <div className={styles.hero_image_container}><Image src='/assets/industry/retail/hero-img.webp' alt='restaurant hero image' fill /></div>
            </div>
         </div>
         <div className={styles.marquee_section}>
            <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
         </div>
         <div className={styles.ecstatic_section}>
            <div className={styles.ecstatic_header}><h3>{ecStaticHeading}</h3><div className={styles.ecstatic_stroke}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
            <EcstaticsFeature ecstatic={reatilEcstatic} />
         </div>
         <div className={styles.features_section}>
            <div className={styles.features_header}><h3>{industryQqPOSHeading}</h3><div className={styles.features_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <IndustryFeatures features={features} cardMaxHeight="25rem" />
         </div>
         <div className={styles.glimpses_section}>
            <div className={styles.glimpses_header}><h3>{glimpsesHeading}</h3><div className={styles.glimpses_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
            <GlimpsesComponent glimpses={glimpses} setCaseStudyModal={setCaseStudyModal} caseStudyModal={caseStudyModal} />
         </div>
         <div className={styles.outlet_section}>
            <div className={styles.outlet_header}><h3>{outletHeading}</h3><div className={styles.outlet_stroke}><Image src='/assets/industry/restaurant/features_hl 4.svg' alt='stroke' fill /></div></div>
            <OutletTypes outletTypes={retailOutletTypes} />
         </div>
         <div className={styles.blue_fold_section}>
            <BlueFoldBanner
               img={'/assets/industry/retail/blue-fold.webp'}
               imgHeight='40rem'
               imgWidth='62rem'
               heading={blueFoldHeading}
               desc={blueFoldDesc}
               setDemoModal={setDemoModal}
               setHeading={setHeading}
            />
         </div>
         <div className={styles.testimonial_section}>
            <div className={styles.testimonial_header}><h3>{testimonialHeadText}</h3> <div className={styles.testimonial_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
            <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
         </div>
         <div className={styles.give_it_try_section}>
            <GiveItTry
               heading={giveitTryHeading}
               description={giveitTryDesc}
               image={"/assets/Retail/retailMarchant.webp"}
               styles={{ bottom: "-4.2rem", right: "-16.5rem", height: "54rem", width: '72rem' }}
               containerStyles={{ margin: "0 7rem 8.5rem 7rem", background: 'none' }}
            />
         </div>
         <TrustFactor />
         <FrequentQuestions FaqTableData={retailFAQ} heading={faqHeading} />
         <div className={styles.demo_banner_section}>
            <PersonalisedDemoBanner setDemoModal={setDemoModal} setHeading={setHeading} />
         </div>
      </>
   );
};
export default RetailIndustry;
