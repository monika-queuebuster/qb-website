import React, { useEffect, useState } from 'react'
import styles from '../../../styles/retail/footwear/MobileFootwear.module.css';
import Image from 'next/image';
// import ReactTyped from 'react-typed';
import { BlackCustomButton, MarqueeComponentHomePage, WhiteCustomButton } from '@/components/qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial } from '@/constants/common';
import content from '../../../language/ENGLISH.json'
import OutletFeatures from '@/components/common/OutletFeatures';
import { spaFAQ, spaFeatures, spaOtherFeatures } from '@/constants/outlets';
import MobileTestimonialSection from '@/components/common/MobileTestimonialSection';
import FAQmobile from '@/components/Industry/FAQ_mobile';
import MobilePDBanner from '@/components/common/MobilePDBanner';
import VerificationPopup from '@/components/modals/VerificationPopup';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const MobileSpa = () => {
    const { commonMarqueTitle } = content
    const { testimonialHeadText } = content.testimonial;
    const [demoModal, setDemoModal] = useState(false);
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
                            <span className={styles.heading1}>Spa Booking & Management Software for</span><br />
                            {/* <span className={styles.heading2}><ReactTyped strings={["Massage Parlors", "Med Spas", "Wellness Centres"]} typeSpeed={200} loop /></span> */}
                        </h1>
                        <p className={styles.hero_desc}>QueueBuster Android POS offers specialized Spa Booking & Management Software, catering to Massage Parlors, Med Spas, and Wellness Centers. Efficiently handle scheduling, track client preferences, and optimize staff management, empowering your business to deliver exceptional service and maximize productivity.</p>
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
                <OutletFeatures features={spaFeatures} mobileView={true} setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading}><h3>Other Key Features for Spa Booking & Management Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>Beyond appointment scheduling and membership management, QB facilitates efficient inventory tracking, empowering spas to maintain optimal stock levels and minimize shortages. Robust reporting and analytics tools provide invaluable insights into business performance, guiding strategic decision-making for sustained growth.<br /> Additionally, the CRM functionality enables personalized client interactions, fostering loyalty and driving repeat business.
                    </p>
                </div>
                <div className={styles.box_side}>
                    {
                        spaOtherFeatures?.map((ele, idx) => {
                            return (
                                <div key={ele?.id} className={`${styles.other_features}`} style={{ gridColumnStart: idx === 6 && "2" }} >
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

            <FAQmobile FaqTableData={spaFAQ} width={"auto"} heading={"FAQs for Spa Billing and Management Software Webpage"} />

            <div className={styles.demo_banner_section}>
                <MobilePDBanner />
            </div>
        </div>
    )
}

export default MobileSpa