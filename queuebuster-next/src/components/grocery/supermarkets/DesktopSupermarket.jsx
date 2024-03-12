import React, { useEffect, useState } from 'react'
import styles from '../../../styles/retail/footwear/DesktopFootwear.module.css';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import { BlackCustomButton, MarqueeComponentHomePage, WhiteCustomButton } from '@/components/qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import content from '../../../language/ENGLISH.json'
import OutletFeatures from '@/components/common/OutletFeatures';
import TestimonialSection from '@/components/common/TestimonialSection';
import PersonalisedDemoBanner from '@/components/common/PersonalisedDemoBanner';
import { supermarketFAQ, supermarketFeatures, supermarketOtherFeatures } from '@/constants/outlets';
import FrequentQuestions from '@/components/homePage/FrequentQuestions';
import VerificationPopup from '@/components/modals/VerificationPopup';
import { ThreeSimpleSteps } from '@/components/mobileQbStrap';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const DesktopSupermarket = () => {
    const { commonMarqueTitle } = content;
    const { testimonialHeadText } = content.testimonial;
    const [readMore, setReadMore] = useState(false);
    const [showOFDesc, setShowOFDesc] = useState({ state: false, index: 0 });
    const [demoModal, setDemoModal] = useState(false);
    const [formHeading, setHeading] = useState("Book your free demo now!")

    return (
        <div>
            <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
            <div className={styles.hero_stack_container}>
                <div className={styles.hero_stack1}></div>
                <div className={styles.hero_stack2}></div>
                <div className={styles.hero_section}>
                    <div className={styles.hero_text_container}>
                        <h1>
                            <span className={styles.heading1}>Supermarket Billing Software for</span><br />
                            <span className={styles.heading2}><ReactTyped strings={["Bulk Billing", "Stock Transfers", "Loyalty Rewards"]} typeSpeed={200} loop /></span>
                        </h1>
                        <p className={styles.hero_desc}>QueueBuster’s powerful Android Supermarket billing Software can efficiently manage customer flow and reduce wait times at your supermarket(s). The software also offers features such as real-time reporting, customer feedback management, and multilingual support to further enhance customer engagement.</p>
                        <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                    </div>
                    <div className={styles.hero_img_container}>
                        <div className={styles.hero_img} ><Image src="/assets/groceries/supermarkets/hero-img.webp" alt="supermarket" fill /></div>
                    </div>
                </div>
            </div>

            <div className={styles.marquee_section}>
                <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <OutletFeatures features={supermarketFeatures} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading} style={{ margin: "0" }}><h3 style={{ textAlign: "left" }}>Additional features of QueueBuster Supermarket Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>QueueBuster offers a range of advanced functionalities to further elevate the retail experience. The software incorporates a comprehensive customer relationship management (CRM) system, allowing businesses to build and nurture customer relationships effectively. Through integrated loyalty programs, businesses can reward customers for their continued patronage, fostering brand loyalty.</p>
                </div>
                <div className={styles.box_side} style={{ gridTemplateColumns: supermarketOtherFeatures.length <= 6 ? "repeat(2, 1fr)" : "repeat(3, 1fr)" }}>
                    {
                        supermarketOtherFeatures?.map((ele, idx) => {
                            return (
                                <div
                                    key={ele?.id}
                                    className={`${styles.other_features} ${supermarketOtherFeatures.length <= 6 ? ele?.classValue + "-lte6" : ele?.classValue} ${supermarketOtherFeatures.length === 5 && idx === 4 && ele?.classValue + "e5"}`}
                                    onMouseOver={() => setShowOFDesc({ state: true, index: idx })}
                                    onMouseLeave={() => setShowOFDesc({ state: false, index: idx })}
                                    style={{ height: showOFDesc?.state && showOFDesc?.index === idx ? ele?.height : ele?.shHeight ? ele?.shHeight : "11rem", gridColumnStart: idx === 3 ? "2" : idx === 4 && "3" }}
                                >
                                    <div className={styles.icon}><Image src={ele?.icon} alt={ele?.title} fill /></div>
                                    <p>{ele?.title}</p>
                                    <p className={styles.description} style={{ display: showOFDesc?.state && showOFDesc?.index === idx ? "block" : "none" }}>{ele?.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div style={{ margin: "0rem 9.3rem 7rem 9.3rem" }}>
                <ThreeStepForm />
            </div>

            <div className={styles.testimonial_section}>
                <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
                <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
            </div>

            <div style={{ marginTop: "6rem" }}>
                <FrequentQuestions FaqTableData={supermarketFAQ} heading={"FAQs for QueueBuster Supermarket Billing Software"} />
            </div>

            <div className={styles.demo_banner_section}>
                <PersonalisedDemoBanner />
            </div>
        </div>
    )
}

export default DesktopSupermarket