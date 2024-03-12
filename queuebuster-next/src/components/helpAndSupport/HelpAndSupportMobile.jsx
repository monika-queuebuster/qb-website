import styles from "../../styles/HelpAndSupport/helpAndSupportMobile.module.css";
import { inter_Bold } from "../common/Fonts";
import { HelpAndSupportCardMobile } from "../mobileQbStrap";
import content from "../../language/ENGLISH.json";
import { helpAndSupport } from "../../language/ENGLISH.json";
import GiveItTryMobile from "../Industry/GiveItTry_mobile";
import TrustFactor from "../common/TrustFactor";
const HelpAndSupportMobile = () => {
   const { commonEmailAddress, commonOfficeAddress } = content;
   const {
      topCardTitle,
      topCardDesc,
      getStarted,
      weAreHereForYou,
      ourDetails,
      forAnyQueries,
      officeAddressdesc,
      cardHrading1,
      cardDesc1,
      cardHrading2,
      cardDesc2,
      cardHrading3,
      cardDesc3,
      cardHrading4,
      cardDesc4,
      cardHrading5,
      cardDesc5,
      cardHrading6,
      cardDesc6,
      cardHrading7,
      cardDesc7,
      cardHrading8,
      cardDesc8,
      cardHrading9,
      cardDesc9,
      cardHrading10,
      cardDesc10,
      cardHrading11,
      cardDesc11,
      cardHrading12,
      cardDesc12,
      readyToGiveItATry,
      readyToGiveItAtryDesc,
   } = helpAndSupport;
   let numberArray = [
      {
         img: "/assets/HelpAndSupport/report.svg",
         heading: cardHrading1,
         desc: cardDesc1,
      },
      {
         img: "/assets/HelpAndSupport/Group 70174.svg",
         heading: cardHrading2,
         desc: cardDesc2,
      },
      {
         img: "/assets/HelpAndSupport/billing.svg",
         heading: cardHrading3,
         desc: cardDesc3,
      },
      {
         img: "/assets/HelpAndSupport/estore.svg",
         heading: cardHrading4,
         desc: cardDesc4,
      },
      {
         img: "/assets/HelpAndSupport/khata.svg",
         heading: cardHrading5,
         desc: cardDesc5,
      },
      {
         img: "/assets/HelpAndSupport/inventory management.svg",
         heading: cardHrading6,
         desc: cardDesc6,
      },
      {
         img: "/assets/HelpAndSupport/Layer_2.svg",
         heading: cardHrading7,
         desc: cardDesc7,
      },
      {
         img: "/assets/HelpAndSupport/Group.svg",
         heading: cardHrading8,
         desc: cardDesc8,
      },
      {
         img: "",
         heading: cardHrading9,
         desc: cardDesc9,
      },
      {
         img: "/assets/HelpAndSupport/payments.svg",
         heading: cardHrading10,
         desc: cardDesc10,
      },
      {
         img: "/assets/HelpAndSupport/integration.svg",
         heading: cardHrading11,
         desc: cardDesc11,
      },
      {
         img: "/assets/HelpAndSupport/report.svg",
         heading: cardHrading12,
         desc: cardDesc12,
      },
   ];
   // let numberArray = [1, 3, 4, 5, 4, 6, 1, 3, 4, 5, 4, 6];
   return (
      <div>
         <header className={styles.header}>
            <h1>{topCardTitle}</h1>
            <p>{topCardDesc}</p>
         </header>
         <div style={{ marginTop: "6rem", marginBottom: "6rem" }}>
            <h1
               style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  textAlign: "center",
               }}
            >
               {getStarted}
            </h1>
            <div
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "2.5rem",
                  gap: "2rem",
                  justifyContent: "center",
               }}
            >
               {numberArray.map((item) => {
                  return <HelpAndSupportCardMobile data={item} />;
               })}
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
                     marginTop: "5rem",
                     marginBottom: "5rem",
                  }}
               >
                  {ourDetails}
               </div>
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between",
                     gap: "4rem",
                  }}
               >
                  <div>
                     <div style={{ fontSize: "2rem", color: "#222222", marginBottom: "0.7rem" }}>
                        {forAnyQueries}
                     </div>
                     <div style={{ fontWeight: "500", fontSize: "2.2rem" }}>+91 78 76 180 180</div>
                  </div>
                  <div>
                     <div style={{ fontSize: "2rem", color: "#222222", marginBottom: "0.7rem" }}>
                        {commonEmailAddress}
                     </div>
                     <div style={{ fontWeight: "500", fontSize: "2.2rem" }}>
                        sales@queuebuster.co
                     </div>
                  </div>
                  <div>
                     <div style={{ fontSize: "2rem", color: "#222222", marginBottom: "0.7rem" }}>
                        {commonOfficeAddress}
                     </div>
                     <div style={{ fontWeight: "500", fontSize: "2.2rem" }}>
                        {officeAddressdesc}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <GiveItTryMobile
            image={"/assets/giveItTryLeft.webp"}
            heading={readyToGiveItATry}
            description={readyToGiveItAtryDesc}
         />

         <TrustFactor />
      </div>
   );
};

export default HelpAndSupportMobile;
