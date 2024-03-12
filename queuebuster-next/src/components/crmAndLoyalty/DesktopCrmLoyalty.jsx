import React, { useState } from 'react'
import styles from '../../styles/crmLoyalty/DesktopCrm.module.css';
import { BlackCustomButton, BlueCustomButton, CustomButton, GiveItTry, MarqueeComponentHomePage, TransparentCustomButton, WhiteCustomButton } from '../qbStrap';
import { ratingInfo, ClientsArr1, testimonialData, FaqTableData, videoTestimonial } from '@/constants/common';
import Image from 'next/image';
import { crmAndLoyalty, crmHighlights, crmBanner, crmFAQ } from '../../constants/features'
import TestimonialSection from '../common/TestimonialSection';
import FrequentQuestions from '../homePage/FrequentQuestions';
import Link from 'next/link';
import OtherHighlights from '../common/OtherHighlights';
import RewardingSection from '../common/RewardingSection';
import Router from 'next/router';
import NewIndustryCards from '../common/NewIndustryCards';
import ReactTyped from "react-typed";
import PersonalisedDemoBanner from '../common/PersonalisedDemoBanner';
import content from '../../language/ENGLISH.json'
import VerificationPopup from '../modals/VerificationPopup';
import TrustFactor from '../common/TrustFactor';


const DesktopCrmLoyalty = () => {
    const router = Router;
    const { commonMarqueTitle } = content
    const { testimonialHeadText } = content.testimonial
    const { giveitTryHeading, giveitTryDesc } = content.retail
    const { industriesWeServe, crmPageHeading, crmTypingText1, crmTypingText2, crmTypingText3, crmTypingText4, crmPageDescP1, crmPageDescP2, businessThatRuns, retain, generate, FAQCrm } = content.features

    const [demoModal, setDemoModal] = useState(false);
    const [formHeading, setHeading] = useState("Book your free demo now!")

    return (
        <>
            <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
            <div className={styles.section_one}>
                <div className={styles.left_container}>
                    <h1>
                        <span className={styles.black_text}>{crmPageHeading}</span><br />
                        <span className={styles.blue_text}><ReactTyped strings={[crmTypingText1, crmTypingText2, crmTypingText3, crmTypingText4]} typeSpeed={200} loop /></span>
                    </h1>
                    <p className={styles.page_subheading}>{crmPageDescP1}<b>{crmPageDescP2}</b></p>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <BlackCustomButton text='Get Free Demo' style={{ color: '#fff', padding: '0 2rem' }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                        <TransparentCustomButton text='Contact Sales' style={{ padding: "0 2rem" }} onClick={() => router.push('/contact-sales')} />
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
                        <Image src='https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/CRM/crm-hero-img.webp' alt='crm and loyalty main image' fill />
                    </div>
                    <div className={styles.side_img1}><Image src='/assets/features/crm/Group 72794.svg' alt='crm and loyalty main image' fill /></div>
                    <div className={styles.side_img2}><Image src='/assets/features/crm/Group 71827.svg' alt='crm and loyalty main image' fill /></div>
                </div>
            </div>

            <div className={styles.section_two}>
                <h2 className={styles.section_two_heading}>{commonMarqueTitle}</h2>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} style={{ backgroundColor: "#fff" }} />
            </div>

            <div className={styles.section_three}>
                {
                    crmAndLoyalty?.map((ele, idx) => {
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

            <OtherHighlights Highlights={crmHighlights} Banner={crmBanner} bannerHeight={'48.5rem'} bannerWidth={'59.25rem'} setDemoModal={setDemoModal} setHeading={setHeading}  />

            <RewardingSection
                Text1={retain}
                Text2={generate}
                Number1={`52%`}
                Number2={`38%`}
                heading={businessThatRuns}
                strokeImage={'/assets/strokes_svg/business_hl.svg'}
                setDemoModal={setDemoModal} setHeading={setHeading}
            />

            <div className={styles.industries_section}>
                <div style={{ width: 'fit-content', margin: 'auto' }}><h3 className={styles.industry_heading}>{industriesWeServe}</h3> <div className={styles.industries_stroke_img}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
                <NewIndustryCards />
            </div>

            <div className={styles.section_six}>
                <div style={{ width: 'fit-content', margin: 'auto' }}><h3 className={styles.testimonial_heading}>{testimonialHeadText}</h3> <div className={styles.testimonials_stroke_img}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
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
                <FrequentQuestions FaqTableData={crmFAQ} heading={FAQCrm} />
            </div>

            <div className={styles.section_nine}>
                <PersonalisedDemoBanner setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>
        </>
    )
}

export default DesktopCrmLoyalty