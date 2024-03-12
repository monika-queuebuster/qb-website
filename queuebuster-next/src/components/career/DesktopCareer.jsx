import { inter_Bold } from "@/components/common/Fonts";
import { CustomButton, OurBenefits, OuterEmployeeSwiper, VacancyCard } from "@/components/qbStrap";
import React, { useEffect } from "react";
import styles from "../../styles/careerPage/career-en.module.css";
import content from "../../language/ENGLISH.json";
import { getAvailableVacancy } from "@/services/signUpServices";
import Image from "next/image";

const DesktopCareer = (props) => {
   const handleClickScroll = (ID) => {
      const element = document.getElementById(ID);
      console.log(element, "this is element");
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };
   const {
      careerTitle,
      careerWhyJoinUs,
      careerOurCulture,
      careerOnmission1,
      careerAvailableVacancy,
      careerAvailableVacancyDesc,
   } = content;

   const { weAreText } = content.commonIndustryHeading

   const { mainHeading, careerDrivenText1, careerDrivenText2, whyJoinUsText, whyJoinUsP1Heading, whyJoinUsP2Heading, whyJoinUsP3Heading, whyJoinUsP1, whyJoinUsP2, whyJoinUsP3, cultureContent1, cultureContent2  } = content.careers
   const { benefits, vacancy } = props;

   return (
      <div className={styles.container}>
         <header>
            <div className={styles.topBanner_parent}>
               <div className={`${styles.topBanner_contentWrap}`}>
                  <h1 className={`${inter_Bold.className}`}>{careerTitle}</h1>
                  <div>{mainHeading}</div>
               </div>
            </div>
         </header>

         <main>
            <div className={styles.mainContent_parent}>
               <div className={styles.mainContent_child1}>
                  <div className={styles.mainContent_child_text}>
                     <div className={styles.mainContent_child1_textWrapper}>
                        <div
                           className={`${inter_Bold.className} ${styles.mainContent_child1_text1}`}
                        > {weAreText}&nbsp;
                           <span style={{ color: "#2C6BB3" }}>{careerOnmission1}</span>{" "}
                        </div>
                        <div className={`${styles.mainContent_child1_text2}`}>
                           <p>{careerDrivenText1}</p><br />
                           <p>{careerDrivenText2}</p>
                        </div>
                        <CustomButton
                           text={"View Job Openings"}
                           styles={{
                              backgroundColor: "#020D48",
                              width: "50%",
                              borderRadius: "8px",
                              border: "transparent",
                              // border: "tranparent",
                           }}
                           onClick={() => {
                              handleClickScroll("availableVacancy");
                           }}
                        />
                        {/* <button>View Job Openings</button> */}
                     </div>
                  </div>
                  <div className={styles.mainContent_child1_img}></div>
               </div>
               <div className={styles.mainContent_child2}>
                  <div className={styles.mainContent_child2_img}></div>
                  <div className={styles.mainContent_child_text}>
                     <div className={`${styles.flex} ${styles.column}`}>
                        <div
                           className={`${inter_Bold.className} ${styles.mainContent_child1_text1}`}
                        >
                           {careerWhyJoinUs}
                        </div>
                        <div>{whyJoinUsText}</div>
                        <div className={`${styles.flex} ${styles.column}`}>
                           <div className={styles.flex}>
                              <div className={styles.bigFont}>01</div>
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.6rem",
                                    paddingLeft: "0.7rem",
                                 }}
                              >
                                 <div className={`${inter_Bold.className}`}>{whyJoinUsP1Heading}</div>
                                 <div style={{ fontSize: "1.314rem" }}>{whyJoinUsP1}</div>
                              </div>
                           </div>
                           <div className={styles.flex}>
                              <div className={styles.bigFont}>02</div>
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.6rem",
                                 }}
                              >
                                 <div className={`${inter_Bold.className}`}>{whyJoinUsP2Heading}</div>
                                 <div style={{ fontSize: "1.314rem" }}>{whyJoinUsP2}</div>
                              </div>
                           </div>
                           <div className={styles.flex}>
                              <div className={styles.bigFont}>03</div>
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.6rem",
                                 }}
                              >
                                 <div className={`${inter_Bold.className}`}>{whyJoinUsP3Heading}</div>
                                 <div style={{ fontSize: "1.314rem" }}>{whyJoinUsP3}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.mainContent_child3}>
                  <div className={styles.mainContent_child_text}>
                     <div className={`${styles.flex} ${styles.column}`}>
                        <div
                           className={`${inter_Bold.className} ${styles.mainContent_child1_text1}`}
                        >
                           {careerOurCulture}
                        </div>
                        <div className={styles.culture_content}>
                           <p>{cultureContent1}<br /><br /> {cultureContent2}</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.mainContent_child3_img}></div>
               </div>
            </div>

            <div className={styles.img_grid_container}>
               <div className={styles.outer_left_container}>
                  <div className={styles.inner_top_container}>
                     <div className={styles.inner_top_left_container}>
                        <div className={styles.itlc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img5.webp" alt="collage img" fill /></div>
                     </div>
                     <div className={styles.inner_top_right_container}>
                        <div className={styles.itrc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img1+(2).webp" alt="" fill /></div>
                     </div>
                  </div>
                  <div className={styles.inner_bottom_container}>
                     <div className={styles.inner_bottom_left_container}>
                        <div className={styles.iblc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img2+(1).webp" alt="" fill /></div>
                     </div>
                     <div className={styles.inner_bottom_right_container}>
                        <div className={styles.ibrc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img3+(1).webp" alt="" fill /></div>
                     </div>
                  </div>
               </div>
               <div className={styles.outer_right_container}>
                  <div className={styles.olc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img4.webp" alt="" fill /></div>
               </div>
            </div>

            <center>
               <div style={{ width: "80%" }}>
                  <OuterEmployeeSwiper />
               </div>
            </center>
            <div style={{ marginTop: "3rem" }}>
               <OurBenefits benefits={benefits} />
            </div>
            <div id="availableVacancy" style={{ scrollMarginTop: "9rem" }}>
               <h3
                  style={{
                     textAlign: "center",
                     font: "normal normal bold 4.08rem/4.964rem inter",
                     marginTop: "10rem",
                  }}
               >
                  {careerAvailableVacancy}
               </h3>
               <p
                  style={{
                     font: "normal normal normal 1.314rem/1.606rem inter",
                     textAlign: "center",
                     width: "84.972rem",
                     margin: "auto",
                     marginTop: "2rem",
                     marginBottom: "6rem",
                  }}
               >
                  {careerAvailableVacancyDesc}
               </p>
               <div
                  style={{
                     padding: "0rem 18rem",
                     display: "flex",
                     flexWrap: "wrap",
                     justifyContent: "center",
                     gap: "4rem",
                  }}
               >
                  {vacancy.map((item) => {
                     return (
                        <VacancyCard
                           title={item.title}
                           description={item.description}
                           vacancyType={item.vacancyType}
                           vacancyLocation={item.vacancyLocation}
                           id={item.id}
                        />
                     );
                  })}
               </div>
            </div>
         </main>
      </div>
   );
};

export default DesktopCareer;
