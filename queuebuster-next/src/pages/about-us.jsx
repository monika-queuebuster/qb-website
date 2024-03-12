// import DesktopAboutUs from "@/components/aboutUs/DesktopAboutUs";
// import MobileAboutUs from "@/components/aboutUs/MobileAboutUs";
import { getTeamsData } from "@/services/signUpServices";
import React, { useState } from "react";
import switchStyles from "../styles/desktopMobileSwitch.module.css";

import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const DesktopAboutUs = dynamic(() => import("../components/aboutUs/DesktopAboutUs"), {
   loading: () => <Loading />,
});

const MobileAboutUs = dynamic(() => import("../components/aboutUs/MobileAboutUs"), {
   loading: () => <Loading />,
});

const AboutUs = ({ teamsData, departments, mobileView }) => {
   // console.log(departments,"my dep")
   // const [selectedTeam, setSelectedTeam] = useState(departments[0]);
   // const [teamTitles, setTeamTitles] = useState(
   //    departments.map((item, index) => ({
   //       title: item,
   //       isSelected: index === 0 ? true : false,
   //       id: item,
   //    }))
   // );
   let Investers = [
      { url: "/assets/AboutUs/chiratae.webp", altText: 'chiratae' },
      { url: "/assets/AboutUs/On.webp", altText: 'On' },
      { url: "/assets/AboutUs/unprime.webp", altText: 'unprime' },
      { url: "/assets/AboutUs/flourish.webp", altText: 'flourish' },
      { url: "/assets/AboutUs/sparkleFund.webp", altText: 'sparkle fund' },
   ];
   // const handleTeamChange = (team) => {
   //    let updatedTeamList = teamTitles.map((el) => {
   //       if (el.id == team.id) {
   //          el.isSelected = true;
   //          setSelectedTeam(el.id);
   //       } else {
   //          el.isSelected = false;
   //       }
   //       return el;
   //    });
   //    setTeamTitles(updatedTeamList);
   // };
   return (
      <>
         <Head>
            <title>QueueBuster POS - India's No.1 Business Super App</title>
            <meta
               name="description"
               content="Join the league of 65,000+ thriving merchants and business. QueueBuster POS simplifies daily operations and helps manage businesses super efficiently."
            />
            <link rel="canonical" href="https://queuebuster.co/about-us" />
            <link rel="alternate" href="https://queuebuster.co/about-us" hrefLang="en" />
            <meta
               property="og:title"
               content="About QueueBuster POS - India's No.1 Business Super App - Download the App now!"
            />
            <meta
               property="og:description"
               content="Learn why 65,000+ merchants and business trust QueueBuster POS app. Our QB application simplifies daily operations and helps manage businesses more efficiently. With features like Billing, Inventory, Khata, Online Dukaan, Customers, Loyalty and much more."
            />
            <meta property="og:url" content="https://queuebuster.co/about-us" />
            <meta
               property="og:image"
               content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/ALL-IN-ONE_OG.png"
            />
         </Head>

         {
            mobileView ? <MobileAboutUs
               // teamTitles={teamTitles}
               // handleTeamChange={handleTeamChange}
               Investers={Investers}
            // teamData={teamsData}
            // selectedTeam={selectedTeam}
            />
               :
               <DesktopAboutUs
                  // teamTitles={teamTitles}
                  // handleTeamChange={handleTeamChange}
                  Investers={Investers}
               // teamData={teamsData}
               // selectedTeam={selectedTeam}
               />
         }
      </>
   );
};

// export const getServerSideProps = async () => {
//    const data = await getTeamsData();
//    return {
//       props: { teamsData: data.content, departments: data.departments },
//    };
// };

export default AboutUs;
