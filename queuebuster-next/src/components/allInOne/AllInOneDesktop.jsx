import styles from "../../styles/allInOnePOS/allInOnePOS.module.css";
import { inter_Bold, inter_Regular } from "@/components/common/Fonts";
import React, { useEffect, useState } from "react";
import content from "../../language/ENGLISH.json";
import {
   ComponentHeader,
   ContactUsHomePage,
   CustomButton,
   Iframe,
   IndustryWiseCard,
   MarqueeComponentHomePage,
   OurKeyFeatureHomePage,
   RightOurKeyFeatureHomePage,
   SwiperForCustomerFeedback,
   GiveItTry,
   Testmonial,
} from "../qbStrap";
import BusinessSuperApp from "../Other Pages Components/BusinessSuperApp";
import ContactUsForm from "../homePage/ContactUsForm";
import FrequentQuestions from "../homePage/FrequentQuestions";
import Image from "next/image";
import { testimonialData, videoTestimonial } from "@/constants/common";
import TestimonialSection from "../common/TestimonialSection";
import TrustFactor from "../common/TrustFactor";
const AllInOneDesktop = () => {
   const {
      topcardH,
      topcardH1,
      topCardHDesc,
      topCardcudtomer,
      topCardIndusrty,
      topCardYears,
      Integrations,
      Downloads,
      startinjustthreesimplesteps,
      startinjustthreesimplestepsDesc,
      downloadtheApp,
      downloadtheAppDesc,
      signupforfree,
      signupforfreeDesc,
      setupyourPOS,
      setupyourPOSDesc,
      businessTypeDesc,
      giveItTryTitle,
   } = content.allInOne;
   const {
      commonGetFreeDemo,
      commonSignUp,
      contatcSales,
      homePageOurClientTitle,
      homePageOurClientDes,
      homePageReadyToGiveItAtryDesc,
      homePageBusinessType,
      homePageBusinessTypeDes,
   } = content;

   const { testimonialHeadText } = content.testimonial

   let keyFeaturearr = [
      {
         icon: "/assets/Key_feature_Icon_homePage/QuickBill.svg",
         title: "Quick Bill",
         placeholder1: "Placeholeder 1",
         placeholder2: "Placeholeder 2",
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/Billing.svg",
         title: "Billing",
         placeholder1: "Placeholeder 1",
         placeholder2: "Placeholeder 2",
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/InventoryManagement.svg",
         title: "Inventory Management",
         placeholder1: "Placeholeder 1",
         placeholder2: "Placeholeder 2",
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/CreditSales(khata).svg",
         title: "Credit Sales(Khata)",
         placeholder1: "Placeholeder 1",
         placeholder2: "Placeholeder 2",
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/Estore.svg",
         title: "eStore",
         placeholder1: "Placeholeder 1",
         placeholder2: "Placeholeder 2",
      },
      {
         icon: "/assets/Key_feature_Icon_homePage/CRM&Loyality.svg",
         title: "CRM & Loyalty",
         placeholder1: "Placeholeder 1",
         placeholder2: "Placeholeder 2",
      },
   ];
   let ClientsArr1 = [
      { imgSrc: "/assets/hul.webp", alText: "" },
      { imgSrc: "/assets/itc.webp", alText: "" },
      { imgSrc: "/assets/gullyNetwork.webp", alText: "" },
      { imgSrc: "/assets/heineken.webp", alText: "" },
      { imgSrc: "/assets/IRCTC.webp", alText: "" },
      { imgSrc: "/assets/cityWalk.webp", alText: "" },
      { imgSrc: "/assets/reshamandi.webp", alText: "" },
      { imgSrc: "/assets/candor.webp", alText: "" },
      { imgSrc: "/assets/taj.webp", alText: "" },
      { imgSrc: "/assets/mcd.webp", alText: "" },
      { imgSrc: "/assets/ZOHO.webp", alText: "" },
   ];
   let clientsArr2 = [
      { imgSrc: "/assets/ACTILION.webp", alText: "" },
      { imgSrc: "/assets/ADSR.webp", alText: "" },
      { imgSrc: "/assets/EPSON.webp", alText: "" },
      { imgSrc: "/assets/ESSAE.webp", alText: "" },
      { imgSrc: "/assets/EZETAP.webp", alText: "" },
      { imgSrc: "/assets/EZSWYPE.webp", alText: "" },
      { imgSrc: "/assets/GEIDEA.webp", alText: "" },
      { imgSrc: "/assets/GRAY MATTER.webp", alText: "" },
      { imgSrc: "/assets/GSP.webp", alText: "" },
      { imgSrc: "/assets/VERIFONE.webp", alText: "" },
   ];
   let clientsArr3 = [
      { imgSrc: "/assets/IMIN.webp", alText: "" },
      { imgSrc: "/assets/INGINICO.webp", alText: "" },
      { imgSrc: "/assets/MICROSOFT DYNAMICS.webp", alText: "" },
      { imgSrc: "/assets/MOSAMBEE.webp", alText: "" },
      { imgSrc: "/assets/MSWIPE.webp", alText: "" },
      { imgSrc: "/assets/NEWLAN AIC.webp", alText: "" },
      { imgSrc: "/assets/PAX.webp", alText: "" },
      { imgSrc: "/assets/PAYPAL.webp", alText: "" },
      { imgSrc: "/assets/PAYSWIFF.webp", alText: "" },
      { imgSrc: "/assets/TALLY.webp", alText: "" },
   ];
   let clientsArr4 = [
      { imgSrc: "/assets/PAYTM MLYAL.webp", alText: "" },
      { imgSrc: "/assets/PAYTM.webp", alText: "" },
      { imgSrc: "/assets/PAYU.webp", alText: "" },
      { imgSrc: "/assets/PINE LABS.webp", alText: "" },
      { imgSrc: "/assets/PLURAL.webp", alText: "" },
      { imgSrc: "/assets/POSIFLEX.webp", alText: "" },
      { imgSrc: "/assets/RAZORPAY.webp", alText: "" },
      { imgSrc: "/assets/SHOPIFY.webp", alText: "" },
      { imgSrc: "/assets/SUNMI.webp", alText: "" },
      { imgSrc: "/assets/SWIGGY.webp", alText: "" },
      { imgSrc: "/assets/ZOMATO.webp", alText: "" },
   ];
   return (
      <div>
         <div className={styles.AllInOneTopCard}>
            <div className={styles.mainDataDivInTopCard}>
               <div>
                  <div>
                     <h1 className={inter_Bold.className}>{topcardH}</h1>
                     <p className={inter_Regular.className}>{topcardH1}</p>
                  </div>
                  <div>
                     <p className={inter_Regular.className}>{topCardHDesc}</p>
                  </div>
                  <div className={styles.AllInOnetopCardBtns}>
                     <CustomButton
                        text={commonGetFreeDemo}
                        styles={{
                           backgroundColor: "#212121",
                           fontSize: "1.6rem",
                           border: `0.2rem solid #212121`,
                           fontWeight: "600",
                        }}
                        onClick={(e) => {
                           console.log(e);
                        }}
                     />
                  </div>
               </div>
               <div>
                  <div className={styles.groceryBillingImg}>
                     <Image
                        src="/assets/groceryBillingMc.webp"
                        alt="grocery billing machine"
                        fill
                     />
                  </div>
                  <div className={styles.mobileImg}><Image src="/assets/mobileIMg.webp" alt="mobile img" fill /></div>
                  <div className={styles.cards1}><Image src="/assets/card1.webp" alt="detergent" fill /></div>
                  <div className={styles.cards2}><Image src="/assets/card2.webp" alt="brown rice" fill /></div>
               </div>
            </div>
            <div className={styles.companyInfoData___}>
               <div>
                  <h4 className={inter_Bold.className}>65,000+</h4>
                  <p>{topCardcudtomer}</p>
               </div>
               <div>
                  <h4 className={inter_Bold.className}>5+</h4>
                  <p>{topCardIndusrty}</p>
               </div>
               <div>
                  <h4 className={inter_Bold.className}>6+</h4>
                  <p>{topCardYears}</p>
               </div>
               <div>
                  <h4 className={inter_Bold.className}>50+</h4>
                  <p>{Integrations}</p>
               </div>
               <div>
                  <h4 className={inter_Bold.className}>100K+</h4>
                  <p>{Downloads}</p>
               </div>
            </div>
         </div>
         <IndustryWiseCard
            color={"#F9D878"}
            image={"/assets/BusinessTypes.gif"}
            recipt={"/assets/restaurantRecipt.webp"}
            industry={homePageBusinessType}
            industryDetail={businessTypeDesc}
            logoText={"Business Types"}
            subHeading={"Streamline Business with ease"}
         />
         <div style={{ marginTop: "12rem" }}>
            <BusinessSuperApp />
         </div>
         <ComponentHeader
            title={homePageOurClientTitle}
            barText={homePageOurClientDes}
            barBg_Color={"#F9D878"}
         />
         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage ClientsArr={ClientsArr1} />
         </div>
         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage direction={"left"} ClientsArr={clientsArr2} />
         </div>
         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage ClientsArr={clientsArr3} />
         </div>
         <div className={styles.marqueeContainerHomePage}>
            <MarqueeComponentHomePage direction={"left"} ClientsArr={clientsArr4} />
         </div>
         <div className={styles.installBox}>
            <div>
               <div>
                  <h2 className={inter_Bold.className}>{startinjustthreesimplesteps}</h2>
                  <p className={inter_Regular.className}>{startinjustthreesimplestepsDesc}</p>
               </div>
               <div className={styles.iconBox}>
                  <div>
                     <Image src="/assets/downloadApp.svg" alt="download" fill />
                  </div>
                  <div>
                     <h3 className={inter_Bold.className}>{downloadtheApp}</h3>
                     <p className={inter_Regular.className}>{downloadtheAppDesc}</p>
                  </div>
               </div>
               <div className={styles.iconBox}>
                  <div>
                     <Image src="/assets/signupApp.svg" alt="signup" fill />
                  </div>
                  <div>
                     <h3 className={inter_Bold.className}>{signupforfree}</h3>
                     <p className={inter_Regular.className}>{signupforfreeDesc}</p>
                  </div>
               </div>
               <div className={styles.iconBox}>
                  <div>
                     <Image src="/assets/setupApp.svg" alt="signup" fill />
                  </div>
                  <div>
                     <h3 className={inter_Bold.className}>{setupyourPOS}</h3>
                     <p className={inter_Regular.className}>{setupyourPOSDesc}</p>
                  </div>
               </div>
            </div>
            <div style={{ position: 'relative', height: '55rem', width: '54rem' }}>
               <Image src="/assets/threeStepsSpeedUp.gif" alt="install" fill />
            </div>
         </div>
         <div style={{ margin: "15rem 6rem" }}>
            <TestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
         </div>
         <div className={styles.giveItTryDivInAllInOnePage}>
            <GiveItTry
               heading={giveItTryTitle}
               description={homePageReadyToGiveItAtryDesc}
               image={"/assets/giveItAtryHome.webp"}
               styles={{ bottom: "-4rem", right: "0rem" }}
               containerStyles={{ margin: "0 7rem 8.5rem 7rem" }}
            />
         </div>
         <TrustFactor />
      </div>
   );
};
export default AllInOneDesktop;
