import { inter_Bold, inter_Regular, inter_semi_bold } from "../common/Fonts";
import { CustomButton, Tabs } from "../qbStrap";
import styles from "../../styles/homePage/OurPartners.module.css";
import English from "../../language/ENGLISH.json";
import Image from "next/image";
export const OurPartners = (props) => {
   let cOneImages = [
      {
         img: "MICROSOFT DYNAMICS.webp",
         altText: "microsoft dynamics"
      },
      {
         img: "ZOHO.webp",
         altText: "zoho"
      },
      {
         img: "GRAY MATTER.webp",
         altText: "gray matter"
      },
      {
         img: "SHOPIFY.webp",
         altText: "shopify"
      },
      {
         img: "ZOMATO.webp",
         altText: "zomato"
      },
      {
         img: "SWIGGY.webp",
         altText: "swiggy"
      },
      {
         img: "TALLY.webp",
         altText: "tally"
      },
      {
         img: "ADSR.webp",
         altText: "adsr"
      },
      {
         img: "GSP.webp",
         altText: "gsp"
      },
      {
         img: "PAYTM MLYAL.webp",
         altText: "paytm"
      },
      {
         img: "path-finder.webp",
         altText: "path-finder",
         height: "4rem"
      },
      {
         img: "easyrewardz.svg",
         altText: "easyrewardz"
      },
      {
         img: "easyecom.svg",
         altText: "easyecom"
      },
      {
         img: "oracle.webp",
         altText: "oracle"
      },
      {
         img: "unicommerce.svg",
         altText: "unicommerce"
      },
      {
         img: "sap.svg",
         altText: "sap"
      },
   ];
   let cTwoImages = [
      {
         img: "epson.webp",
         altText: "epson"
      },
      {
         img: "essae.webp",
         altText: "essae"
      },
      {
         img: "imini.webp",
         altText: "imini"
      },
      {
         img: "ingenico.webp",
         altText: "ingenico"
      },
      {
         img: "newland.webp",
         altText: "newland"
      },
      {
         img: "pax.webp",
         altText: "pax"
      },
      {
         img: "posiflex.webp",
         altText: "posiflex"
      },
      {
         img: "sunmi.webp",
         altText: "sunmi"
      },
      {
         img: "tactilion.webp",
         altText: "tactilion"
      },
      {
         img: "verifone.webp",
         altText: "verifone"
      },
      {
         img: "TVSE LOGO.png",
         altText: "tvse"
      },
      {
         img: "sunpos.webp",
         altText: "sunpos"
      },
      {
         img: "feitian.webp",
         altText: "featian"
      }
   ];

   let cThreeImages = [
      {
         img: "paytm.webp",
         altText: "paytm"
      },
      {
         img: "razorpay.webp",
         altText: "razorpay"
      },
      {
         img: "paypal.webp",
         altText: "paypal"
      },
      {
         img: "ezetap.webp",
         altText: "ezetap"
      },
      {
         img: "mosambee.svg",
         altText: "Mosambee"
      },
      {
         img: "payswiff.webp",
         altText: "payswiff"
      },
      {
         img: "pine-labs.png",
         altText: "Pinelab",
         height: "3rem",
      },
      {
         img: "geidea-logo.webp",
         altText: "geidea-logo"
      },
      {
         img: "mswipe.webp",
         altText: "mswipe"
      },
      {
         img: "payu.webp",
         altText: "payu"
      },
      {
         img: "plural.webp",
         altText: "plural"
      },
      {
         img: "bharatpe.webp",
         altText: "bharatpe",
         height: "4rem"
      },
      {
         img: "payphi.webp",
         altText: "payphi",
      },
      {
         img: "ezswype.svg",
         altText: "ezswype",
      },
   ];
   const content = (logos, name) => {
      return (
         <div className={styles.contentBox}>
            {logos &&
               logos.map((ele, idx) => {
                  return (
                     <div key={idx} className={styles.logoBox}>
                        <div className={styles.partners_img_container} style={{ height: ele?.height }}>
                           <Image
                              src={
                                 name == "software"
                                    ? `/assets/${ele?.img}`
                                    : name == "hardware"
                                       ? `/assets/Integration/Hardwares/${ele?.img}`
                                       : `/assets/Integration/${ele?.img}`
                              }
                              alt={ele?.altText}
                              fill
                           />
                        </div>
                     </div>
                  );
               })}
         </div>
      );
   };

   const data = [
      {
         heading: English.commonSoftwareIntegration,
         content: content(cOneImages, "software"),
      },
      {
         heading: English.commonHardware,
         content: content(cTwoImages, "hardware"),
      },
      {
         heading: English.commonPaymentIntegration,
         content: content(cThreeImages, "integration"),
      },
   ];
   return (
      <div className={styles.mainBoxPartners}>
         <center>
            <div className={styles.section_heading}><h4 className={inter_semi_bold.className} style={{ font: "normal normal bold 2.5rem/3.1rem Inter" }}> {props.title} </h4><div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
         </center>
         {
            props.description &&

            <center>
               <CustomButton
                  text={props.description}
                  styles={{
                     backgroundColor: props?.color ? props.color : "#37349D",
                     border: "none",
                     borderRadius: "6px",
                     padding: "0.2rem 2rem",
                     marginBottom: "1.7rem",
                     width: "55.4rem",
                     height: "2.92rem",
                     padding: "0.2rem 2rem",
                     fontWeight: "300",
                  }}
                  onClick={(e) => {
                     console.log(e, "Aman");
                  }}
               />
            </center>
         }
         <div>
            <Tabs
               data={data}
               color={props?.color ? props.color : "#37349D"}
               style={{ width: "100%", margin: "auto" }}
               tabsStyle={{ textAlign: "center" }}
            />
         </div>
      </div>
   );
};
