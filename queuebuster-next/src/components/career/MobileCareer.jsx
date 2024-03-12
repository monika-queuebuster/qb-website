import styles from "../../styles/careerPage/careerMobile.module.css";
import { MobileOurBenefits, MobileVacancyCard } from "../mobileQbStrap";
import { CustomButton, OuterMobileEmployeeReviewSwiper } from "../qbStrap";
import content from "../../language/ENGLISH.json";
import Image from "next/image";
const MobileCareer = (props) => {
   const handleClickScroll = (ID) => {
      const element = document.getElementById(ID);
      console.log(element, "this is element");
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };
   const {
      careerDesc,
      careerTitle,
      careerEpower,
      careerWhyJoinUs,
      careerWhyJoinUsDesc,
      careerDyp,
      careerDypDesc,
      careerSI,
      careerSIDesc,
      careerCIM,
      careerCIMdesc,
      careerOurCulture,
      careerOurCultureDesc,
      careerOurHiringProcess,
      careerOurHiringProcessDesc,
      careerApply,
      careerApplyDesc,
      careerGetShortlisted,
      careerGetShortlistedDesc,
      careerInterview,
      careerInterviewDesc,
      careerOfferandWelcome,
      careerOfferandWelcomeDesc,
      careerOnmission1,
      careerOnmission2,
      careerAvailableVacancy,
      careerAvailableVacancyDesc,
      careerEmployeeReviews,
      careerEmployeeReviewsDesc,
      careerOurBenefits,
      careerOurBenefitsDesc,
   } = content;

   const { mainHeading, careerDrivenText1, careerDrivenText2, whyJoinUsText, whyJoinUsP1Heading, whyJoinUsP2Heading, whyJoinUsP3Heading, whyJoinUsP1, whyJoinUsP2, whyJoinUsP3, cultureContent1, cultureContent2 } = content.careers

   const whyJoinUs = [
      {
         title: whyJoinUsP1Heading,
         content: whyJoinUsP1,
      },
      {
         title: whyJoinUsP2Heading,
         content: whyJoinUsP2,
      },
      {
         title: whyJoinUsP3Heading,
         content: whyJoinUsP3,
      },
   ];


   const { benefits, vacancy } = props;
   return (
      <div>
         <header className={styles.header}>
            <h1>{careerTitle}</h1>
            <p>{mainHeading}</p>
         </header>
         <section>
            <center style={{ padding: "4rem 2rem 0 2rem" }}>
               <div className={styles.teamImage}>
                  <Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/mission+(1).webp" alt='team picture' fill />
               </div>
               <div style={{ fontWeight: "700", fontSize: "2.5rem", marginTop: "3rem" }}>
                  We are&nbsp;
                  <span style={{ color: "#2C6BB3" }}>QueueBuster</span>
               </div>
               <p style={{ marginTop: '2rem' }}>{careerDrivenText1}</p><br />
               <p>{careerDrivenText2}</p>
               <CustomButton
                  text={"View Job Openings"}
                  styles={{
                     backgroundColor: "#020D48",
                     width: "50%",
                     borderRadius: "10px",
                     border: "transparent",
                     marginTop: "2rem",
                     fontWeight: "700",
                  }}
                  onClick={() => handleClickScroll("availableVacancyq")}
               />
               <div className={styles.teamImage}>
                  <Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/join+(1).webp" alt="team image" fill />
               </div>
               <h3 style={{ fontSize: "2.5rem", fontWeight: "700", marginTop: "3rem" }}>
                  {careerWhyJoinUs}
               </h3>
               <p >{whyJoinUsText}</p>
            </center>
            <div
               style={{ width: "35rem", margin: "3rem 2rem" }}
            >
               {whyJoinUs.map((item, index) => {
                  return (
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: index == 0 ? "6%" : "4%",
                           marginTop: "2rem",
                        }}
                     >
                        <div
                           style={{ width: "25%", textAlign: "center" }}
                           className={styles.numberWhyJoin}
                        >
                           0{index + 1}
                        </div>
                        <div>
                           <div style={{ fontSize: "2.1rem", fontWeight: "700" }}>{item.title}</div>
                           <div>{item.content}</div>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div style={{ margin: "3rem 2rem" }}>
               <h3
                  style={{
                     fontSize: "2.5rem",
                     fontWeight: "700",
                     marginTop: "3rem",
                     textAlign: "center",
                  }}
               >
                  {careerOurCulture}
               </h3>
               <div className={styles.culture_content}>
                  <p >{cultureContent1}<br /><br /> {cultureContent2}</p>
               </div>
               <center>
                  <div style={{ height: "22rem", marginTop: "2.5rem", width: "95%", position: 'relative' }}>
                     <Image
                        src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/culture+(1).webp"
                        alt="group image"
                        fill
                        style={{ borderRadius: " 2.2rem" }}
                     />
                  </div>

                  <div className={styles.img_grid_container}>
                     <div className={styles.grid_top_container}>
                        <div className={styles.top_left_container}>
                           <div className={styles.tlc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img5.webp" alt="collage img" fill /></div>
                        </div>
                        <div className={styles.top_right_container}>
                           <div className={styles.trc_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img3+(1).webp" alt="collage img" fill /></div>
                        </div>
                     </div>
                     <div className={styles.mid1_container}>
                        <div className={styles.m1c_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img1+(2).webp" alt="collage img" fill /></div>
                     </div>
                     <div className={styles.mid2_container}>
                        <div className={styles.m2c_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/careers/collage-img2+(1).webp" alt="collage img" fill /></div>
                     </div>
                  </div>
               </center>
            </div>

            <div style={{ marginTop: "6rem" }}>
               <h2
                  style={{
                     fontSize: "2.5rem",
                     fontWeight: "700",
                     textAlign: "center",
                  }}
               >
                  {careerEmployeeReviews}
               </h2>
               <p
                  style={{
                     textAlign: "center",
                     paddingTop: "2rem",
                     paddingLeft: "0.5rem",
                     paddingRight: "0.5rem",
                  }}
               >
                  {careerEmployeeReviewsDesc}
               </p>
               <OuterMobileEmployeeReviewSwiper />
            </div>
            <div style={{ margin: "6rem 2rem 0rem 2rem" }}>
               <h2
                  style={{
                     fontSize: "2.5rem",
                     fontWeight: "700",
                     marginTop: "3rem",
                     textAlign: "center",
                  }}
               >
                  {careerOurBenefits}
               </h2>
               <p style={{ textAlign: "center", paddingTop: "2rem" }}>{careerOurBenefitsDesc}</p>
               <div>
                  <MobileOurBenefits benefits={benefits} />
               </div>
            </div>
            <div id="availableVacancyq" style={{ margin: "6rem 2rem 0 2rem", scrollMarginTop: "9rem" }}>
               {/* <h1
                  style={{
                     fontSize: "2.5rem",
                     fontWeight: "700",
                     marginTop: "3rem",
                     textAlign: "center",
                  }}
               >
                  {careerAvailableVacancy}
               </h1> */}
               <p style={{ textAlign: "center", paddingTop: "2rem" }}>
                  {careerAvailableVacancyDesc}
               </p>
               <div
                  style={{
                     paddingLeft: "1rem",
                     paddingRight: "1rem",
                     marginTop: "2rem",
                     marginBottom: "8rem",
                  }}
               >
                  {vacancy.map((item, indx) => {
                     return (
                        <MobileVacancyCard
                           title={item.title}
                           description={item.description}
                           vacancyLocation={item.vacancyLocation}
                           vacancyType={item.vacancyType}
                           id={item.id}
                           indx={indx}
                        />
                     );
                  })}
               </div>
            </div>
         </section>
      </div>
   );
};
export default MobileCareer;
