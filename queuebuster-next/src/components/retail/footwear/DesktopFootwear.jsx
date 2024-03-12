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
import { FootwearwhyQB, footwearFAQ, footwearFeatures, footwearOtherFeatures } from '@/constants/outlets';
import FrequentQuestions from '@/components/homePage/FrequentQuestions';
import VerificationPopup from '@/components/modals/VerificationPopup';
import { ThreeSimpleSteps } from '@/components/mobileQbStrap';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const DesktopFootwear = () => {
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
                            <span className={styles.heading1}>Footwear Billing Software for</span><br />
                            <span className={styles.heading2}><ReactTyped strings={["Stock Transfer", "Multi-Store Management", "Bulk Billing"]} typeSpeed={200} loop /></span>
                        </h1>
                        <p className={styles.hero_desc}>Managing your footwear store's inventory becomes a breeze with QueueBuster Footwear Billing Software. The billing software simplifies the process of adding, editing, and deleting stock items, transforming these tasks into quick and efficient actions that require just a few clicks.</p>
                        <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                    </div>
                    <div className={styles.hero_img_container}>
                        <div className={styles.hero_img}><Image src="/assets/retails/footwears/hero-img.png" alt="fine dine" fill /></div>
                    </div>
                </div>
            </div>

            <div className={styles.marquee_section}>
                <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <OutletFeatures features={footwearFeatures} setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading} style={{ margin: "0" }}><h3 style={{ textAlign: "left" }}>Other Important Features for <br />Footwear Retail Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>From streamlining warehouse management to meticulous inventory control, effortless stock transfer requests, and efficient purchase order handling, our platform centralizes every aspect of your business. This isn't just about managing tasks—it's about having the power at your fingertips to oversee your entire operation.
                        What sets us apart is our knack for offering an ERP grade experience. Seamlessly integrate with the industry's leading software companies, making omnichannel integration a breeze.
                    </p>
                </div>
                <div className={styles.box_side}>
                    {
                        footwearOtherFeatures?.map((ele, idx) => {
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
                <FrequentQuestions FaqTableData={footwearFAQ} heading={"FAQs for Footwear POS Billing Software"} />
            </div>

            <div className={styles.why_qb_section}>
                <h2>How QueueBuster Footwear Billing Software Helps You Manage Your Shoe Shop Better?</h2>
                <div className={styles.why_container}>
                    <div className={styles.content_part}>
                        <p className={styles.why_qb_desc}>While owning a retail shoe business, keeping up with inventory and providing a seamless retail experience is crucial. QueueBuster's Footwear Billing Software, designed for Android and cloud-based operation, stands out as an essential tool for footwear businesses. Let's explore why QueueBuster is not just an upgrade but a necessary solution for any footwear retailer.</p><br />
                        {
                            FootwearwhyQB?.map((ele) => {
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
                <PersonalisedDemoBanner />
            </div>
        </div>
    )
}

export default DesktopFootwear