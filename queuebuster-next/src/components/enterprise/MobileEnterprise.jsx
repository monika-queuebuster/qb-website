import React, { useEffect, useState } from 'react'
import { BlueCustomButton, MarqueeComponent } from '../qbStrap'
import content from '../../language/ENGLISH.json';
import styles from '../../styles/enterprise/mobileEnterprise.module.css'
import Image from 'next/image';
import NewIndustryCards from '../common/NewIndustryCards';
import { otherFeature, additionalFeatures, deviceData, enterpriseFAQ } from '../../constants/enterprise.js'
import { ClientsArr1, testimonialData, videoTestimonial } from '../../constants/common'
import dynamic from "next/dynamic";
import { inter_Bold } from '../common/Fonts';
import { MobileOurPartners } from '../homePage/MobileOurPartners';
import { RecommendedHardware } from '../mobileQbStrap';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import ReactTyped from 'react-typed';
import MobilePDBanner from '../common/MobilePDBanner';
import MobileTestimonialSection from '../common/MobileTestimonialSection';
import IndustryFeatures from '../common/IndustryFeatures';
import BlueFoldBanner from '../common/BlueFoldBanner';
import InfoBanner from './InfoBanner';
import GiveItTryMobile from '../Industry/GiveItTry_mobile';
import FAQmobile from '../Industry/FAQ_mobile';
import TrustFactor from '../common/TrustFactor';
import VerificationForm from '../common/VerificationForm';
import VerificationPopup from '../modals/VerificationPopup';

SwiperCore.use([Navigation]);

const MobileEnterpriseForm = dynamic(() => import('../enterpriseForm/MobileEnterpriseForm'))


const MobileEnterprise = () => {
  const { enterpriseSubPara } = content.enterpriseForm;
  const { cardDataButton2 } = content.pricing;
  const { contatcSales, commonOurPartners, homePageOurRecomDesc } = content;
  const { integratedOmnichannel, bigger, smarter, greater, modulesCovered, barText, otherKeyFeatures, partneredWithBestCompanies, supportedHardware } = content.enterprise;
  const { ourClient, trustedBy65ThMerchants } = content.qbStrap
  const { testimonialHeadText } = content.testimonial
  const { industriesWeServe } = content.features
  const { giveitTryHeading, giveitTryDesc } = content.retail

  const [demoModal, setDemoModal] = useState(false);
  const [formHeading, setHeading] = useState("Book your free demo now!")

  const [selectedFeature, setSelectedFeature] = useState('Business Optimization');
  const [featureImg, setFeatureImg] = useState('/assets/Enterprise/Business Optimisation.png');

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
      <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
      <div className={styles.mobile_section1}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.sideImage}>
            <Image src='/assets/Enterprise/hero-img.png' alt='enterprise page side image' fill />
          </div>
        </div>
        <div className={styles.leftSide}>
          <h1 className={styles.enterpriseHeading}>{integratedOmnichannel} <ReactTyped strings={[bigger, smarter, greater]} typeSpeed={200} loop /></h1>
          <p className={styles.enterprisePara}>{enterpriseSubPara}</p>
          <div className={styles.btn_container}>
            <Link href='#enterpriseForm' onClick={(e) => handleScroll(e)} style={{ width: '100%' }}>
              <BlueCustomButton text={contatcSales} style={{ padding: '0 2rem' }} onClick={() => router.push('/get-free-demo')} />
            </Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "6.25rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            className={`${inter_Bold.className}`}
            style={{ fontSize: "2.5rem", textAlign: "center" }}
          >
            {ourClient}
          </h2>
        </div>
        <div>
          <MarqueeComponent ClientsArr={ClientsArr1} margin={"3rem 0 0 0"} header={true} />
        </div>
      </div>

      <div className={styles.features_section}>
        <div className={styles.features_header}><h3>Modules Covered</h3><div className={styles.features_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
        <IndustryFeatures features={otherFeature} />
      </div>

      <div className={styles.keyfeatures_section}>
        <div className={styles.features_header}><h3>Other Key Features</h3><div className={styles.features_stroke}><Image src='/assets/industry/restaurant/features_hl 2.svg' alt='stroke' fill /></div></div>
        {/* <div className={styles.heading_text}>
          <h4>We are more than a POS.</h4>
          <p>We are an all-in-one solution creating a tailored experience for your restaurant needs.</p>
        </div> */}
        <div className={styles.keyfeatures_content}>
          <div className={styles.text_container}>
            {
              additionalFeatures?.map((ele) => {
                return (
                  <div onClick={() => (setFeatureImg(ele?.image), setSelectedFeature(ele?.feature))}>
                    <div className={`${styles.topic_container} ${selectedFeature === ele?.feature ? styles.show_border : styles.hide_border}`}>
                      <div className={styles.feature_icon}><Image src={ele?.icon} alt='icon' fill /></div>
                      <h4 className={styles.feature_heading}>{ele?.feature}</h4>
                    </div>
                    <div className={selectedFeature === ele?.feature ? styles.show : styles.hide}>
                      <div className={`${styles.img_container}`}>
                        <div className={styles.feature_img}><Image src={ele?.image} alt='feature related image' fill /></div>
                      </div>
                      <p className={styles.desc}>{ele?.featureDesc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className={styles.mobile_industries_section}>
        <div className={styles.section_heading}><h3>{industriesWeServe}</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
        <NewIndustryCards view='mobile' />
      </div>

      <div style={{ marginTop: "6.3rem" }}>
        <RecommendedHardware
          deviceData={deviceData}
          recommendedHardwareText={homePageOurRecomDesc}
          headingText={supportedHardware}
        />
      </div>

      <div>
        <MobileOurPartners title={commonOurPartners} description={partneredWithBestCompanies} />
      </div>

      <div className={styles.blue_fold_section}>
        <BlueFoldBanner
          img={'/assets/Enterprise/blue-fold.webp'}
          imgHeight='26rem'
          imgWidth='33rem'
          heading={'Manage Online & Offline Store from a Single App'}
          desc={'Now streamline all your online, offline store sales from single dashboard and observe the channel-wise growth.'}
          setDemoModal={setDemoModal}
          setHeading={setHeading}
        />
      </div>

      <InfoBanner mobileView={true} />

      <div className={styles.mobile_testimonial_section}>
        <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
        <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
      </div>

      <GiveItTryMobile
        heading={giveitTryHeading}
        description={giveitTryDesc}
        image={"/assets/Restaurant/restaurantMerchant.webp"}
        styles={{ bottom: "-4.2rem", right: "-16.5rem", height: "54rem", width: '72rem' }}
        containerStyles={{ margin: "0 7rem 8.5rem 7rem", background: 'none' }}
      />

      <TrustFactor />

      <div style={{ margin: '4rem 0rem' }}>
        <FAQmobile FaqTableData={enterpriseFAQ} width={"auto"} heading={'FAQs for Enterprise POS Solution'} />
      </div>

      <div id='enterpriseForm'>
        {
          userVerified ? <MobileEnterpriseForm usedIn='enterprise page' verified={userVerified} /> : <VerificationForm setUserVerified={setUserVerified} mobileView={true} />
        }
      </div>

      <div className={styles.section_five}>
        <MobilePDBanner btnText='Contact Sales' setDemoModal={setDemoModal} setHeading={setHeading} />
      </div>
    </>
  )
}

export default MobileEnterprise