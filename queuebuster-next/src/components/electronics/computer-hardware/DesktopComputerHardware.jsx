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
import { CompHardwarewhyQB, compHardwareFAQ, compHardwareFeatures, computerHardwareOtherFeatures } from '@/constants/outlets';
import FrequentQuestions from '@/components/homePage/FrequentQuestions';
import VerificationPopup from '@/components/modals/VerificationPopup';
import ThreeStepForm from '@/components/common/ThreeStepForm';

const DesktopComputerHardware = () => {
    const { commonMarqueTitle } = content;
    const { testimonialHeadText } = content.testimonial;
    const [readMore, setReadMore] = useState(false);
    const [showOFDesc, setShowOFDesc] = useState({ state: false, index: 0 });
    const [demoModal, setDemoModal] = useState(false)
    const [formHeading, setHeading] = useState("Book your free demo now!")

    return (
        <div>
            <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
            <div className={styles.hero_stack_container}>
                <div className={styles.hero_stack1}></div>
                <div className={styles.hero_stack2}></div>
                <div className={styles.hero_section} style={{ padding: "5rem 2rem 0rem 5rem"}}>
                    <div className={styles.hero_text_container}>
                        <h1>
                            <span className={styles.heading1}>A Computer Hardware Store Billing Software for </span><br />
                            <span className={styles.heading2}><ReactTyped strings={["Vendor Management", "Customer Engagement", "Offline Access"]} typeSpeed={200} loop /></span>
                        </h1>
                        <p className={styles.hero_desc}>QueueBuster offers industry-leading solutions designed to streamline and optimize your business workflow. With our comprehensive suite of tools, you can efficiently keep track of your inventory, access critical data, and make more informed business decisions.</p>
                        <WhiteCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
                    </div>
                    <div className={styles.hero_img_container}>
                        <div className={styles.hero_img}><Image src="/assets/electronics/computer-hardware/hero-img.webp" alt="fine dine" fill /></div>
                    </div>
                </div>
            </div>

            <div className={styles.marquee_section}>
                <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Key Features</h3><div className={styles.heading_stroke} style={{ width: '12rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <OutletFeatures features={compHardwareFeatures} />
            </div>

            <div className={styles.other_features_section}>
                <div className={styles.text_side}>
                    <div className={styles.section_heading} style={{ margin: "0" }}><h3 style={{ textAlign: "left" }}>Other Important Features for <br />Computer Hardware Shops Billing Software</h3><div className={styles.other_features_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
                    <p className={styles.other_features_Desc}>Looking for a comprehensive, efficient, and versatile solution for your computer hardware shop? QueueBuster POS delivers an all-encompassing platform that seamlessly integrates crucial features to elevate your business operations. <br /><br />
                        Experience uninterrupted business even in offline scenarios, ensuring seamless transactions with QueueBuster's offline mode. Manage your data effortlessly, whether it's handling bulk information or maintaining a well-organized product catalog.
                    </p><br />
                </div>
                <div className={styles.box_side}>
                    {
                        computerHardwareOtherFeatures?.map((ele, idx) => {
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
                <FrequentQuestions FaqTableData={compHardwareFAQ} heading={"FAQ for QueueBuster Computer Hardware POS Billing Software"} />
            </div>

            <div className={styles.why_qb_section}>
                <div className={styles.section_heading}><h3>How QueueBuster Computer Hardware POS Billing Software Helps You Manage Your Store Better?</h3> <div className={styles.heading_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
                <div className={styles.why_container}>
                    <div className={styles.content_part}>
                        <p className={styles.why_qb_desc}>In the fast-paced world of electronic retail, efficiency and accuracy are paramount. QueueBuster Electronic Showroom Billing Software emerges as a transformative solution, addressing key challenges and revolutionizing the way electronic stores conduct business.</p><br />
                        {
                            CompHardwarewhyQB?.map((ele, idx) => {
                                return (
                                    <div key={ele?.id} className={styles.why_text} style={{ display: (ele?.id > 2 && !readMore) && "none" }}>
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

export default DesktopComputerHardware