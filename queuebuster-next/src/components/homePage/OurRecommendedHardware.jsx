import React, { useState } from "react";
import { inter_Bold, inter_Regular, inter_Medium, inter_Mediumup } from "../common/Fonts";
import { ComponentHeader, CustomButton, OurRecommandationNewModal } from "../qbStrap";
import styles from "../../styles/homePage/OurRecommandationNew.module.css";
import content from "../../language/ENGLISH.json";
import Image from "next/image";

const OurRecommendedHardware = (props) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [sendModalData, setSendModalData] = useState("");
   const modalDta = [
      {
         id: "5.5",
         inches: "5.5”",
         description: [
            "A chargeable device with a long-lasting battery",
            "Supports SIM connectivity",
            "Supports spot billing",
         ],
         bgColor: "#F5F4FF",
         img: "/assets/five-five.png",
      },
      {
         id: "8.0",
         inches: "8.0”",
         description: [
            "Provides spot billing",
            "Ideal for Shop in Shop usage",
            "Comfortable for single-handed use",
         ],
         bgColor: "#EFF6FF",
         img: "/assets/eight-zero.png",
      },
      {
         id: "10.1",
         inches: "10.1”",
         description: [
            "Plug and Play device",
            "Built-in customer-facing screen ",
            "Landscape mode (For parallel-window usage)",
            "Supports SIM connectivity",
         ],
         bgColor: "#E1F3EC",
         img: "/assets/tenPointOne2.webp",
         imgHeight: "25rem",
      },
      {
         id: "13.0",
         inches: "13.0”",
         description: [
            "Lifetime service warranty with QueueBuster",
            "Supports Multiple payment modes",
            "Built-in customer touchscreen",
         ],
         bgColor: "#EFF6FF",
         img: "/assets/whitePos.webp",
         imgHeight: "20rem",
      },
      {
         id: "14.0",
         inches: "14.0+”",
         description: [
            "Supports multiple external devices (cash drawers, automatic safes, etc.) ",
            "Includes printer with a 3” auto receipt cutter",
            "Perfect for extensive table order management",
            "Ideal for hospitality and F&B centres",
         ],
         bgColor: "#f0fcff",
         img: "/assets/four-zero.png",
         imgHeight: "30rem",
      },
      {
         id: "5.0",
         inches: "5.0”",
         description: [
            "Supports UPI/ Credit Card, Debit Card, payments",
            "Easy-to-use interface and portability",
            "Ultra-portable for on-the-go transactions",
         ],
         bgColor: "#E1F3EC",
         img: "/assets/whiteMobPos.webp",
         // imgHeight:"20rem"
      },
      {
         id: "smartphone",
         inches: "Smartphone”",
         description: ["No extra hardware investment", "Convenient and Handy"],
         bgColor: "##F5F4FF",
         img: "/assets/newSmartPhone.webp",
         // imgHeight:"20rem"
      },
   ];

   const {
      homePageOurRecomDownloadtheAppTitle,
      homePageOurRecomStepToDownloadTitle,
      homePageOurRecomStepToDownloadDesc,
      homePageOurRecomSignupforfreeTitle,
      homePageOurRecomSetupyourPOSTitle,
      homePageOurRecomSetupyourPOSDes,
      homePageOurRecomDownloadtheAppDesc,
      homePageOurRecomSignupforfreeDesc,
      commonReadMore,
   } = content;
   const openModal = (e) => {
      const sendModalData = modalDta.filter((el) => e.target.id == el.id);
      setSendModalData(...sendModalData);
      setModalOpen(!modalOpen);
   };
   const { recommendedHardwareText } = props;
   return (
      <div style={{ marginTop: "10rem" }}>
         <OurRecommandationNewModal
            openModal={modalOpen}
            setModalOpen={setModalOpen}
            className={styles.modal}
            modalData={sendModalData}
         />
         <ComponentHeader
            title={props.title}
            barText={props.description}
            barBg_Color={"#86DBEA"}
            desStyle={{ width: "67.1rem" }}
         />

         <div className={styles.mainContainer} style={{}}>
            <div style={{ display: "flex", flexDirection: "column" }}>
               <div className={styles.containerFivePointFiveAndEight}>
                  <div className={styles.containerFivePointFive}>
                     <div>
                        <h4 className={`${inter_Bold.className} ${styles.five_point_five_heading}`}>5.5”</h4>
                        <p className={`${inter_Medium.className} ${styles.five_point_five_text}`}>{recommendedHardwareText?.five}</p>
                     </div>
                     <div className={styles.image_container}>
                        <Image src='/assets/five-five.png' alt="5.5 device" fill />
                     </div>
                  </div>
                  <div className={styles.containerEightPointZero}>
                     <div>
                        <h4 className={inter_Bold.className}>8.0”</h4>
                        <p className={inter_Regular.className}>{recommendedHardwareText?.eight}</p>
                     </div>
                     <div className={styles.eight_image_container}>
                        <Image src='/assets/eight-zero.png' alt="8.0 device" fill />
                     </div>
                  </div>
               </div>
               <div className={styles.containerTenFourteenThirteen}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                     <div className={styles.containerTen}>
                        <div>
                           <h4 className={inter_Bold.className}>10.1”</h4>
                           <p className={inter_Regular.className}>{recommendedHardwareText?.ten}</p>
                        </div>
                        <div className={styles.ten_image_container}>
                           <Image src='/assets/ten-one.png' alt="10.1 device" fill />
                        </div>
                     </div>
                     <div className={styles.containerThirteen}>
                        <div>
                           <h4 className={inter_Bold.className}>13.0”</h4>
                           <p className={inter_Medium.className}>
                              {recommendedHardwareText?.thirteen}
                           </p>
                        </div>
                        <div className={styles.thirteen_image_container}>
                           <Image src='/assets/whitePos1.webp' alt="13.0 device" fill />
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={styles.containerFourteen}>
                        <div>
                           <h4 className={inter_Bold.className}>14.0+”</h4>
                           <p className={inter_Regular.className}>
                              {recommendedHardwareText?.fourteenPlus}
                           </p>
                        </div>
                        <div className={styles.fourteen_image_container}>
                           <Image src='/assets/fourteen-zero.png' alt="14.0 device" fill />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
               <div className={styles.containerFiveDotZero}>
                  <div>
                     <h4 className={inter_Bold.className}>5.0”</h4>
                     <p className={inter_Regular.className}>{recommendedHardwareText?.fiveNew}</p>
                  </div>
                  <div className={styles.five_image_container}>
                     <Image src='/assets/whiteMobPos1.webp' alt="5.0 device" fill />
                  </div>
               </div>
               <div className={styles.containerSmartPhone}>
                  <div>
                     <h4 className={inter_Bold.className}>Smartphone</h4>
                     <p className={inter_Regular.className}>{recommendedHardwareText?.smartphone}</p>
                  </div>
                  <div className={styles.smartphone_image_container}>
                     <Image src='/assets/newSmartPhone1.webp' alt="smartphone" fill />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OurRecommendedHardware;