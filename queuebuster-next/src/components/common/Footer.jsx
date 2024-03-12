import styles from "../../styles/common/Footer.module.scss";
import Image from "next/image";
import { inter_Bold, inter_Medium, inter_Regular } from "../common/Fonts";
import FooterMobile from "./FooterMobile";
import { useEffect, useState } from "react";
import content from "../../language/ENGLISH.json";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = ({ setShowCertification }) => {
   const router = useRouter();
   const {
      commonAddress,
      commonEmail,
      footerContactEmail,
      footerAboutUs,
      footerCareers,
      footerContactUs,
      footerPricing,
      footerResources,
      footerCompany,
      homePageInventory,
      homePageeStore,
      homePagekhata,
      homePageCRMandLoyalty,
   } = content;

   let company = [
      { name: footerAboutUs, link: '/about-us' },
      { name: footerPricing, link: '/pricing' },
      { name: footerCareers, link: '/career' },
      { name: "Partners", link: '/' },
      { name: footerContactUs, link: '/contact-us' },
   ]

   let solutions = [
      // { name: 'mPOS', link: '/mPOS' },
      { name: 'Enterprise', link: '/enterprise-pos-solution' },
      { name: "All-in-One POS", link: '/all-in-one-pos-billing-software' },
      { name: "D2C POS Solutions", link: '/D2C-POS-Solutions' },
      // { name: 'e-Invoice', link: '/' },
   ]

   let resources = [
      { name: 'Blog', link: 'https://blog.queuebuster.co/' },
      { name: 'Media', link: '/media' },
      { name: 'User Manual', link: '/help' },
      { name: 'Privacy Policy', link: '/privacy' },
      { name: 'Terms and Conditions', link: '/terms-and-condition' },
   ]

   let BusinessTypes = [
      { name: 'Retail', link: '/Industries/retail-pos-billing-software' },
      { name: 'Restaurants', link: '/Industries/restaurant-pos-billing-software' },
      { name: 'Grocery', link: '/Industries/grocery-pos-billing-software' },
      { name: 'Electronics', link: '/Industries/electronic-pos-billing-software' },
      { name: 'Spa & Salon', link: '/Industries/spa-and-salon-pos-billing-software' },
   ]

   let products = [
      { name: "Billing & Invoicing", link: '/features/billing-software' },
      { name: homePageInventory, link: '/features/inventory-management-software' },
      { name: homePageeStore, link: '/features/online-store' },
      { name: homePagekhata, link: '/features/khata-management-software' },
      { name: homePageCRMandLoyalty, link: '/features/customer-loyalty-program' },
      { name: "Digital Payments", link: '/features/digital-payment-software' },
      { name: "Cloud Dashboard", link: '/features/cloud-dashboard-management' },
   ]

   let socialIcons = [
      { link: "https://twitter.com/QueueBusterPOS", image: "/assets/twitterNew.svg" },
      { link: "https://in.linkedin.com/company/queuebuster-pos", image: "/assets/linkedInNew.svg" },
      { link: "https://www.instagram.com/queuebuster_pos/", image: "/assets/instagramNew.svg" },
      { link: "https://www.facebook.com/queuebuster/", image: "/assets/faceBookNew.svg" },
      { link: "https://www.youtube.com/channel/UC28aqzrEBKvmuDNH7CMidhg", image: "/assets/youtubeNew.svg" },
   ]

   return (
      <>
         <div className={switchStyles.desktop}>
            <div className={styles.mainDiv}>
               <div className={`${inter_Regular.className} ${styles.footerBox} `}>
                  <div className={styles.logoBox}>
                     <div className={styles.logo_container}>
                        <Image
                           src="/assets/logo.svg"
                           alt="queuebuster"
                           onClick={() => router.push("/")}
                           fill
                        />
                     </div>
                     <div>
                        <div className={inter_Bold.className}>
                           {commonEmail}
                        </div>
                        <p className={styles.footer_email}>{footerContactEmail}</p>
                     </div>
                     <div>
                        <div className={inter_Bold.className}>
                           Contact
                        </div>
                        {/* <p className={styles.logoBox}>For Any Queries, Please contact us at</p> */}
                        <p className={styles.contact_no}><span>Sales: </span><a href="tel:+91 78 76 180 180">+91 78 76 180 180</a></p>
                        <p className={styles.contact_no}><span>Support: </span><a href="tel:+91 78 61 044 000">+91 78 61 044 000</a></p>
                     </div>
                     <div>
                        <div className={inter_Bold.className}>
                           {commonAddress}
                        </div>
                        <p>
                           Unit No. 401, 4th Floor, Pegasus One Tower,
                           <br /> Plot No. A-10, Sector - 68, Noida, <br /> Uttar Pradesh-201307
                        </p>
                     </div>
                     <div className={styles.socialMediaIconBox}>
                        {
                           socialIcons?.map((ele) => {
                              return (
                                 <Link
                                    href={ele?.link}
                                    target={"_blank"}
                                 >
                                    <div className={styles.icon_size}><Image src={ele?.image} alt="twitter" fill /></div>
                                 </Link>
                              )
                           })
                        }
                     </div>
                  </div>
                  {/* new footer code */}
                  <div className={styles.mainRightFooter}>
                     <div className={styles.footerFlexBox}>
                        <div>
                           <h4 className={inter_Bold.className}>Industry Types</h4>
                           {
                              BusinessTypes?.map((ele) => {
                                 return (
                                    <div key={ele?.name}>
                                       <Link className={inter_Regular.className} href={ele?.link}>
                                          {ele?.name}
                                       </Link>
                                    </div>
                                 )
                              })
                           }
                        </div>
                        <div>
                           <h4 className={inter_Bold.className}>Features</h4>
                           {
                              products?.map((ele) => {
                                 return (
                                    <div key={ele?.name}>
                                       <Link className={inter_Regular.className} href={ele?.link}>
                                          {ele?.name}
                                       </Link>
                                    </div>
                                 )
                              })
                           }
                        </div>
                        <div>
                           <h4 className={inter_Bold.className}>Solutions</h4>
                           {
                              solutions?.map((ele) => {
                                 return (
                                    <div key={ele?.name}>
                                       <Link className={inter_Regular.className} href={ele?.link}>
                                          {ele?.name}
                                       </Link>
                                    </div>
                                 )
                              })
                           }
                        </div>
                        <div>
                           <h4 className={inter_Bold.className}>{footerResources}</h4>
                           {
                              resources?.map((ele) => {
                                 return (
                                    <div key={ele?.name}>
                                       <Link className={inter_Regular.className} href={ele?.link}>
                                          {ele?.name}
                                       </Link>
                                    </div>
                                 )
                              })
                           }
                        </div>
                        <div>
                           <h4 className={inter_Bold.className}>{footerCompany}</h4>
                           {
                              company?.map((ele) => {
                                 return (
                                    <div key={ele?.name}>
                                       <Link className={inter_Regular.className} href={ele?.link}>
                                          {ele?.name}
                                       </Link>
                                    </div>
                                 )
                              })
                           }
                        </div>
                     </div>
                     <div className={styles.footer_icons}>
                        <div className={styles.img_container}>
                           <Link href="https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos" target="_blank"><div className={styles.googleplay_btn}><Image src='/assets/google-play.svg' alt="google play btn" fill /></div></Link>
                           <div className={styles.iso_img} onClick={() => setShowCertification(true)}><Image src='/assets/ISO.svg' alt="iso" fill /></div>
                           <div className={styles.aicpa_img}><Image src='/assets/AICPA.webp' alt="iso" fill /></div>
                        </div>
                     </div>
                  </div>
               </div>
               <p style={{ marginTop: "5rem", color: "#5a5a5a", fontSize: "1.4rem", marginBottom: '0', textAlign: 'center', }} className={inter_Medium.className} >
                  {`Copyright © ${new Date().getFullYear()} DPD Technologies Pvt Ltd`}
               </p>
            </div>
         </div >
         <div className={switchStyles.mobile}>
            <FooterMobile setShowCertification={setShowCertification} />
         </div>
      </>
   );
};

export default Footer;
