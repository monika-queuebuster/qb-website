import React, { useEffect, useState } from 'react'
import styles from '../../styles/D2C/MobileD2C.module.css';
import Image from 'next/image';
// import ReactTyped from 'react-typed';
import { BlackCustomButton, MarqueeComponentHomePage, TransparentCustomButton, WhiteCustomButton } from '../qbStrap';
import { ClientsArr1, testimonialData, videoTestimonial, D2CFAQ } from '@/constants/common';
import content from '../../language/ENGLISH.json';
import ThreeStepForm from '../common/ThreeStepForm';
import { useRouter } from 'next/router';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobilePDBanner from '../common/MobilePDBanner';
import FAQmobile from '../Industry/FAQ_mobile';
import MobileTestimonialSection from '../common/MobileTestimonialSection';
import { MobileOurPartners } from '../homePage/MobileOurPartners';
import VerificationPopup from '../modals/VerificationPopup';


gsap.registerPlugin(ScrollTrigger);


const MobileD2C = () => {
  const { commonMarqueTitle, commonOurPartners } = content;
  const { testimonialHeadText } = content.testimonial;
  const router = useRouter();

  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.ecommerce_img3}`,
      start: "50% bottom",
      // end: "top top",
      onEnter: () => gsap.to(`.${styles.ecommerce_img3}`, { width: "6.31rem", height: "14.37rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.ecommerce_img3}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.ecommerce_img3}`, { width: "6.31rem", height: "14.37rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.ecommerce_img3}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.ecommerce_img4}`,
      start: "50% bottom",
      // end: "top top",
      onEnter: () => gsap.to(`.${styles.ecommerce_img4}`, { width: "10.87763rem", height: "12.74269rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.ecommerce_img4}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.ecommerce_img4}`, { width: "10.87763rem", height: "12.74269rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.ecommerce_img4}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.ecommerce_img5}`,
      start: "50% bottom",
      // end: "top top",
      onEnter: () => gsap.to(`.${styles.ecommerce_img5}`, { width: "8.5625rem", height: "2.1875rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.ecommerce_img5}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.ecommerce_img5}`, { width: "8.5625rem", height: "2.1875rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.ecommerce_img5}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.ecommerce_img6}`,
      start: "50% bottom",
      // end: "top top",
      onEnter: () => gsap.to(`.${styles.ecommerce_img6}`, { width: "9.875rem", height: "2.1875rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.ecommerce_img6}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.ecommerce_img6}`, { width: "9.875rem", height: "2.1875rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.ecommerce_img6}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  // ----container 2----
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.omnichannel_img2}`,
      start: "bottom 90%",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.omnichannel_img2}`, { width: "12.8015rem", height: "6.25rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.omnichannel_img2}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.omnichannel_img2}`, { width: "19.8015rem", height: "9.25rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.omnichannel_img2}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.omnichannel_img3}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.omnichannel_img3}`, { width: "21.625rem", height: "12.5625rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.omnichannel_img3}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.omnichannel_img3}`, { width: "21.625rem", height: "12.5625rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.omnichannel_img3}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.omnichannel_img4}`,
      start: "bottom 90%",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.omnichannel_img4}`, { width: "9.694rem", height: "2.622rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.omnichannel_img4}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.omnichannel_img4}`, { width: "9.694rem", height: "2.622rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.omnichannel_img4}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.omnichannel_img5}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.omnichannel_img5}`, { height: "2.68rem", width: "7.91rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.omnichannel_img5}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.omnichannel_img5}`, { height: "2.68rem", width: "7.91rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.omnichannel_img5}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.omnichannel_img6}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.omnichannel_img6}`, { width: "8.36944rem", height: "2.30881rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.omnichannel_img6}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.omnichannel_img6}`, { width: "8.36944rem", height: "2.30881rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.omnichannel_img6}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  // ---container 3---

  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.wms_img2}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.wms_img2}`, { width: "12.375rem", height: "8.0625rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.wms_img2}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.wms_img2}`, { width: "12.375rem", height: "8.0625rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.wms_img2}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.wms_img3}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.wms_img3}`, { width: "24.8125rem", height: "8.5rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.wms_img3}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.wms_img3}`, { width: "24.8125rem", height: "8.5rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.wms_img3}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.wms_img4}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.wms_img4}`, { width: "28.125rem", height: "4.60663rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.wms_img4}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.wms_img4}`, { width: "28.125rem", height: "4.60663rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.wms_img4}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  // ----container 4----
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.invoice_img2}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.invoice_img2}`, { width: "32.833rem", height: "6.340rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.invoice_img2}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.invoice_img2}`, { width: "32.833rem", height: "6.340rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.invoice_img2}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })
  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.invoice_img3}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.invoice_img3}`, { width: "7.937rem", height: "4.187rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.invoice_img3}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.invoice_img3}`, { width: "7.937rem", height: "4.187rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.invoice_img3}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  useEffect(() => {
    const pin = ScrollTrigger.create({
      trigger: `.${styles.invoice_img4}`,
      start: "bottom bottom",
      end: "top top",
      onEnter: () => gsap.to(`.${styles.invoice_img4}`, { width: "15rem", height: "11.087rem", duration: 0.5 }),
      onLeave: () => gsap.to(`.${styles.invoice_img4}`, { height: 0, width: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(`.${styles.invoice_img4}`, { width: "15rem", height: "11.087rem", duration: 0.5 }),
      onLeaveBack: () => gsap.to(`.${styles.invoice_img4}`, { height: 0, width: 0, duration: 0.5 }),
    })
    return () => {
      pin.kill()
    }
  })

  const [demoModal, setDemoModal] = useState(false);
  const [formHeading, setHeading] = useState("Book your free demo now!")
  const { heroDesc } = content.d2c

  return (
    <>
      <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} mobileView={true} />
      <div className={styles.stack_container}>
        <div className={styles.stack1}></div>
        <div className={styles.stack2}></div>
        <div className={styles.hero_section}>
          <div className={styles.text_container}>
            <h1>
              <span className={styles.small_heading}>POS Solution for D2C Brands</span><br /> enabling &nbsp;
              {/* <span className={styles.bold_heading}><ReactTyped strings={["e-Commerce", "ERP", "WMS"]} typeSpeed={200} loop /></span> */}
            </h1>
            <p className={styles.page_desc}>{heroDesc}</p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <WhiteCustomButton text="Get Free Demo" style={{ bordeRadius: '0.3rem', padding: '0 2rem', marginTop: '2.5rem' }} onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marquee_section}>
        <div className={styles.section_heading}><h3>{commonMarqueTitle}</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
        <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
      </div>

      <div className={styles.feature_rich}>
        <div className={styles.feature_stack1}></div>
        <div className={styles.feature_stack2}></div>
        <div className={styles.feature_stack3}>
          <div className={styles.section_heading}><h3>Feature Rich, Future Ready</h3><div className={styles.heading_stroke} style={{ width: '22rem' }}><Image src='/assets/industry/restaurant/features_hl.svg' alt='stroke' fill /></div></div>
          <div className={styles.feature_rich_img_container}><div className={styles.feature_rich_img}><Image src="/assets/d2c/feature-rich-mobile-img.svg" alt='feature rich future ready' fill /></div></div>
        </div>
      </div>

      <div className={styles.stacked_container}>
        <div className={styles.container3} style={{ background: "#FFF6E1" }}>
          <div className={styles.left_container}>
            <h4 className={styles.container_heading}>POS Integration with e-Commerce Platforms</h4>
            <div className={styles.right_container} style={{ marginBottom: "3rem" }}>
              <div className={styles.ecommerce_img1}><Image src="/assets/d2c/ecommerce-img1.webp" alt="ecommerce-img1" fill /></div>
              <div className={styles.ecommerce_img2}><Image src="/assets/d2c/ecommerce-img2.webp" alt="ecommerce-img2" fill /></div>
              <div className={styles.ecommerce_img3}><Image src="/assets/d2c/ecommerce-img3.svg" alt="ecommerce-img3" fill /></div>
              <div className={styles.ecommerce_img4}><Image src="/assets/d2c/ecommerce-img4.svg" alt="ecommerce-img4" fill /></div>
              <div className={styles.ecommerce_img5}><Image src="/assets/d2c/shopify2.svg" alt="shopify" fill /></div>
              <div className={styles.ecommerce_img6}><Image src="/assets/d2c/wc2.svg" alt="woocommerce" fill /></div>
            </div>
            <p className={styles.container_desc}>QueueBuster POS streamlines your business by seamlessly integrating with your website or e-commerce platforms like Shopify, Woocommerce, etc., offering a unified online and in-store sales management platform.</p>
            <ul>
              <li style={{ borderLeft: "2px solid #FFBA00" }}><b>Effortless Synchronization</b><br /> Seamlessly sync inventory, orders, and customer information between your POS system and e-commerce platforms.</li>
              <li style={{ borderLeft: "2px solid #FFBA00" }}><b>Unified Sales Management</b><br /> Manage online and in-store sales from a single platform, ensuring consistency and efficiency.</li>
              <li style={{ borderLeft: "2px solid #FFBA00" }}><b>Real-Time Updates</b><br /> Gain real-time insights and updates across all sales channels for accurate inventory and order management.</li>
            </ul>

            <BlackCustomButton text="Contact Sales" style={{ padding: "0 2rem" }} onClick={() => router.push("/contact-sales")} />
          </div>
        </div>
        <div className={styles.container1} style={{ background: "#FFE097" }}></div>
        <div className={styles.container2} style={{ background: "#FFE9B6" }}></div>
      </div>

      <div className={styles.stacked_container}>
        <div className={styles.container3} style={{ background: "#E2FBFF" }}>
          <div className={styles.left_container}>
            <h4 className={styles.container_heading}>Omnichannel Integration with Marketplaces</h4>
            <div className={styles.right_container} style={{ marginBottom: "3rem" }}>
              <div className={styles.omnichannel_img1}><Image src="/assets/d2c/omnichannel-img1.webp" alt="omnichannel-img1" fill /></div>
              <div className={styles.omnichannel_img2}><Image src="/assets/d2c/omnichannel-img2.svg" alt="omnichannel-img1" fill /></div>
              <div className={styles.omnichannel_img3}><Image src="/assets/d2c/omnichannel-img3.svg" alt="omnichannel-img1" fill /></div>
              <div className={styles.omnichannel_img4}><Image src="/assets/d2c/flipkart-img.svg" alt="flipkart" fill /></div>
              <div className={styles.omnichannel_img5}><Image src="/assets/d2c/myntra-img.svg" alt="myntra" fill /></div>
              <div className={styles.omnichannel_img6}><Image src="/assets/d2c/amazon-img.svg" alt="amazon" fill /></div>
            </div>
            <p className={styles.container_desc}>QueueBuster POS revolutionizes your business by enabling seamless omnichannel integration with major marketplaces such as Amazon, Flipkart, and Myntra.  Our platform empowers you to synchronize inventory, streamline sales, and manage orders.</p>
            <ul>
              <li style={{ borderLeft: "2px solid #8AE4F6" }}><b>Centralized Operations</b><br /> Manage inventory, sales, and orders across Amazon, Flipkart, Myntra, and more from a single, unified platform.</li>
              <li style={{ borderLeft: "2px solid #8AE4F6" }}><b>Streamlined Processes</b><br /> Simplify operations by syncing inventory levels and automating order processing across multiple marketplaces.</li>
              <li style={{ borderLeft: "2px solid #8AE4F6" }}><b>Live Reports</b><br /> QueueBuster POS consolidates and present comprehensive data from various integrated marketplaces in a unified format.</li>
            </ul>

            <BlackCustomButton text="Contact Sales" style={{ padding: "0 2rem" }} onClick={() => router.push("/contact-sales")} />
          </div>
        </div>
        <div className={styles.container1} style={{ background: "#A1F3FF" }}></div>
        <div className={styles.container2} style={{ background: "#C2F7FF" }}></div>
      </div>

      <div className={styles.stacked_container}>
        <div className={styles.container3} style={{ background: "#F8ECFF" }}>
          <div className={styles.left_container}>
            <h4 className={styles.container_heading}>Warehouse Management Systems (WMS)</h4>
            <div className={styles.right_container} style={{ marginBottom: "3rem" }}>
              <div className={styles.wms_img1}><Image src="/assets/d2c/wms-img1.webp" alt="wms-img1" fill /></div>
              <div className={styles.wms_img2}><Image src="/assets/d2c/wms-img2.svg" alt="wms-img2" fill /></div>
              <div className={styles.wms_img3}><Image src="/assets/d2c/wms-img3.svg" alt="wms-img3" fill /></div>
              <div className={styles.wms_img4}><Image src="/assets/d2c/wms-img4.svg" alt="wms-img4" fill /></div>
            </div>
            <p className={styles.container_desc}>QueueBuster POS introduces a dynamic Warehouse Management System (WMS) that seamlessly integrates with your business operations. Our WMS optimizes inventory control, order fulfillment, and logistical efficiency, ensuring a streamlined workflow within your warehouse.</p>
            <ul>
              <li style={{ borderLeft: "2px solid #EEC9FF" }}><b>Dynamic Tracking</b><br /> Monitor inventory movement and stock levels in real time, facilitating precise inventory management.</li>
              <li style={{ borderLeft: "2px solid #EEC9FF" }}><b>Automated Updates</b><br /> Automate inventory updates across your warehouse, ensuring accuracy and reducing manual errors.</li>
              <li style={{ borderLeft: "2px solid #EEC9FF" }}><b>Efficient Order Processing</b><br /> Streamline order fulfillment processes for faster and more accurate shipment preparations, enhancing overall efficiency in the warehouse.</li>
            </ul>

            <BlackCustomButton text="Contact Sales" style={{ padding: "0 2rem" }} onClick={() => router.push("/contact-sales")} />
          </div>
        </div>
        <div className={styles.container1} style={{ background: "#E3B8FD" }}></div>
        <div className={styles.container2} style={{ background: "#EFD5FF" }}></div>
      </div>

      <div className={styles.stacked_container}>
        <div className={styles.container3} style={{ background: "#D6FFF5" }}>
          <div className={styles.left_container}>
            <h4 className={styles.container_heading}>e-Invoicing Solution</h4>
            <div className={styles.right_container} style={{ marginBottom: "3rem" }}>
              <div className={styles.invoice_img1}><Image src="/assets/d2c/invoice-img1.webp" alt="invoice-img1" fill /></div>
              <div className={styles.invoice_img2}><Image src="/assets/d2c/invoice-img2.svg" alt="invoice-img2" fill /></div>
              <div className={styles.invoice_img3}><Image src="/assets/d2c/invoice-img3.svg" alt="invoice-img3" fill /></div>
              <div className={styles.invoice_img4}><Image src="/assets/d2c/invoice-img4.svg" alt="invoice-img4" fill /></div>
            </div>
            <p className={styles.container_desc}>QueueBuster POS provides a robust solution to simplify accounting and tax management for businesses. Through automated GST return filing, E-invoicing, and E-way bills, our integration ensures compliance while streamlining tax-related processes.</p>
            <ul>
              <li style={{ borderLeft: "2px solid #4EEAC2" }}><b>Automated Tax Management</b><br /> Simplify GST return filing, E-invoicing, and E-way bills, ensuring compliance and reducing manual tax-related tasks.</li>
              <li style={{ borderLeft: "2px solid #4EEAC2" }}><b>Purchase Order Management</b><br /> Create and update purchase orders seamlessly within the ERP Grade system, optimizing inventory and procurement processes.</li>
              <li style={{ borderLeft: "2px solid #4EEAC2" }}><b>Integrated Efficiency</b><br /> Enjoy seamless integration between QueueBuster POS and ERP, enhancing overall business efficiency.</li>
            </ul>
            <BlackCustomButton text="Contact Sales" style={{ padding: "0 2rem" }} onClick={() => router.push("/contact-sales")} />
          </div>
        </div>
        <div className={styles.container1} style={{ background: "#8EF4DA" }}></div>
        <div className={styles.container2} style={{ background: "#B7F8E7" }}></div>
      </div>

      <div style={{ marginTop: "3rem" }}><MobileOurPartners title={commonOurPartners} /></div>

      <div style={{ margin: "3rem" }}><ThreeStepForm mobileView={true} /></div>

      <div style={{ margin: "3rem" }}>
        <div className={styles.section_heading}><h3>{testimonialHeadText}</h3> <div className={styles.heading_stroke}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
        <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
      </div>

      <div>
        <FAQmobile FaqTableData={D2CFAQ} heading={"FAQs for Retail POS Billing Software"} width={"auto"} />
      </div>

      <div style={{ margin: "3rem" }}><MobilePDBanner /></div>
    </>
  )
}

export default MobileD2C