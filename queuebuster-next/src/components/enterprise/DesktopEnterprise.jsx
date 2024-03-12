import React, { useEffect, useState } from 'react'
import { BlackCustomButton, ComponentHeader, CustomButton, GiveItTry, MarqueeComponentHomePage, OtherFeatureCompHomePage, Testmonial, WhiteCustomButton } from '../qbStrap'
import content from '../../language/ENGLISH.json';
import styles from '../../styles/enterprise/desktopEnterprise.module.css'
import Image from 'next/image';
import InfoBanner from './InfoBanner';
import NewIndustryCards from '../common/NewIndustryCards';
import { otherFeature, additionalFeatures, recommendedHardwareText, enterpriseFAQ } from '../../constants/enterprise.js';
import { ClientsArr1, testimonialData, videoTestimonial } from '../../constants/common';
import { OurPartners } from '../homePage/OurPartners';
import OurRecommendedHardware from '../homePage/OurRecommendedHardware';
import TestimonialSection from '../common/TestimonialSection';
import dynamic from "next/dynamic";
import Router from 'next/router';
import Link from 'next/link';
import { useIsInViewport } from '@/utils';
import ReactTyped from 'react-typed';
import PersonalisedDemoBanner from '../common/PersonalisedDemoBanner';
import IndustryFeatures from '../common/IndustryFeatures';
import BlueFoldBanner from '../common/BlueFoldBanner';
import FrequentQuestions from '../homePage/FrequentQuestions';
import TrustFactor from '../common/TrustFactor';
import VerificationForm from '../common/VerificationForm';
import VerificationPopup from '../modals/VerificationPopup';
import GlimpsesComponent from '../common/GlimpsesComponent';
import { glimpses } from '@/constants/industry';
import Verification from '../modals/Verification';


const DesktopEnterpriseForm = dynamic(() => import('../enterpriseForm/DesktopEnterpriseForm'))

