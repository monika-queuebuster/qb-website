import React, { useState } from 'react'
import styles from '../../../styles/retail/footwear/MobileFootwear.module.css';
import Image from 'next/image';
// import ReactTyped from 'react-typed';
import { BlackCustomButton, MarqueeComponentHomePage, WhiteCustomButton } from '@/components/qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import content from '../../../language/ENGLISH.json'
import { FDwhyQB, cosmeticsFeatures, fineDineFAQ, fineDinefeatures, finedineOtherFeatures } from '@/constants/outlets';
import MobilePDBanner from '@/components/common/MobilePDBanner';
import MobileTestimonialSection from '@/components/common/MobileTestimonialSection';
import FAQmobile from '@/components/Industry/FAQ_mobile';
import OutletFeatures from '@/components/common/OutletFeatures';
import VerificationPopup from '@/components/modals/VerificationPopup';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const MobileFineDine = () => {
    const { commonMarqueTitle } = content
    const { testimonialHeadText } = content.testimonial;
    const [readMore, setReadMore] = useState(false);
    const { heroDesc } = content.fineDine
    const [demoModal, setDemoModal] = useState(false)
    const [formHeading, setHeading] = useState("Book your free demo now!")

    return (
        <div>
            <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
            <div className={styles.hero_stack_container}>
                <div className={styles.hero_stack1} style={{ height: '48rem' }}></div>
                <div className={styles.hero_stack2} style={{ height: '48rem' }}></div>
                <div className={styles.hero_section} style={{ height: '48rem' }}>
                    <div className={styles.hero_text_container}>
                        <h1>
                            <span className={styles.heading1}>Fine Dine Billing Software For</span><br />
                            {/* <span className={styles.heading2}><ReactTyped strings={["Billing", "Online Ordering", "Live Sales Reporting"]} typeSpeed={200} loop /></span> */}
                        </h1>
                        <p className={styles.hero_desc}>{heroDesc}</p>
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
                <OutletFeatures features={fineDinefeatures} mobileView={true} setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading}><h3>Other Important Features for Fine Dine Restaurant Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>Elevate your efficiency with centralized reporting, seamlessly accessing crucial insights across your enterprise. From the heart of your culinary hub, streamline kitchen operations effortlessly, ensuring consistent quality across every plate served. Manage multiple outlets effortlessly, harmonizing operations while maintaining individuality.
                        <br />
                        Embrace excellence in every aspect of restaurant management with our cutting-edge software, designed to elevate your fine dining venture to new heights of success.
                    </p>
                </div>
                <div className={styles.box_side}>
                    {
                        finedineOtherFeatures?.map((ele, idx) => {
                            return (
                                <div key={ele?.id} className={styles.other_features} style={{ gridColumnStart: idx === 6 && "2" }}>
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

            <FAQmobile FaqTableData={fineDineFAQ} width={"auto"} heading={"FAQs for Fine Dine POS Billing Software"} />

            <div className={styles.why_qb_section}>
                <h2>How QueueBuster Fine Dine Billing Software Helps You Manage Your Restaurant Better?</h2>
                <div className={styles.why_container}>
                    <div className={styles.content_part}>
                        {
                            FDwhyQB?.map((ele) => {
                                return (
                                    <div key={ele?.id} className={styles.why_text} style={{ display: (ele?.id > 1 && !readMore) && "none" }}>
                                        <h4>{ele?.ques}</h4>
                                        <p>{ele?.answer}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.read_more_part}><span onClick={() => setReadMore(!readMore)}>{readMore ? 'Read Less' : "Read More"}</span></div>
                </div>
            </div>

            <div className={styles.demo_banner_section}>
                <MobilePDBanner />
            </div>
        </div>
    )
}

export default MobileFineDine