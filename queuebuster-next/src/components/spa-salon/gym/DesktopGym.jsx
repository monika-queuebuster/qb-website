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
import { gymFAQ, gymFeatures, gymOtherFeatures } from '@/constants/outlets';
import FrequentQuestions from '@/components/homePage/FrequentQuestions';
import VerificationPopup from '@/components/modals/VerificationPopup';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const DesktopGym = () => {
    const { commonMarqueTitle } = content;
    const { testimonialHeadText } = content.testimonial;
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
                            <span className={styles.heading1}>Gym & Fitness Center Billing Software for</span><br />
                            {/* <span className={styles.heading2}><ReactTyped strings={["Crossfit Studios", "Zumba Centers", "Yoga Classes"]} typeSpeed={200} loop /></span> */}
                        </h1>
                        <p className={styles.hero_desc}>QueueBuster Gym & Fitness Center Billing Software simplifies the process of subscriptions and bookings for customers. With this Android-based solution, customers can easily sign up for memberships and book classes seamlessly. QB POS allows staff to efficiently manage class schedules, keep track of attendance, and process payments, which streamlines operations for the gym or fitness center.</p>
                        <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                    </div>
                    <div className={styles.hero_img_container}>
                        <div className={styles.hero_img}><Image src="/assets/spa-salon/gym/hero-img.webp" alt="fine dine" fill /></div>
                    </div>
                </div>
            </div>

            <div className={styles.marquee_section}>
                <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <OutletFeatures features={gymFeatures} setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading} style={{ margin: "0" }}><h3 style={{ textAlign: "left" }}>Other Key Features for QueueBuster Gym & Fitness Center Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>The QueueBuster Gym & Fitness Center Billing Software offers an array of key features that facilitate streamlined billing processes and enhanced customer experiences. These features include automated billing and invoicing capabilities, simplified membership management, and seamless integration with other gym management tools.
                    </p>
                </div>
                <div className={styles.box_side}>
                    {
                        gymOtherFeatures?.map((ele, idx) => {
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

            <div style={{ margin: "0rem 9.3rem 7rem 9.3rem" }}>
                <ThreeStepForm />
            </div>

            <div className={styles.testimonial_section}>
                <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
                <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
            </div>

            <div style={{ marginTop: "6rem" }}>
                <FrequentQuestions FaqTableData={gymFAQ} heading={"FAQs for Gym & Fitness Center Billing Software"} />
            </div>

            <div className={styles.demo_banner_section}>
                <PersonalisedDemoBanner />
            </div>
        </div>
    )
}

export default DesktopGym