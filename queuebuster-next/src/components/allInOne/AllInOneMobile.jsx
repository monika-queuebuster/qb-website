import styles from "../../styles/allInOnePOS/allInOnePOSMobile.module.css";
import { inter_Regular } from "../common/Fonts";
import { CustomButton, SwiperForCustomerFeedbackMobile } from "../qbStrap";
import MobileIndustryWiseCard from "../homePage/MobileIndustryWiseCard";
import FAQmobile from "../Industry/FAQ_mobile";
import { BusinessSuperAppMobile, ThreeSimpleSteps } from "../mobileQbStrap";
import content from "../../language/ENGLISH.json";
import Image from "next/image";
import { testimonialData, videoTestimonial } from "@/constants/common";
import MobileTestimonialSection from "../common/MobileTestimonialSection";

const AllInOneMobile = () => {
   const { desc1, desc2, desc3, desc4 } = content.testimonial;
   const customersData = [
      {
         title: "Customers",
         data: "65,000+",
      },
      {
         title: "Integrations",
         data: "50+",
      },
      {
         title: "Industries",
         data: "5+",
      },
      {
         title: "Years",
         data: "6+",
      },
   ];
   const Testimonials = [
      {
         img: "/assets/Brands/heineken.webp",
         name: "Chima Uba",
         designation: "QSR Head",
         description: desc1,
         company: "Heineken, Nigeria",
      },
      {
         img: "/assets/Brands/rareplanet.webp",
         name: "Ranodeep Saha",
         designation: "Co-Founder",
         description: desc3,
         company: "Rare Planet",
      },
      {
         img: "/assets/Brands/happilo.webp",
         name: "Vikas D Nahar",
         designation: "Founder and CEO",
         description: desc2,
         company: "Happilo",
      },
   ];
   const industries = [
      { title: "Retail", color: "#A85443" },
      { title: "Restaurants", color: "#D90429" },
      { title: "Grocery Stores", color: "#7E9F3C" },
      { title: "Spa & Salon", color: "#7678ED" },
      { title: "Electronics", color: "#204F98" },
   ];
   return (
      <div>
         <div style={{ width: "100vw", height: "40vh", marginTop: "2rem", position: 'relative' }}>
            <Image
               src="/assets/allInOneHero.webp"
               alt="hero image"
               fill
            />
         </div>
         <div style={{ padding: "0 1rem", marginBottom: "2.5rem" }}>
            <h1>
               <div
                  style={{
                     color: "#343434",
                     fontSize: "3.5rem",
                     fontWeight: "700",
                     paddingTop: "1rem",
                  }}
               >
                  Smart Android POS
               </div>
               <div
                  style={{
                     fontSize: "3.5rem",
                     fontWeight: "400",
                  }}
               >
                  Billing software
               </div>
            </h1>
            <div
               className={`${inter_Regular.className}`}
               style={{
                  fontSize: "1.6rem",
                  paddingTop: "1rem",
                  color: "#5A5A5A",
               }}
            >
               We manage your point of sale and keep everything around your business up-to-date with
               our POS App.
            </div>
            <div style={{ display: "flex", paddingTop: "2rem" }}>
               <CustomButton
                  text="Get Started"
                  styles={{
                     backgroundColor: "#212121",
                     fontSize: "1.6rem",
                     color: "#FFFFFF",
                     width: "12rem",
                     height: "4rem",
                     fontWeight: "600",
                     fontSize: "1.2rem",
                     border: `0.1rem solid #000D4B`,
                  }}
                  onClick={(e) => {
                     console.log(e);
                  }}
               />
            </div>

         </div>
         <div className={styles.totalCustomers}>
            <div
               style={{ display: "flex", padding: "1.5rem 2rem", justifyContent: "space-between" }}
            >
               {customersData.map((el) => {
                  return (
                     <div>
                        <h3 style={{ fontWeight: "700", color: "#252526" }}>{el.data}</h3>
                        <p style={{ color: "#7A6C47", opacity: "0.6" }}>{el.title}</p>
                     </div>
                  );
               })}
            </div>
         </div>
         <MobileIndustryWiseCard
            heading={"Business Types"}
            subHeading={"Streamline Business with ease"}
            desc={
               "There’s no one-size-fit-all in business, so we are here with our streamlined customized approach for all business types."
            }
            headerStyle={{ width: "50%" }}
            industries={industries}
         />
         <div style={{ marginTop: "3rem" }}>
            <BusinessSuperAppMobile />
         </div>
         <div style={{ marginTop: "2rem" }}>
            <ThreeSimpleSteps />
         </div>
         <MobileTestimonialSection testimonialData={testimonialData} videoTestimonial={videoTestimonial} />
      </div>
   );
};

export default AllInOneMobile;
