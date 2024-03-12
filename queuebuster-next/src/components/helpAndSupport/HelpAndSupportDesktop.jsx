import { inter_Bold, inter_Regular } from "../common/Fonts";
import styles from "../../styles/HelpAndSupport/helpAndSupport.module.css";
import { GiveItTry, HelpAndSupportCard } from "../qbStrap";
import content from "../../language/ENGLISH.json";
import { helpAndSupport } from "../../language/ENGLISH.json";
import TrustFactor from "../common/TrustFactor";

const HelpAndSupportDesktop = () => {
   const {
      homePageReadyToGiveItATry,
      homePageReadyToGiveItAtryDesc,
      commonEmailAddress,
      commonOfficeAddress,
   } = content;
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
         img: "assets/HelpAndSupport/flag.svg",
         heading: cardHrading1,
         desc: cardDesc1,
      },
      {
         img: "assets/HelpAndSupport/Group 70174.svg",
         heading: cardHrading2,
         desc: cardDesc2,
      },
      {
         img: "assets/HelpAndSupport/billing.svg",
         heading: cardHrading3,
         desc: cardDesc3,
      },
      {
         img: "assets/HelpAndSupport/estore.svg",
         heading: cardHrading4,
         desc: cardDesc4,
      },
      {
         img: "assets/HelpAndSupport/khata.svg",
         heading: cardHrading5,
         desc: cardDesc5,
      },
      {
         img: "assets/HelpAndSupport/inventory management.svg",
         heading: cardHrading6,
         desc: cardDesc6,
      },
      {
         img: "assets/HelpAndSupport/Layer_2.svg",
         heading: cardHrading7,
         desc: cardDesc7,
      },
      {
         img: "assets/HelpAndSupport/Group.svg",
         heading: cardHrading8,
         desc: cardDesc8,
      },
      {
         img: "assets/HelpAndSupport/setup.svg",
         heading: cardHrading9,
         desc: cardDesc9,
      },
      {
         img: "assets/HelpAndSupport/payments.svg",
         heading: cardHrading10,
         desc: cardDesc10,
      },
      {
         img: "assets/HelpAndSupport/integration.svg",
         heading: cardHrading11,
         desc: cardDesc11,
      },
      {
         img: "assets/HelpAndSupport/report.svg",
         heading: cardHrading12,
         desc: cardDesc12,
      },
   ];
   return (
      <div>
         <div>
            <div className={styles.contactPagetopContainer}>
               <h1 className={inter_Bold.className}>{topCardTitle}</h1>
               <p className={inter_Regular.className}>{topCardDesc}</p>
               <div className={styles.getStarted}>
                  <div style={{ textAlign: "center", fontSize: "3rem", fontWeight: "600" }}>
                     {getStarted}
                  </div>
                  <div
                     style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2.5rem" }}
                  >
                     {numberArray.map((item) => {
                        return <HelpAndSupportCard data={item} />;
                     })}
                  </div>
               </div>
            </div>
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
                  <div style={{ fontWeight: "500" }}>+91 786 1044 000</div>
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

         <div style={{ marginTop: "10rem" }}>
            <GiveItTry
               heading={readyToGiveItATry}
               description={readyToGiveItAtryDesc}
               image={"/assets/giveItTryLeft.webp"}
               styles={{ bottom: "-4rem", right: "1rem" }}
               containerStyles={{ margin: "0 7rem 8.5rem 7rem" }}
            />
         </div>

         <TrustFactor />
      </div>
   );
};

export default HelpAndSupportDesktop;
