import { useRouter } from "next/router";
import styles from "../../styles/mobile/MobileIndustryWiseCard.module.css";
import { inter_Bold, inter_Medium, inter_Regular } from "../common/Fonts";
import { CustomButton, TransparentCustomButton } from "../qbStrap";
import Image from "next/image";

const MobileIndustryWiseCard = (props) => {
   const router = useRouter();
   const { industries } = props;
   const handleClickScroll = (ID) => {
      const element = document.getElementById(ID);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };
   return (
      <div style={{ padding: "2rem" }}>
         <div style={{ ...props.headerStyle }} className={styles.headerIndustry}>{props.heading}</div>
         <h3
            style={{ paddingTop: "2rem", fontSize: "2.3rem", paddingBottom: "0.5rem" }}
            className={inter_Bold.className}
         >
            {props.subHeading}
         </h3>
         <div style={{ font: 'normal normal normal 1.8rem/2.5rem Inter' }}>
            {props.desc}
         </div>
         <center style={{ paddingTop: "3rem", paddingBottom: "1rem", marginBottom: "2rem" }}>
            <div style={{ height: "30rem", width: "30rem", position: 'relative' }}>
               <Image src="/assets/BusinessTypes.gif" alt="business type" style={{ borderRadius: "3rem" }} fill />
            </div>
         </center>
         {industries.map((item) => {
            return (
               <div
                  onClick={() => {
                     handleClickScroll(item.title.split(" ")[0] + "mobile");
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "0 1.5rem",
                        borderBottom: "2px solid #DEDEDE",
                        paddingBottom: "0.8rem",
                        marginTop: "1rem",
                     }}
                  >
                     <p
                        style={{
                           paddingLeft: "1rem",
                           borderLeft: `3px solid ${item.color}`,
                           fontSize: "2rem",
                           font: 'normal normal normal 1.8rem/3rem Inter',
                           paddingTop: "0.5rem",
                        }}
                     >
                        {item.title}
                     </p>
                     <div style={{ height: "2.5rem", width: "2.5rem", position: "relative" }}>
                        <Image src="/assets/rightArrowIcon.svg" alt="right arrow" fill />
                     </div>
                  </div>
               </div>
            );
         })}
         <TransparentCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={(e) => {
            router.push("/get-free-demo");
         }} />
      </div>
   );
};
export default MobileIndustryWiseCard;
