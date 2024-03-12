import { inter_Regular, inter_Bold, inter_Medium } from "./Fonts";
import content from "../../language/ENGLISH.json";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/common/Footer.module.scss";
import { useState } from "react";

const FooterMobile = ({ setShowCertification }) => {
   const router = useRouter();
   const {
      commonAddress,
      commonEmail,
      footerContactEmail,
      commonPhone,
      footerPhoneNumber,
      footerSocial,
      footerAddress,
      footerAboutUs,
      footerCareers,
      footerHomepage,
      footerBlogs,
      footerContactUs,
      footerFrequentlyAskedQuestionsFAQ,
      footerPrivacyPolicy,
      footerTermsandConditions,
      footerPricing,
      footerBlog,
      footerMedia,
      helpAndSupport,
      footerPepperSpotlight,
      footerSamples,
      footerTOFUCMOSeries,
      footerElevateEvent,
      footerPOSApp,
      footerERPSolution,
      footerCloudApplication,
      footerTablet,
      footerAllInOnePOS,
      footerRetailPOS,
      footerRestaurantPOS,
      footerGroceryPOS,
      footerSpaSalonPOS,
      footerElectronicPOS,
      footerContactDesc,
      footerResources,
      homePageBusinessType,
      commonProducts,
      commonContact,
      footerContactNumber,
      footerCompany,
      footerHelpAndSupport,
      homePageQuickBill,
      homePageBilling,
      homePageInventory,
      homePageeStore,
      homePagekhata,
      homePageCRMandLoyalty,
      footerFAQs
   } = content;

   const [icons, setIcons] = useState(
      {
         twitter: "/assets/light-twitter.svg",
         linkedin: "/assets/light-linkedin.svg",
         instagram: "/assets/light-instagram.svg",
         facebook: "/assets/light-facebook.svg",
         youtube: "/assets/light-youtube.svg"
      }
   )

   let features = [
      homePageQuickBill,
      homePageBilling,
      homePageInventory,
      homePageeStore,
      homePagekhata,
      homePageCRMandLoyalty,
   ];
   const footerData = [
      {
         title: "Industry Types",
         content: [
            { name: 'Retail', link: '/Industries/retail-pos-billing-software' },
            { name: 'Restaurants', link: '/Industries/restaurant-pos-billing-software' },
            { name: 'Grocery', link: '/Industries/grocery-pos-billing-software' },
            { name: 'Electronics', link: '/Industries/electronic-pos-billing-software' },
            { name: 'Spa & Salon', link: '/Industries/spa-and-salon-pos-billing-software' },
         ],
      },
      {
         title: "Features",
         content: [
            { name: "Billing & Invoicing", link: '/features/billing-software' },
            { name: homePageInventory, link: '/features/inventory-management-software' },
            { name: homePageeStore, link: '/features/online-store' },
            { name: homePagekhata, link: '/features/khata-management-software' },
            { name: homePageCRMandLoyalty, link: '/features/customer-loyalty-program' },
            { name: "Digital Payments", link: '/features/digital-payment-software' },
            { name: "Cloud Dashboard", link: '/features/cloud-dashboard-management' },
         ],
      },
      {
         title: "Solutions",
         content: [
            // { name: 'mPOS', link: '/mPOS' },
            { name: 'Enterprise', link: '/enterprise-pos-solution' },
            { name: "All-in-One POS", link: '/all-in-one-pos-billing-software' },
            { name: "D2C POS Solutions", link: '/D2C-POS-Solutions' },
            // { name: 'e-Invoice', link: '/' },
         ]
      },
      {
         title: footerResources,
         content: [
            { name: 'Blog', link: 'https://blog.queuebuster.co/' },
            { name: 'Media', link: '/media' },
            { name: 'User Manaul', link: '/help' },
            { name: 'Privacy Policy', link: '/privacy' },
            { name: 'Terms and Conditions', link: '/terms-and-condition' },
         ],
      },
      {
         title: footerCompany,
         content: [
            { name: footerAboutUs, link: '/about-us' },
            { name: footerPricing, link: '/pricing' },
            { name: footerCareers, link: '/career' },
            { name: "Partners", link: '/' },
            { name: footerContactUs, link: '/contact-us' },
         ],
      },
   ];

   const footerSocialIcons = [
      { link: "https://twitter.com/QueueBusterPOS", image: "/assets/twitterNew.svg" },
      { link: "https://in.linkedin.com/company/queuebuster-pos", image: "/assets/linkedInNew.svg" },
      { link: "https://www.instagram.com/queuebuster_pos/", image: "/assets/instagramNew.svg" },
      { link: "https://www.facebook.com/queuebuster/", image: "/assets/faceBookNew.svg" },
      { link: "https://www.youtube.com/channel/UC28aqzrEBKvmuDNH7CMidhg", image: "/assets/youtubeNew.svg" },
   ];

   return (
      <div style={{ padding: "2.5rem 2.5rem 8rem 2.5rem", marginTop: "5rem" }}>
         <div style={{ height: '4rem', width: '25rem', position: 'relative' }}>
            <Image
               src="/assets/logo.svg"
               alt="queuebuster"
               onClick={() => router.push("/")}
               fill
            />
         </div>

         <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
            {footerData.map((item) => {
               return item.title == "Features" ? (
                  <div style={{ width: '140px' }}>
                     <div
                        className={`${inter_Bold.className}`}
                        style={{ paddingTop: "1.5rem", paddingBottom: "1rem" }}
                     >
                        {item.title}
                     </div>
                     {item.content.map((el) => (
                        <div
                           onClick={() => {
                              router.push(el?.link)
                           }}
                           style={{ color: "#5A5A5A", paddingTop: "0.5rem" }}
                        >
                           {el.name}
                        </div>
                     ))}
                  </div>
               ) : (
                  <div style={{ width: '140px' }}>
                     <div
                        className={`${inter_Bold.className}`}
                        style={{ paddingTop: "1.5rem", paddingBottom: "1rem" }}
                     >
                        {item.title}
                     </div>
                     {item.content.map((el) => {
                        return (
                           <Link href={el.link}>
                              <div style={{ color: "#5A5A5A", paddingTop: "0.5rem" }}>{el.name}</div>
                           </Link>
                        );
                     })}
                  </div>
               );
            })}
         </div>
         <div
            style={{
               marginTop: "1.5rem",
            }}
            className={inter_Bold.className}
         >
            {commonAddress}
         </div>
         <div
            className={`${inter_Regular.className}`}
            style={{ fontSize: "1.3rem", paddingTop: "0.5rem", color: "#5A5A5A" }}
         >
            Unit No. 401, 4th Floor, Pegasus One Tower,
            <br /> Plot No. A-10, Sector - 68, Noida, <br /> Uttar Pradesh-201307
         </div>

         <div style={{ margin: "2rem 0 1rem 0" }}>
            <div
               style={{
                  marginBottom: "0.5rem",
               }}
               className={inter_Bold.className}
            >
               {commonEmail}
            </div>
            <p className={styles.footer_email}>{footerContactEmail}</p>
            <div>
               <div className={inter_Bold.className}>
                  Contact
               </div>
               {/* <p className={styles.logoBox}>For Any Queries, Please contact us at</p> */}
               <p className={styles.contact_no}><span>Sales: </span><a href="tel:+91 78 76 180 180">+91 78 76 180 180</a></p>
               <p className={styles.contact_no}><span>Support: </span><a href="tel:+91 78 61 044 000">+91 78 61 044 000</a></p>
            </div>
         </div>
         <div className={styles.socialMediaIconBox}>
            {
               footerSocialIcons?.map((ele) => {
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
         <div className={styles.img_container} style={{ margin: '3rem 0' }}>
            <div className={styles.iso_img} onClick={() => setShowCertification(true)}><Image src='/assets/ISO.svg' alt="iso" fill /></div>
            <div className={styles.aicpa_img}><Image src='/assets/AICPA.webp' alt="iso" fill /></div>
            <Link href="https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos" target="_blank"><div className={styles.googleplay_btn}><Image src='/assets/google-play.svg' alt="google play btn" fill /></div></Link>
         </div>
         <div
            style={{ marginTop: "2rem", color: "#5a5a5a", fontSize: "1.4rem" }}
            className={inter_Medium.className}
         >
            {`Copyright © ${new Date().getFullYear()} DPD Technologies Pvt Ltd`}
         </div>
      </div>
   );
};

export default FooterMobile;
