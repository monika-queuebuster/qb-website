import React, { useState } from 'react'
import styles from '../../styles/billing/DesktopBilling.module.css'
// import ReactTyped from 'react-typed'
import { BlackCustomButton, BlueCustomButton, GiveItTry, MarqueeComponentHomePage, TransparentCustomButton, WhiteCustomButton } from '../qbStrap'
import { ratingInfo, ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import Image from 'next/image';
import { billing, billingFAQ, billingBanner, billingHighlights } from '../../constants/features'
import Link from 'next/link';
import OtherHighlights from '../common/OtherHighlights';
import RewardingSection from '../common/RewardingSection';
import NewIndustryCards from '../common/NewIndustryCards';
import TestimonialSection from '../common/TestimonialSection';
import FrequentQuestions from '../homePage/FrequentQuestions';
import PersonalisedDemoBanner from '../common/PersonalisedDemoBanner';
import content from '../../language/ENGLISH.json'
import { useRouter } from 'next/router';
import VerificationPopup from '../modals/VerificationPopup';
import TrustFactor from '../common/TrustFactor';

const DesktopBilling = () => {
    const { commonMarqueTitle } = content
    const { testimonialHeadText } = content.testimonial
    const { giveitTryHeading, giveitTryDesc } = content.retail
    const { billingPageHeading, billingTypingText1, billingTypingText2, billingTypingText3, billingTypingText4, billingPageDesc, activeLicences, invoiceGenerated, EnablingAutomation, industriesWeServe, FAQBilling } = content.features
    const router = useRouter();
    const [demoModal, setDemoModal] = useState(false);
    const [formHeading, setHeading] = useState("Book your free demo now!")

    return (
        <>
            <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
            <div className={styles.section_one}>
                <div className={styles.left_container}>
                    <h1>
                        <span className={styles.black_text}>{billingPageHeading}</span><br />
                        {/* <span className={styles.blue_text}><ReactTyped strings={[billingTypingText1, billingTypingText2, billingTypingText3, billingTypingText4]} typeSpeed={200} loop /></span> */}
                    </h1>
                    <p className={styles.page_subheading}>{billingPageDesc}</p>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <BlackCustomButton text='Get Free Demo' style={{ color: '#fff', padding: '0 2rem' }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                        <TransparentCustomButton text="Contact Sales" style={{ padding: "0 2rem" }} onClick={() => router.push('/contact-sales')} />
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
                <div className={styles.right_container}>
                    <div className={styles.section1_image_container}>
                        <Image src='/assets/features/billing/hero-img.png' alt='billing hero image' fill />
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
                                {
                                    idx % 2 === 0 &&
                                    <div><div className={styles.section3_image_container}><Image src={ele?.image} alt={ele?.altText} fill /></div></div>
                                }
                                <div className={styles.text_container}>
                                    <div style={{ backgroundColor: ele?.tagColor }} className={styles.tag}>{ele?.tag}</div>
                                    <h3 className={styles.container_heading}>{ele?.title}</h3>
                                    <p className={styles.container_normal_text}>{ele?.content}</p>
                                    <div>
                                        {
                                            ele?.points?.map((item) => {
                                                return (
                                                    <div className={styles.bullet_points} key={item?.point} style={{ borderLeft: `3px solid ${item?.borderColor}` }}>
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
                                {
                                    idx % 2 != 0 &&
                                    <div><div className={styles.section3_image_container}><Image src={ele?.image} alt={ele?.altText} fill /></div></div>
                                }
                            </div>
                        )
                    })
                }
            </div>

            <OtherHighlights Highlights={billingHighlights} Banner={billingBanner} bannerHeight={'41.5rem'} bannerWidth={'52.25rem'} setDemoModal={setDemoModal} setHeading={setHeading} />

            <RewardingSection
                Text1={activeLicences}
                Text2={invoiceGenerated}
                Number1={`75000+`}
                Number2={`1.7 Mn+`}
                // BrText2={"Growing Rapidly"}
                heading={EnablingAutomation}
                strokeImage={'/assets/strokes_svg/business_hl.svg'}
                altText={'queuebuster estore'}
                setDemoModal={setDemoModal} setHeading={setHeading}
            />

            <div className={styles.industries_section}>
                <div style={{ width: "fit-content", margin: "auto" }}><h3 className={styles.industry_heading}>{industriesWeServe}</h3> <div className={styles.industries_stroke_img}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
                <NewIndustryCards />
            </div>

            <div className={styles.section_six}>
                <div style={{ width: "fit-content", margin: "auto" }}><h3 className={styles.testimonial_heading}>{testimonialHeadText}</h3> <div className={styles.testimonials_stroke_img}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
                <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
            </div>

            <div className={styles.section_seven}>
                <GiveItTry
                    heading={giveitTryHeading}
                    description={giveitTryDesc}
                    image={"/assets/giveItAtryHome.webp"}
                    styles={{ bottom: "-4.2rem", right: "0rem", height: "54rem", width: '61rem' }}
                    containerStyles={{ margin: "0 7rem 8.5rem 7rem", background: 'none' }}
                />
            </div>
            <TrustFactor />

            <div>
                <FrequentQuestions FaqTableData={billingFAQ} heading={FAQBilling} />
            </div>

            <div className={styles.section_nine}>
                <PersonalisedDemoBanner setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>
        </>
    )
}

export default DesktopBilling