const DesktopEnterprise = () => {
    const { enterpriseSubPara } = content.enterpriseForm;
    const { cardDataButton2 } = content.pricing;
    const { contatcSales, commonOurPartners, homePageOurRecomDesc } = content;
    const { integratedOmnichannel, bigger, smarter, greater, partneredWithBestCompanies, supportedHardware } = content.enterprise;
    const { ourClient, trustedBy65ThMerchants } = content.qbStrap
    const { testimonialHeadText } = content.testimonial
    const { industriesWeServe } = content.features
    const { giveitTryHeading, giveitTryDesc } = content.retail

    const [caseStudyModal, setCaseStudyModal] = useState(false);
    const [demoModal, setDemoModal] = useState(false);
    const [formHeading, setHeading] = useState("Book your free demo now!")

    const [selectedFeature, setSelectedFeature] = useState({
        title: 'Business Optimization',
        img: '/assets/Enterprise/Business-Optimisation.webp',
        ht: '45rem',
        wt: '45rem'
    });

    const [userVerified, setUserVerified] = useState(false);

    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };


    return (
        <>
            <Verification isOpen={caseStudyModal} closeModal={() => setCaseStudyModal(false)} btnText="Download" />
            <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
            <div className={styles.section1}>
                <div className={styles.leftSide}>
                    <h1 className={styles.enterpriseHeading}>{integratedOmnichannel} <ReactTyped strings={[bigger, smarter, greater]} typeSpeed={200} loop /></h1>
                    <p className={styles.enterprisePara}>{enterpriseSubPara}</p>
                    <div className={styles.btn_container}>
                        <Link href='#enterpriseForm' onClick={(e) => handleScroll(e)}>
                            {/* <CustomButton
                                text={contatcSales}
                                styles={{
                                    backgroundColor: "#2A6AB4",
                                    height: "4.5rem",
                                    width: "12.5rem",
                                    marginRight: "1rem",
                                    marginTop: "2rem",
                                    border: `solid #2A6AB4`,
                                    color: "#FFFFFF",
                                    fontWeight: "600",
                                    fontSize: "1.3rem",
                                }}
                            /> */}
                            <BlackCustomButton text={contatcSales} style={{ padding: "0 2rem" }} />
                        </Link>
                    </div>
                </div>
                <div className={styles.sideImage}>
                    <Image src='/assets/Enterprise/hero-img.png' alt='enterprise page side image' fill />
                </div>
            </div>

            <ComponentHeader
                title={ourClient}
                desStyle={{ width: "45rem" }}
            />
            <div className={styles.marqueeContainerHomePage}>
                <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
            </div>

            <div className={styles.features_section}>
                <div className={styles.section_heading}><h3>Modules Covered</h3><div className={styles.heading_stroke} style={{ width: '10rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <IndustryFeatures features={otherFeature} cardMaxHeight="25rem" />
            </div>

            <div className={styles.keyfeatures_section}>
                <div className={styles.section_heading}><h3>Other Key Features</h3><div className={styles.heading_stroke} style={{ width: '10rem' }}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <div className={styles.keyfeatures_content}>
                    <div className={styles.text_container}>
                        {
                            additionalFeatures?.map((ele) => {
                                return (
                                    <div onClick={() => (setSelectedFeature({ title: ele?.feature, img: ele?.image, ht: ele?.height, wt: ele?.width }))}>
                                        <div className={`${styles.topic_container} ${selectedFeature?.title === ele?.feature ? styles.show_border : styles.hide_border}`}>
                                            <div className={styles.feature_icon}><Image src={ele?.icon} alt='icon' fill /></div>
                                            <h4 className={styles.feature_heading}>{ele?.feature}</h4>
                                        </div>
                                        <p className={selectedFeature?.title === ele?.feature ? styles.show : styles.hide}>{ele?.featureDesc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.img_container}>
                        <div className={styles.feature_img} style={{ height: selectedFeature?.ht, width: selectedFeature?.wt }}><Image src={selectedFeature?.img} alt='feature related image' fill /></div>
                    </div>
                </div>
            </div>

            <div className={styles.industries_section}>
                <div className={styles.section_heading}><h3>{industriesWeServe}</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
                <NewIndustryCards />
            </div>

            <div className={styles.testimonial_section}>
                <div className={styles.section_heading}><h3>Glimpses Of Success</h3><div className={styles.heading_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
                <GlimpsesComponent glimpses={glimpses} setCaseStudyModal={setCaseStudyModal} caseStudyModal={caseStudyModal} />
            </div>

            <OurRecommendedHardware
                title={supportedHardware}
                description={homePageOurRecomDesc}
                recommendedHardwareText={recommendedHardwareText}
            />
            <OurPartners title={commonOurPartners} description={partneredWithBestCompanies} />

            <div className={styles.blue_fold_section}>
                <BlueFoldBanner
                    img={'/assets/Enterprise/blue-fold.webp'}
                    imgHeight='40rem'
                    imgWidth='52rem'
                    heading={'Manage Online & Offline Store from a Single App'}
                    desc={'Now streamline all your online, offline store sales from single dashboard and observe the channel-wise growth.'}
                    setDemoModal={setDemoModal}
                    setHeading={setHeading}
                />
            </div>

            <InfoBanner />
            <div className={styles.testimonial_section}>
                <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
                <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
            </div>

            <div className={styles.give_it_try_section}>
                <GiveItTry
                    heading={giveitTryHeading}
                    description={giveitTryDesc}
                    image={"/assets/Restaurant/restaurantMerchant.webp"}
                    styles={{ bottom: "-4.2rem", right: "-16.5rem", height: "54rem", width: '72rem' }}
                    containerStyles={{ margin: "0 7rem 8.5rem 7rem", background: 'none' }}
                />
            </div>

            <TrustFactor />

            <FrequentQuestions FaqTableData={enterpriseFAQ} heading={'FAQs for Enterprise POS Solution'} />

            <div id='enterpriseForm'>
                {
                    userVerified ? <DesktopEnterpriseForm usedIn='enterprise page' verified={userVerified} /> : <VerificationForm setUserVerified={setUserVerified} />
                }
            </div>
            <div className={styles.demo_banner_section}>
                <PersonalisedDemoBanner setDemoModal={setDemoModal} setHeading={setHeading} />
            </div>

        </>
    )
}

export default DesktopEnterprise