import React, { useEffect, useState } from 'react'
import styles from '../../../styles/retail/footwear/DesktopFootwear.module.css';
import Image from 'next/image';
// import ReactTyped from 'react-typed';
import { BlackCustomButton, MarqueeComponentHomePage, WhiteCustomButton } from '@/components/qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import content from '../../../language/ENGLISH.json'
import OutletFeatures from '@/components/common/OutletFeatures';
import TestimonialSection from '@/components/common/TestimonialSection';
import PersonalisedDemoBanner from '@/components/common/PersonalisedDemoBanner';
import { fmcgFAQ, fmcgFeatures, fmcgOtherFeatures } from '@/constants/outlets';
import FrequentQuestions from '@/components/homePage/FrequentQuestions';
import VerificationPopup from '@/components/modals/VerificationPopup';
import { ThreeSimpleSteps } from '@/components/mobileQbStrap';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const DesktopFMCG = () => {
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
                            <span className={styles.heading1}>FMCG Distribution Billing Software for</span><br />
                            {/* <span className={styles.heading2}><ReactTyped strings={["GST Billing", "Purchase", "Inventory Management", "Reporting"]} typeSpeed={200} loop /></span> */}
                        </h1>
                        <p className={styles.hero_desc}>Optimize your FMCG retail business with our advanced solution that provides billing, inventory management, beat tracking, pricing, markdowns, schemes, discounts, mobile app for orders, GST, E-Invoicing, mobile reporting, and more.</p>
                        <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                    </div>
                    <div className={styles.hero_img_container}>
                        <div className={styles.hero_img}><Image src="/assets/groceries/fmcg/hero-img.webp" alt="fmcg" fill /></div>
                    </div>
                </div>
            </div>

            <div className={styles.marquee_section}>
                <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <OutletFeatures features={fmcgFeatures} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading} style={{ margin: "0" }}><h3 style={{ textAlign: "left" }}>Additional Features of QueueBuster FMCG Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>QueueBuster FMCG Billing Software also offers a range of other advanced features to help optimize your business operations. Some of these features include barcode scanning, batch tracking, recipe management, purchase order management, customer loyalty programs, and integration with third-party delivery services.<br /> With such a comprehensive range of features, QueueBuster offers a one-stop solution for all your FMCG billing and inventory management needs. Whether you operate a single outlet or a chain of stores, QueueBuster's advanced technology can help you streamline your operations, reduce costs, and improve customer satisfaction.
                    </p>
                </div>
                <div className={styles.box_side}>
                    {
                        fmcgOtherFeatures?.map((ele, idx) => {
                            return (
                                <div
                                    key={ele?.id}
                                    className={`${styles.other_features} ${ele?.classValue}`}
                                    onMouseOver={() => setShowOFDesc({ state: true, index: idx })}
                                    onMouseLeave={() => setShowOFDesc({ state: false, index: idx })}
                                    style={{ height: showOFDesc?.state && showOFDesc?.index === idx ? ele?.height : "11rem" }}
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

            <div className={styles.testimonial_section}>
                <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
                <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
            </div>

            <div style={{ marginTop: "6rem" }}>
                <FrequentQuestions FaqTableData={fmcgFAQ} heading={"FAQs for FMCG Billing Software"} />
            </div>

            <div style={{ margin: "0rem 9.3rem 7rem 9.3rem" }}>
                <ThreeStepForm />
            </div>

            <div className={styles.demo_banner_section}>
                <PersonalisedDemoBanner />
            </div>
        </div>
    )
}

export default DesktopFMCG