// import DesktopCareer from "@/components/career/DesktopCareer";
// import MobileCareer from "@/components/career/MobileCareer";
import Loading from "@/components/common/Loading";
import switchStyles from "../styles/desktopMobileSwitch.module.css";
import React, { useEffect, useState } from "react";
import content from "../language/ENGLISH.json";
import { getAvailableVacancy } from "@/services/signUpServices";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopCareer = dynamic(() => import("../components/career/DesktopCareer"), {
   loading: () => <Loading />,
});

const MobileCareer = dynamic(() => import("../components/career/MobileCareer"), {
   loading: () => <Loading />,
});

function CareerPage(props) {
   const { allJobsData } = props;
   const {
      careerOurBenefitsCard1,
      careerOurBenefitsCard1Desc,
      careerOurBenefitsCard2,
      careerOurBenefitsCard2Desc,
      careerOurBenefitsCard3,
      careerOurBenefitsCard3Desc,
      careerOurBenefitsCard4,
      careerOurBenefitsCard4Desc,
      careerOurBenefitsCard5,
      careerOurBenefitsCard5Desc,
      careerOurBenefitsCard6,
      careerOurBenefitsCard6Desc,
      careerOurBenefitsCard7,
      careerOurBenefitsCard7Desc,
      careerOurBenefitsCard8,
      careerOurBenefitsCard8Desc,
   } = content;
   const benefits = [
      {
         title: careerOurBenefitsCard1,
         color: "#BE49D3",
         img: "assets/career/transparency.svg",
         content: careerOurBenefitsCard1Desc,
         altText: "transperency"
      },
      {
         title: careerOurBenefitsCard2,
         color: "#3165F5",
         img: "assets/career/work-life.svg",
         content: careerOurBenefitsCard2Desc,
         altText: 'work life balance'
      },
      {
         title: careerOurBenefitsCard3,
         color: "#F58A25",
         img: "assets/career/growth-opportunity.svg",
         content: careerOurBenefitsCard3Desc,
         altText: 'growth opportunities'
      },
      {
         title: careerOurBenefitsCard4,
         color: "#3F9543",
         img: "assets/career/health-insurance.svg",
         content: careerOurBenefitsCard4Desc,
         altText: 'health insurance'
      },
      {
         title: careerOurBenefitsCard5,
         color: "#362E1A",
         img: "assets/career/learning.svg",
         content: careerOurBenefitsCard5Desc,
         altText: 'learning opportunities'
      },
      {
         title: careerOurBenefitsCard6,
         color: "#3165F5",
         img: "assets/career/infrastructure.svg",
         content: careerOurBenefitsCard6Desc,
         altText: 'work from home'
      },
      {
         title: careerOurBenefitsCard7,
         color: "#F58A25",
         img: "assets/career/reward.svg",
         content: careerOurBenefitsCard7Desc,
         altText: 'rewards and recognition'
      },
      {
         title: careerOurBenefitsCard8,
         img: "assets/career/parties.svg",
         color: "#3165F5",
         content: careerOurBenefitsCard8Desc,
      },
   ];

   let vacancy =
      allJobsData &&
      allJobsData.map((item) => ({
         id: item.id,
         title: item.title,
         description:
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.",
         vacancyType: item.experience,
         vacancyLocation: item?.jobLocations[0]?.city + ", " + item?.jobLocations[0]?.state,
      }));

   return (
      <>
         <Head>
            <title>
               Join the QueueBuster POS Team - Unlock Exciting Career Opportunities Awaiting You!
            </title>
            <meta
               name="description"
               content="Seeking a job in the fintech sector? QueueBuster presents exciting career opportunities for talented individuals. Apply today to join us on this rewarding journey."
            />
            <link rel="canonical" href="https://queuebuster.co/career" />
            <link rel="alternate" href="https://queuebuster.co/career" hrefLang="en" />
            <meta
               property="og:title"
               content="Join the QueueBuster POS Team - Unlock Exciting Career Opportunities Awaiting You!"
            />
            <meta
               property="og:description"
               content="Seeking a job in the fintech sector? QueueBuster presents exciting career opportunities for talented individuals. Apply today to join us on this rewarding journey."
            />
            <meta property="og:url" content="https://queuebuster.co/career" />
            <meta
               property="og:image"
               content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/ALL-IN-ONE_OG.png"
            />
         </Head>
         <div className={switchStyles.desktop}>
            <DesktopCareer benefits={benefits} vacancy={vacancy} />
         </div>
         <div className={switchStyles.mobile}>
            <MobileCareer benefits={benefits} vacancy={vacancy} />
         </div>
      </>
   );
}

export const getServerSideProps = async () => {
   try {
      const data = await getAvailableVacancy();
      if (data.status == false) {
         return {
            props: { allJobsData: [] },
         };
      } else {
         return {
            props: { allJobsData: data },
         };
      }
   } catch (error) {
      console.error("Error fetching data:", error);
      return {
         props: { allJobsData: [] }, // Fallback data
      };
   }
};

export default CareerPage;
