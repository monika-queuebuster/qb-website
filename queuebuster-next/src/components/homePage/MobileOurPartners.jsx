import { inter_Bold, inter_Regular, inter_semi_bold } from "../common/Fonts";
import { CustomButton, Tabs } from "../qbStrap";
import styles from "../../styles/homePage/OurPartners.module.css";
import English from "../../language/ENGLISH.json";
import Image from "next/image";
export const MobileOurPartners = (props) => {
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
         img: "Mosambee.webp",
         altText: "Mosambee"
      },
      {
         img: "payswiff.webp",
         altText: "payswiff"
      },
      {
         img: "Pinelab.webp",
         altText: "Pinelab"
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
   ];
   const content = (logos, name) => {
      return (
         <div className={styles.mobileContentBox}>
            {logos &&
               logos.map((ele, idx) => {
                  return (
                     <div key={idx} className={styles.mobileLogoBox}>
                        <div style={{ height: '5rem', width: '10rem', position: 'relative' }}>
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
            <div className={styles.section_heading}><h3>{props.title}</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
         </center>
         {
            props.description &&
            <center>
               <div
                  style={{
                     backgroundColor: props?.color ? props.color : "#37349D",
                     padding: "0.5rem",
                     textAlign: "center",
                     borderRadius: "5px",
                     margin: "1.6rem 1rem 2.5rem 1rem",
                     color: "#FFFFFF"
                  }}
               >
                  {props.description}
               </div>
            </center>

         }

         <div>
            <Tabs
               data={data}
               color={props?.color ? props.color : "#37349D"}
               labelPadding={"1.5rem 0rem"}
               labelStyle={{ fontSize: "1.706rem" }}
               tabContainerStyle={{ width: "80%" }}
            />
         </div>
      </div>
   );
};
