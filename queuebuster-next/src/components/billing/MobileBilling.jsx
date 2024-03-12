import React, { useState } from 'react'
import styles from '../../styles/billing/MobileBilling.module.css'
import ReactTyped from 'react-typed'
import { BlackCustomButton, BlueCustomButton, MarqueeComponentHomePage, TransparentCustomButton, WhiteCustomButton } from '../qbStrap'
import { ratingInfo, ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import Image from 'next/image';
import { billing, billingFAQ, billingHighlights, billingBanner } from '../../constants/features'
import Link from 'next/link';
import NewIndustryCards from '../common/NewIndustryCards';
import FAQmobile from '../Industry/FAQ_mobile';
import GiveItTryMobile from '../Industry/GiveItTry_mobile';
import MobilePDBanner from '../common/MobilePDBanner';
import content from '../../language/ENGLISH.json'
import MobileTestimonialSection from '../common/MobileTestimonialSection';
import { useRouter } from 'next/router';
import VerificationPopup from '../modals/VerificationPopup';
import TrustFactor from '../common/TrustFactor';

const MobileBilling = () => {

  const { commonMarqueTitle } = content
  const { testimonialHeadText } = content.testimonial
  const { giveitTryHeading, giveitTryDesc } = content.retail
  const { billingPageHeading, billingTypingText1, billingTypingText2, billingTypingText3, billingTypingText4, billingPageDesc, activeLicences, invoiceGenerated, EnablingAutomation, industriesWeServe, otherHighlights, FAQBilling } = content.features
  const router = useRouter();
  const [demoModal, setDemoModal] = useState(false);
  const [formHeading, setHeading] = useState("Book your free demo now!")

  return (
    <>
      <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
      <div className={styles.section_one}>
        <div className={styles.left_container}>
          <h1>
            <span className={styles.black_text}>{billingPageHeading}</span> <br />
            <span className={styles.blue_text}><ReactTyped strings={[billingTypingText1, billingTypingText2, billingTypingText3, billingTypingText4]} typeSpeed={300} loop /></span>
          </h1>
          <div className={styles.right_container}>
            <div className={styles.section1_image_container}>
              <Image src='https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/inventory/billing/billing-hero-img.webp' alt='billing hero image' fill />
            </div>
          </div>
          <p className={styles.page_subheading}>{billingPageDesc}</p>
          <div style={{ display: 'flex', flexDirection: "column", gap: "2rem" }}>
            <BlackCustomButton text='Get Free Demo' styles={{ backgroundColor: '#2A6AB4', color: '#fff', border: 'none', width: '100%' }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
            <TransparentCustomButton text="Contact Sales" style={{ padding: "0 2rem", width: "100%" }} onClick={() => router.push('/contact-sales')} />
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
      </div>

      <div className={styles.section_two}>
        <h2 className={styles.section_two_heading}>{commonMarqueTitle}</h2>
        <MarqueeComponentHomePage ClientsArr={ClientsArr1} style={{ backgroundColor: "#fff" }} />
      </div>

      <div className={styles.section_three}>
        {
          billing?.map((ele, idx) => {
            return (
              <div key={ele?.id} className={styles.section_three_containers}>
                <div style={{ backgroundColor: ele?.tagColor, marginTop: '3rem' }} className={styles.tag}>{ele?.tag}</div>
                <h3 className={styles.container_heading}>{ele?.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}><div className={styles.section3_image_container}><Image src={ele?.image} alt={ele?.altText} fill /></div></div>
                <div className={styles.text_container}>
                  <p className={styles.container_normal_text}>{ele?.content}</p>
                  <div>
                    {
                      ele?.points?.map((item) => {
                        return (
                          <div className={styles.bullet_points} key={item?.point} style={{ borderLeft: `3px solid ${item?.borderColor}` }} >
                            <span className={styles.point_title}>{item?.keyword} </span>
                            <p className={styles.point_desc}>{item?.pointDesc}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <p className={styles.container_link}
                    onClick={() => (setDemoModal(true),
                      setHeading(ele?.linkTitle === "Talk to an expert" || ele?.linkTitle === "Speak with an expert" ? "Our Product Experts will call you soon!" : "We’ll call you soon!")
                    )}>
                    <span>{ele?.linkTitle}</span>
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={styles.highlights_section}>
        <div style={{ width: 'fit-content', margin: "auto" }}><h3 className={styles.highlights_sec_heading}>{otherHighlights}</h3><div className={styles.highlights_sec_stroke}><Image src='/assets/strokes_svg/features_hl.svg' alt='features stroke' fill /></div></div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }} >
          {
            billingHighlights?.map((ele) => {
              return (
                <div className={styles.otherFeature} >
                  <div className={styles.features_icon_container}>
                    <Image src={ele?.icon} alt={ele?.altText} fill />
                  </div>
                  <h4 className={styles.other_feature_heading}>{ele?.title}</h4>
                  <p className={styles.other_feature_desc}>{ele?.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className={styles.section_four}>
        <div style={{ display: 'flex', justifyContent: 'end' }}><div className={styles.section4_image_container}>
          <Image src={billingBanner?.image} alt='banner image' fill />
        </div>
        </div>
        <div style={{ padding: '3rem 2rem' }}>
          <div className={styles.section4_left_side}>
            <h4 className={styles.section_four_heading}>{billingBanner?.title}</h4>
            <p className={styles.section_four_content}>{billingBanner?.content}</p>
          </div>
          <WhiteCustomButton text='Schedule a Demo' style={{
            backgroundColor: '#fff',
            color: '#2A6AB4',
            borderRadius: '0.3rem',
            border: 'none',
            width: '100%',
            margin: '2rem 0'
          }}
            onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))}
          />
        </div>
      </div>

      <div className={styles.section_five}>
        <div className={styles.section5_container}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><div className={styles.section5_image_container}><Image src='https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/online-store/business.webp' alt='rewarding section image' fill /></div></div>

          <div className={styles.section5_right_container}>
            <div><h3 className={styles.rewarding_section_heading}>{EnablingAutomation}</h3><div className={styles.business_stroke_img}><Image src='/assets/strokes_svg/business_hl.svg' alt='business stroke' fill /></div></div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', margin: '2rem 0 3.75rem 0', width: '100%', justifyContent: 'space-between' }}>
              <div>
                <p className={styles.LC_number}>75000+</p>
                <p className={styles.LC_heading}>{activeLicences}</p>
              </div>
              <div>
                <p className={styles.LC_number}>1.7 Mn+</p>
                <p className={styles.LC_heading}>{invoiceGenerated}</p>
              </div>
            </div>
            <BlackCustomButton text='Talk to an Expert' styles={{ backgroundColor: '#343434', color: '#fff', border: 'none', width: '100%' }} onClick={() => (setDemoModal(true), setHeading("Our Product Experts will call you soon!"))} />
          </div>
        </div>
      </div>

      <div className={styles.mobile_industries_section}>
        <div style={{ width: 'fit-content', margin: "auto" }}><h3 className={styles.industry_heading}>{industriesWeServe}</h3> <div className={styles.industries_stroke_img}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
        <NewIndustryCards view='mobile' />
      </div>

      <div className={styles.section_six}>
        <div style={{ width: 'fit-content', margin: "auto" }}><h3 className={styles.highlights_sec_heading}>{testimonialHeadText}</h3><div className={styles.testimonials_stroke_img}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='features stroke' fill /></div></div>
        <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
      </div>

      <div className={styles.section_seven}>
        <GiveItTryMobile
          image={"/assets/giveItAtryHome.webp"}
          heading={giveitTryHeading}
          description={giveitTryDesc}
        />
      </div>

      <TrustFactor />

      <div>
        <FAQmobile FaqTableData={billingFAQ} width={"auto"} heading={FAQBilling} />
      </div>

      <div className={styles.section_nine}>
        <MobilePDBanner setDemoModal={setDemoModal} setHeading={setHeading} />
      </div>
    </>
  )
}

export default MobileBilling