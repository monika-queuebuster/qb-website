import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Error.module.css";
import Image from "next/image";
import NewIndustryCards from "@/components/common/NewIndustryCards";
import content from '../language/ENGLISH.json'
import TestimonialSection from "@/components/common/TestimonialSection";
import { testimonialData, videoTestimonial } from '@/constants/common';
import { BlueCustomButton } from "@/components/qbStrap";
import PersonalisedDemoBanner from "@/components/common/PersonalisedDemoBanner";
import MobileTestimonialSection from "@/components/common/MobileTestimonialSection";
import MobilePDBanner from "@/components/common/MobilePDBanner";


const Custom404 = ({mobileView}) => {
  const router = useRouter();

  // useEffect(() => {
  //   const redirectTimer = setTimeout(() => {
  //     router.push("/");
  //   }, 2000);

  //   return () => clearTimeout(redirectTimer);
  // }, []);
  const { testimonialHeadText } = content.testimonial

  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.error_image}>
          <Image src="/assets/error.webp" alt="error" fill />
        </div>
        <p className={styles.error_text}>
          Don’t worry, you’re totally on the shortest way to business success. Try our other exciting features while we fix this for you.
        </p>
        <BlueCustomButton text='Visit queuebuster.co' style={{padding: '0 2rem'}} onClick={()=>router.push('/')} />
      </div>
      <div className={styles.industries_section}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><h3 className={styles.industry_heading}>Industries You Might be Looking for</h3> <div className={styles.industries_stroke_img}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
        <NewIndustryCards />
      </div>
      <div className={`${mobileView ? styles.mobile_testimonial_section : styles.testimonial_section}`}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><h3 className={styles.testimonial_heading}>{testimonialHeadText}</h3> <div className={styles.testimonials_stroke_img}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
        {
          mobileView ? <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} /> : <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
        }
      </div>
      <div className={`${mobileView ? styles.mobile_demo_banner_section : styles.demo_banner_section}`}>
        {
          mobileView ? <MobilePDBanner /> : <PersonalisedDemoBanner />
        }
      </div>
    </>
  );
};

export default Custom404;
