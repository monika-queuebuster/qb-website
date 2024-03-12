import { GiveItTry } from "../qbStrap";
import { inter_Bold, inter_Regular } from "../common/Fonts";
import styles from "../../styles/privacy/privacy.module.css";
import content from "../../language/ENGLISH.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { getPolicyData } from "@/services/signUpServices";
import GiveItTryMobile from "../Industry/GiveItTry_mobile";

const PrivacyMobile = () => {
   const [pageData, setPageData] = useState();
   const {
      giveitTryHeading,
      giveitTryDesc,
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
   return (
      <div>
         <div style={{ marginTop: "-7rem" }}>
            <div dangerouslySetInnerHTML={{ __html: pageData }} />
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
         {/* <GiveItTryMobile
            image={"/assets/giveItTryLeft.webp"}
            heading={giveitTryHeading}
            description={giveitTryDesc}
            imgStyle={{ left: "-8.5rem" }}
         /> */}
      </div>
   );
};

export default PrivacyMobile;
