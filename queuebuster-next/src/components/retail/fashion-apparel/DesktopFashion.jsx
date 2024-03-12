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
import { FashionwhyQB, fashionFAQ, fashionFeatures, footwearOtherFeatures } from '@/constants/outlets';
import FrequentQuestions from '@/components/homePage/FrequentQuestions';
import VerificationPopup from '@/components/modals/VerificationPopup';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const DesktopFashion = () => {
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
                <div className={styles.hero_section} style={{ padding: "5rem 0 0 5rem"}}>
                    <div className={styles.hero_text_container}>
                        <h1>
                            <span className={styles.heading1}>Fashion and Apparel Billing Software for</span><br />
                            <span className={styles.heading2}><ReactTyped strings={["CRM & Loyalty", "Inventory Management", "Online Store"]} typeSpeed={200} loop /></span>
                        </h1>
                        <p className={styles.hero_desc}>Effortlessly elevate customer interactions and adapt to dynamic expectations with our bespoke QueueBuster Fashion and apparel billing software, ensuring a seamless retail experience for your clothing store. Tailored for precision, it's your key to staying agile in a rapidly changing retail landscape.</p>
                        <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                    </div>
                    <div className={styles.hero_img_container} style={{ width: "37.9%"}}>
                        <div className={styles.hero_img} style={{ position: "absolute", right: "0" }}><Image src="/assets/retails/fashion/hero-img.png" alt="fine dine" fill style={{ borderBottomRightRadius: "20px"}} /></div>
                    </div>
                </div>
            </div>

            <div className={styles.marquee_section}>
                <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <OutletFeatures features={fashionFeatures} setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading} style={{ margin: "0" }}><h3 style={{ textAlign: "left" }}>Other Important Features for <br />Fashion and Apparel Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>Revolutionize the way you manage your footwear store's inventory with QueueBuster fashion and apparel Billing Software. Our cutting-edge software stream lines warehouse management, purchase order processing, and simplifies GST filing, offering a comprehensive solution tailored specifically for footwear retailers.<br /><br />
                        Say goodbye to complexity and hello to seamless operations, including a customer loyalty program designed to elevate your business. Experience efficiency and ease like never before with QueueBuster fashion and apparel billing software.
                    </p>
                </div>
                <div className={styles.box_side}>
                    {
                        footwearOtherFeatures?.map((ele, idx) => {
                            return (
                                <div key={ele?.id} className={`${styles.other_features} ${ele?.classValue}`} onMouseOver={() => setShowOFDesc({ state: true, index: idx })} onMouseLeave={() => setShowOFDesc({ state: false, index: idx })} style={{ height: showOFDesc?.state && showOFDesc?.index === idx ? ele?.height : "11rem" }}>
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
                <FrequentQuestions FaqTableData={fashionFAQ} heading={"FAQs for Apparel POS Billing Software"} />
            </div>

            <div className={styles.why_qb_section}>
                <h2>How QueueBuster Apparel Billing Software Helps You Manage Your Store Better?</h2>
                <div className={styles.why_container}>
                    <div className={styles.content_part}>
                        <p className={styles.why_qb_desc}>In the fast-paced world of fashion and apparel retail, staying ahead of the competition requires more than just trendsetting products. Efficient operations, seamless customer experiences, and adaptive technology play pivotal roles in achieving sustained success.<br /> <br /> This is where QueueBuster's Point-of-Sale (POS) solution emerges as a game-changer for fashion and apparel stores, offering a comprehensive set of features tailored to meet the unique challenges of the industry.</p><br />
                        {
                            FashionwhyQB?.map((ele) => {
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

export default DesktopFashion