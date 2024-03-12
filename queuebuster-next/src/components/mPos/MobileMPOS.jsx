import React, { useState } from 'react'
import styles from '../../styles/mPOS/MobileMPOS.module.css';
import Image from 'next/image';
import { BlueCustomButton, Iframe, MarqueeComponentHomePage } from '../qbStrap';
import OutletTypes from '../common/OutletTypes';
import content from '../../language/ENGLISH.json';
import { ratingInfo, ClientsArr1, testimonialData, videoTestimonial, mPosFAQ } from '@/constants/common';
import { mposFeature, workingStructure, features } from '@/constants/mpos';
import BlueFoldBanner from '../common/BlueFoldBanner';
import IndustryFeatures from '../common/IndustryFeatures';
import { retailOutletTypes } from '@/constants/industry';
import MobileTestimonialSection from '../common/MobileTestimonialSection';
import GiveItTryMobile from '../Industry/GiveItTry_mobile';
import FAQmobile from '../Industry/FAQ_mobile';
import MobilePDBanner from '../common/MobilePDBanner';
import { useRouter } from 'next/router';
// import ReactTyped from 'react-typed';
import TrustFactor from '../common/TrustFactor';
import VerificationPopup from '../modals/VerificationPopup';

const MobileMPOS = () => {
  const { commonMarqueTitle } = content
  const { testimonialHeadText } = content.testimonial;
  const { giveitTryHeading, giveitTryDesc } = content.retail;
  const { pageHeading, pageDesc, typewritterText1, typewritterText2, typewritterText3, workHeading, moreThanPOS, allInOneSoln, otherFeatures, businessWithQB, weAre, moreThan, pos, completeBillingMachine, otherOutletTypes, blueFoldHeading, blueFoldDesc, faqHeading } = content.mpos
  const router = useRouter()

  const [demoModal, setDemoModal] = useState(false);
  const [formHeading, setHeading] = useState("Book your free demo now!")

  const [step, setStep] = useState({
    title: 'Easy Setup',
    img: '/assets/mPOS/easy-setup.webp',
    imgHeight: '40rem',
    imgWidth: '35rem',
  });
  return (
    <>
      <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
      <div className={styles.hero_section}>
        <div className={styles.image_container}>
          <div className={styles.hero_img}><Image src='/assets/mPOS/hero-img.webp' alt='mPOS hero img' fill /></div>
        </div>
        <div className={styles.text_container}>
          {/* <h1 className={styles.hero_heading}>{pageHeading} <br /><span className={styles.blue_text}><ReactTyped strings={[typewritterText1, typewritterText2, typewritterText3]} typeSpeed={200} loop /></span></h1> */}
          <p className={styles.hero_content}>{pageDesc}</p>
          <BlueCustomButton text='Get Started' style={{ padding: '0 2rem' }} onClick={() => router.push('/get-free-demo')} />
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
      </div>
      <div className={styles.section_two}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><h2 className={styles.section_two_heading}>{commonMarqueTitle}</h2> <div className={styles.clients_stroke}><Image src='/assets/strokes_svg/features_hl.svg' alt='features' fill /></div></div>
        <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
      </div>
      <div className={styles.mpos_features}>
        {
          mposFeature?.map((ele) => {
            return (
              <div key={ele?.id} className={styles.mpos_card} style={{ backgroundColor: ele?.bgColor }}>
                <div className={styles.colored_bg} style={{ backgroundColor: ele?.imgBg }}><div className={styles.feature_img} style={{ height: ele?.MimgHt, width: ele?.MimgWt }}><Image src={ele?.img} alt='retail features' fill /></div></div>
                <div className={styles.feature_text}>
                  <h3>{ele?.heading}</h3>
                  <p>{ele?.desc}</p>
                  <div className={styles.feature_point}>
                    {
                      ele?.featurePoint?.map((point) => {
                        return (
                          <div style={{ borderLeft: `2px solid ${ele?.imgBg}` }}>{point}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.working_section}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><h2 className={styles.working_section_heading}>{workHeading}</h2> <div className={styles.work_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='features' fill /></div></div>
        <div className={styles.work_container}>
          <div className={styles.working_img_container}>
            <div style={{ height: step?.imgHeight, width: step?.imgWidth, position: 'relative' }}><Image src={step?.img} alt='' fill /></div>
          </div>
          <div className={styles.working_content}>
            <h4>{moreThanPOS}</h4>
            <p>{allInOneSoln}</p>
            <div style={{ display: 'flex', marginTop: '3rem' }}>
              <div className={styles.working_timeline}>
                {
                  workingStructure?.map((ele) => {
                    return (
                      <div key={ele?.id} onClick={() => setStep({ title: ele?.title, img: ele?.img, imgHeight: ele?.MimgHt, imgWidth: ele?.MimgWt })}>
                      </div>
                    )
                  })
                }
              </div>
              <div>
                {
                  workingStructure?.map((ele) => {
                    return (
                      <div key={ele?.id} className={`${ele?.title === step?.title ? styles.timeline_display : styles.timeline_content}`}>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                          {
                            step?.title != ele?.title ?
                              <div className={styles.inner_icon}><Image src={ele?.icon2} alt='easy steps' fill /></div>
                              : <div className={styles.step_icon}><Image src={ele?.icon} alt='easy steps' fill /></div>
                          }
                          <div>
                            <h4 onClick={() => setStep({ ...step, title: ele?.title, img: ele?.img, imgHeight: ele?.imgHt, imgWidth: ele?.imgWt })}>{ele?.title}</h4>
                            <p className={`${step?.title != ele?.title && styles.hide}`}>{ele?.desc}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features_section}>
        <div className={styles.features_header}><h3>{otherFeatures}</h3><div className={styles.features_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
        <IndustryFeatures features={features} mobileView={true} />
      </div>
      <div className={styles.video_section}>
        <div className={styles.video_header}><h3>{businessWithQB}</h3><div className={styles.video_stroke}><Image src='/assets/industry/restaurant/features_hl 3.svg' alt='stroke' fill /></div></div>
        <div className={styles.iframe_container}>
          <Iframe
            loading="lazy"
            videoUrl={"https://www.youtube.com/embed/SwfQim4t9HU"}
            iframeWidth={"100%"}
            iframeHeight={"22rem"}
            iframeMargin={'0'}
            titleStyle={{ padding: '0' }}
          />
          <div className={styles.iframe_left_banner}>
            <p><p className={styles.large_text}>{weAre}</p> {moreThan} <span className={styles.yellow_text}>{pos}</span> {completeBillingMachine}</p>
            <div className={styles.qb_img_container}><Image src='/assets/features/estore/Group 73285.svg' alt='schedule demo' fill /></div>
          </div>
        </div>
      </div>

      <div className={styles.outlet_section}>
        <div className={styles.outlet_header}><h3>{otherOutletTypes}</h3><div className={styles.outlet_stroke}><Image src='/assets/industry/restaurant/features_hl 4.svg' alt='stroke' fill /></div></div>
        <OutletTypes outletTypes={retailOutletTypes} />
      </div>

      <div className={styles.blue_fold_section}>
        <BlueFoldBanner
          img={'/assets/mPOS/blue-fold.webp'}
          imgHeight='24rem'
          imgWidth='32rem'
          heading={blueFoldHeading}
          desc={blueFoldDesc}
          setDemoModal={setDemoModal}
          setHeading={setHeading}
        />
      </div>

      <div className={styles.testimonial_section}>
        <div className={styles.testimonial_header}><h3>{testimonialHeadText}</h3> <div className={styles.testimonial_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
        <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
      </div>

      <div className={styles.give_it_try_section}>
        <GiveItTryMobile
          heading={giveitTryHeading}
          description={giveitTryDesc}
          image={"/assets/Retail/retailMarchant.webp"}
          styles={{ bottom: "-4.2rem", right: "-16.5rem", height: "54rem", width: '42rem' }}
          containerStyles={{ margin: "0 7rem 8.5rem 7rem", background: 'none' }}
        />
      </div>

      <TrustFactor />

      <FAQmobile FaqTableData={mPosFAQ} width={"auto"} heading={faqHeading} />

      <div className={styles.demo_banner_section}>
        <MobilePDBanner setDemoModal={setDemoModal} setHeading={setHeading} />
      </div>

    </>
  )
}

export default MobileMPOS