import styles from "../../styles/termsAndCondition/termsAndCond.module.css";
import { privacyPolicy } from "../../language/ENGLISH.json";
import content from "../../language/ENGLISH.json";
import { inter_Bold } from "../common/Fonts";
import { GiveItTry } from "../qbStrap";
import { useEffect, useState } from "react";
import { getPolicyData } from "@/services/signUpServices";
import GiveItTryMobile from "../Industry/GiveItTry_mobile";

const TermsAndConditionMobile = () => {
   const [displayData, setDisplayData] = useState("");
   const {
      giveitTryHeading,
      giveitTryDesc,
      weAreHereForYou,
      ourDetails,
      forAnyQueries,
      officeAddressdesc,
   } = privacyPolicy;
   const { commonEmailAddress, commonOfficeAddress } = content;

   useEffect(() => {
      (async () => {
         const data = await getPolicyData({ type: "terms" });
         // console.log(data,"here is")
         const doc = new DOMParser().parseFromString(data, "text/html");
         let pageData = doc.documentElement.textContent;
         setDisplayData(pageData);
         console.log("jewfjhewfwef",pageData)
      })();
      // console.log("hi")
   }, []);
   // const doc = new DOMParser().parseFromString(termsData, "text/html");
   // let pageData = doc.documentElement.textContent;
   return (
      <>
         <div className={styles.mainContainer}>
            <div style={{ marginTop: "-7rem", padding: "0" }}>
               <div dangerouslySetInnerHTML={{ __html: displayData }} />
            </div>
            <div style={{padding: "4rem 2.5rem"}} className={styles.moreHelp}>
            <h1
               className={inter_Bold.className}
               style={{ textAlign: "center", fontSize: "3rem", fontWeight: "600" }}
            >
               {weAreHereForYou}
            </h1>
            <div
               style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginTop: "1.5rem",
                  marginBottom: "2.5rem",
               }}
            >
               {ourDetails}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between",flexDirection:"column" }}>
               <div style={{ width: "50rem" }}>
                  <div style={{ fontSize: "1.3rem", color: "#222222", marginBottom: "0.7rem" }}>
                     {forAnyQueries}
                  </div>
                  <div style={{ fontWeight: "500" }}>+91 78 76 180 180</div>
               </div>
               <div style={{ width: "50rem" }}>
                  <div style={{ fontSize: "1.3rem", color: "#222222", marginBottom: "0.7rem" }}>
                     {commonEmailAddress}
                  </div>
                  <div style={{ fontWeight: "500" }}>sales@queuebuster.co</div>
               </div>
               <div style={{}}>
                  <div style={{ fontSize: "1.3rem", color: "#222222", marginBottom: "0.7rem" }}>
                     {commonOfficeAddress}
                  </div>
                  <div style={{ fontWeight: "500" }}>{officeAddressdesc}</div>
               </div>
            </div>
         </div>
         </div>
         {/* <GiveItTryMobile
            image={"/assets/giveItTryLeft.webp"}
            heading={giveitTryHeading}
            description={giveitTryDesc}
            imgStyle={{ left: "-8.5rem" }}
         /> */}
      </>
   );
};
export default TermsAndConditionMobile;
