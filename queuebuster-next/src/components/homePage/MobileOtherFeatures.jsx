import { inter_Bold, inter_Medium, inter_Regular } from "../common/Fonts";
import { ComponentHeader } from "../qbStrap";
import styles from "../../styles/qbStrap.module.css";
import content from '@/language/ENGLISH.json';
import Image from "next/image";

const MobileOtherFeatures = (props) => {
   const { homePageOtherFeaturestitle } = content
   return (
      <div style={{ padding: "2rem" }}>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <h3
               className={`${inter_Bold.className}`}
               style={{ fontSize: "2.5rem", textAlign: "center" }}
            >
               {props?.heading ? props?.heading : homePageOtherFeaturestitle}
            </h3>
            <div
               style={{
                  backgroundColor: "#86DBEA",
                  padding: "0.5rem",
                  textAlign: "center",
                  borderRadius: "5px",
                  marginTop: "1.6rem",
                  marginBottom: "1.5rem",
                  width: props?.subheadingWidth ? props?.subheadingWidth : '30rem'
               }}
            >
               {props?.subheading ? props?.subheading : 'One App, Endless POSsibilities'}
            </div>
         </div>
         {props.otherFeature.map((el, index) => {
            return (
               <div
                  style={{
                     width: "100%",
                     boxShadow: "0px 0px 4px #9A999966",
                     borderRadius: "4px",
                     padding: "1rem",
                     margin: "2.2rem 0",
                  }}
               >
                  <div style={{height: '7rem', width: '7rem', position: "relative"}}>
                     <Image src={el?.icon} alt={el?.altText} fill />
                  </div>
                  <h4
                     style={{ paddingTop: "1rem", font: 'normal normal 600 1.8rem/3rem Inter' }}
                     className={inter_Bold.className}
                  >
                     {el.title}
                  </h4>
                  <p style={{font: 'normal normal normal 1.8rem/2.5rem Inter'}}>{el.text}</p>
                  <a
                     style={{
                        color: "#2A6AB4",
                        paddingBottom: "2.5rem",
                        textDecoration: "none   ",
                     }}
                     className={inter_Bold.className}
                     href="/"
                  >
                     {/* Know More */}
                  </a>
               </div>
            );
         })}
      </div>
   );
};

export default MobileOtherFeatures;
