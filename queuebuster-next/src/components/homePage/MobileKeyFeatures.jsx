import Image from "next/image";
import { inter_Bold, inter_Medium, inter_Regular } from "../common/Fonts";
import { MobileImageCard } from "../qbStrap";
import content from '@/language/ENGLISH.json';
const MobileKeyFeatures = (props) => {
   const { homePageOurKeyFeaturesTitle, commonKnowMore } = content;
   return (
      <div id="ourKeyFeature1" style={{ scrollMarginTop: "9rem" }}>
         <h2
            className={`${inter_Bold.className}`}
            style={{ fontSize: "2.5rem", textAlign: "center" }}
         >
            {homePageOurKeyFeaturesTitle}
         </h2>
         <MobileImageCard
            styles={{
               backgroundImage: "url(/assets/Key_feature_Icon_homePage/PosMachine.webp)",
               backgroundRepeat: "no-repeat",
               height: "25rem",
               width: "40rem",
               backgroundSize: "cover",
               backgroundPosition: "center",
               marginTop: "10rem",
               backgroundSize: "89vw",
            }}
            imageOneStyle={{
               height: "13rem",
               left: "3rem",
               top: "-2.9rem",
            }}
            imageTwoStyle={{
               height: "13rem",
               left: "16rem",
               top: "-7.3rem",
            }}
            imageOneSource={"/assets/Key_feature_Icon_homePage/Detargent.webp"}
            imageTwoSource={"/assets/Key_feature_Icon_homePage/BrownRice.webp"}
         />
         <div style={{ padding: "2rem" }}>
            {props.keyFeaturearr.map((item) => {
               return (
                  <div>
                     <div style={{height: '7rem', width: '7rem', position: 'relative'}}>
                        <Image src={item?.icon} alt={item?.altText} style={{ paddingBottom: "0.5rem" }} fill />
                     </div>
                     <div style={{ font: 'normal normal 600 1.8rem/2.5rem Inter' }} className={inter_Bold.className}>
                        {item.title}
                     </div>
                     <div style={{ paddingTop: "1rem", font: 'normal normal normal 1.8rem/2.5rem Inter' }}>{item.placeholder1}</div>
                     <div
                        style={{ color: "#2A6AB4", paddingBottom: "2.5rem", paddingTop: "1rem" }}
                        className={inter_Bold.className}
                     >
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default MobileKeyFeatures;
