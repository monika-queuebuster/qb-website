import { GiveItTry } from "../qbStrap";
import { inter_Bold, inter_Regular } from "../common/Fonts";
import styles from "../../styles/privacy/privacy.module.css";
import content from "../../language/ENGLISH.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { getPolicyData } from "@/services/signUpServices";

const PrivacyDesktop = () => {
   const [pageData, setPageData] = useState();
   const {
      giveitTryHeading,
      giveitTryDesc,
      privacyPolicyTitle,
      privacyPolicyDesc,
      paragraphOne,
      paragraphOne1,
      paragraphOne2,
      paragraphOne3,
      paragraphOne4,
      paragraphTwo,
      paragraphTwo1,
      paragraphTwo2,
      paragraphTwo3,
      weAreHereForYou,
      ourDetails,
      forAnyQueries,
      officeAddressdesc,
   } = content.privacyPolicy;
   const { commonEmailAddress, commonOfficeAddress } = content;
   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      let obj = {
         type: "Privacy",
      };
      var pageData = await getPolicyData(obj);
      const doc = new DOMParser().parseFromString(pageData, "text/html");
      pageData = doc.documentElement.textContent;
      setPageData(pageData);
      
   };
   // const doc = new DOMParser().parseFromString(privacyData, "text/html");
   // let pageData = doc.documentElement.textContent;
   return (
      <div>
         <div style={{ marginTop: "-7rem" }}>
            <div dangerouslySetInnerHTML={{ __html: pageData }} />
         </div>
         <div className={styles.moreHelp}>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
               <div style={{ width: "50rem" }}>
                  <div style={{ fontSize: "1.3rem", color: "#222222", marginBottom: "0.7rem" }}>
                     {commonOfficeAddress}
                  </div>
                  <div style={{ fontWeight: "500" }}>{officeAddressdesc}</div>
               </div>
            </div>
         </div>
         {/* <GiveItTry
            heading={giveitTryHeading}
            description={giveitTryDesc}
            image={"/assets/giveItTryLeft.webp"}
            containerStyles={{ marginLeft: "7.5rem", marginRight: "7.5rem" }}
            styles={{ bottom: "-4.5rem", right: "0rem", height: "57rem" }}
         /> */}
      </div>
   );
};

export default PrivacyDesktop;
